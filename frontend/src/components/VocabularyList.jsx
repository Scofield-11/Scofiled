import React, { useState, useContext } from 'react';
import api from '../api/axiosConfig';
import AddVocabularyForm from './AddVocabularyForm';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';

function VocabularyList() {
  const { sets, loading, fetchSets, hasMore } = useContext(VocabContext);
  
  const [expandedSetId, setExpandedSetId] = useState(null);
  const [viewMode, setViewMode] = useState('list'); 
  const [currentPath, setCurrentPath] = useState(""); 
  const [customFolders, setCustomFolders] = useState([]); // Trạng thái chứa thư mục trống vừa tạo

  React.useEffect(() => { fetchSets(); }, [fetchSets]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyStarred, setShowOnlyStarred] = useState(false);
  const [sortOption, setSortOption] = useState('newest'); 

  const highlightText = (text, highlight) => {
    if (!highlight || !text) return text;
    const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i} className="bg-warning px-1 rounded">{part}</mark> : part)}</span>;
  };

  const calculateProgress = (vocabularies) => {
    if (!vocabularies || vocabularies.length === 0) return 0;
    const learned = vocabularies.filter(v => v.repetition > 0).length;
    return Math.round((learned / vocabularies.length) * 100);
  };

  const isSearching = searchTerm.trim().length > 0;
  let displaySets = [];
  let displayFolders = [];

  // Tổng hợp tất cả các thư mục có trong hệ thống (từ Data thật + Data vừa tạo)
  const allExistingFolders = Array.from(new Set([
    ...sets.map(s => s.folder_path).filter(p => p),
    ...customFolders
  ])).sort();

  if (isSearching) {
    displaySets = sets.map(set => {
      let filteredVocabs = set.vocabularies;
      if (showOnlyStarred) filteredVocabs = filteredVocabs.filter(v => v.is_starred);
      filteredVocabs = filteredVocabs.filter(v => 
        v.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
        v.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...set, vocabularies: filteredVocabs, progress: calculateProgress(set.vocabularies) };
    }).filter(set => set.title.toLowerCase().includes(searchTerm.toLowerCase()) || set.vocabularies.length > 0);
  } else {
    const currentLevelSets = [];
    const subfolders = new Set();

    const checkPathForFolders = (path) => {
      if (!path) return;
      if (path === currentPath) {
        // Thư mục hiện tại (Không làm gì cả)
      } else if (path.startsWith(currentPath ? currentPath + '/' : '')) {
        const remainingPath = currentPath ? path.substring(currentPath.length + 1) : path;
        const nextFolder = remainingPath.split('/')[0];
        if (nextFolder) subfolders.add(nextFolder);
      }
    };

    sets.forEach(set => {
      let isMatch = true;
      if (showOnlyStarred && !set.vocabularies.some(v => v.is_starred)) isMatch = false;
      if (!isMatch) return;

      const path = (set.folder_path || "").trim();
      if (path === currentPath) currentLevelSets.push(set); 
      checkPathForFolders(path);
    });

    // Gom cả các thư mục rỗng người dùng vừa tạo vào danh sách hiển thị
    customFolders.forEach(path => checkPathForFolders(path));

    displayFolders = Array.from(subfolders);
    displaySets = currentLevelSets
      .filter(set => !set.title.startsWith('_Thư mục:')) // BỔ SUNG: Ẩn học phần ảo giữ folder
      .map(set => {
        let filteredVocabs = set.vocabularies;
        if (showOnlyStarred) filteredVocabs = filteredVocabs.filter(v => v.is_starred);
        
        if (sortOption === 'az') filteredVocabs.sort((a, b) => a.word.localeCompare(b.word));
        else if (sortOption === 'za') filteredVocabs.sort((a, b) => b.word.localeCompare(a.word));
        else filteredVocabs.sort((a, b) => b.id - a.id);

        return { ...set, vocabularies: filteredVocabs, progress: calculateProgress(set.vocabularies) };
      });
  }

  const [editingVocabId, setEditingVocabId] = useState(null);
  const [editWord, setEditWord] = useState('');
  const [editFurigana, setEditFurigana] = useState('');
  const [editMeaning, setEditMeaning] = useState('');
  const [addingToSetId, setAddingToSetId] = useState(null);
  const [newWord, setNewWord] = useState('');
  const [newFurigana, setNewFurigana] = useState('');
  const [newMeaning, setNewMeaning] = useState('');

  const toggleSet = (setId) => {
    if (viewMode === 'grid') setViewMode('list'); 
    setExpandedSetId(expandedSetId === setId ? null : setId);
    setAddingToSetId(null);
  };

  // Nút tạo thư mục trên màn hình chính
  // Nút tạo thư mục trên màn hình chính
  const handleCreateFolder = async () => {
    const newFolder = window.prompt("Nhập tên thư mục con mới:");
    if (newFolder && newFolder.trim()) {
      const folderName = newFolder.trim();
      const fullPath = currentPath ? `${currentPath}/${folderName}` : folderName;
      
      if (!customFolders.includes(fullPath) && !allExistingFolders.includes(fullPath)) {
        try {
          // Gọi API để tạo một Học phần ảo (rỗng) nhằm lưu folder_path vào Database
          await api.post("/vocabularies/bulk-import", {
            title: `_Thư mục: ${folderName}_`, // Tên đặc biệt để nhận diện là học phần ảo
            raw_text: " ", // Văn bản trống
            folder_path: fullPath
          });
          
          setCustomFolders([...customFolders, fullPath]);
          toast.success(`Đã tạo thư mục: ${folderName}`);
          fetchSets(false, true); // Refresh dữ liệu từ server
        } catch (error) {
          toast.error("Lỗi khi tạo thư mục!");
        }
      } else {
        toast.warning("Thư mục này đã tồn tại!");
      }
    }
  };

  const handleDeleteSet = async (e, setId, setTitle) => {
    e.stopPropagation();
    if (window.confirm(`Xóa toàn bộ học phần "${setTitle}"?`)) {
      try { await api.delete(`/sets/${setId}`); toast.success("Đã xóa học phần!"); fetchSets(false, true); } 
      catch (error) { toast.error("Xóa thất bại!"); }
    }
  };

  const handleDeleteVocab = async (vocabId) => {
    if (window.confirm("Xóa từ này?")) {
      try { await api.delete(`/vocabularies/${vocabId}`); toast.success("Đã xóa từ vựng!"); fetchSets(false, true); } 
      catch (error) { toast.error("Lỗi xóa từ vựng"); }
    }
  };

  const handleEditClick = (vocab) => {
    setAddingToSetId(null);
    setEditingVocabId(vocab.id);
    setEditWord(vocab.word);
    setEditFurigana(vocab.furigana || '');
    setEditMeaning(vocab.meaning);
  };

  const handleSaveEdit = async (vocabId) => {
    try {
      await api.put(`/vocabularies/${vocabId}`, { word: editWord, furigana: editFurigana || null, meaning: editMeaning });
      setEditingVocabId(null); toast.success("Cập nhật thành công!"); fetchSets(false, true);
    } catch (error) { toast.error("Lỗi cập nhật"); }
  };

  const handleAddClick = (setId) => {
    setEditingVocabId(null); setAddingToSetId(setId); setNewWord(''); setNewFurigana(''); setNewMeaning('');
  };

  const handleSaveNew = async (setId) => {
    if (!newWord.trim() || !newMeaning.trim()) return toast.warning("Nhập đủ thông tin!");
    try {
      await api.post('/vocabularies', { word: newWord.trim(), furigana: newFurigana.trim() || null, meaning: newMeaning.trim(), set_id: setId });
      toast.success("Đã thêm từ vựng mới!"); setAddingToSetId(null); fetchSets(false, true);
    } catch (error) { toast.error("Lỗi thêm từ vựng!"); }
  };

  const handleToggleStarList = async (e, vocab) => {
    e.stopPropagation();
    try { await api.put(`/vocabularies/${vocab.id}/star`, { is_starred: !vocab.is_starred }); fetchSets(false, true); } 
    catch (error) { toast.error("Lỗi cập nhật sao"); }
  };

  const handleExportCSV = (e, set) => {
    e.stopPropagation();
    if (set.vocabularies.length === 0) return toast.warning("Học phần trống!");
    let csvContent = "Word,Furigana,Meaning\n";
    set.vocabularies.forEach(v => {
      let word = v.word.replace(/"/g, '""');
      let furigana = (v.furigana || "").replace(/"/g, '""');
      let meaning = v.meaning.replace(/"/g, '""');
      csvContent += `"${word}","${furigana}","${meaning}"\n`;
    });
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' }); 
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${set.title}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    toast.success(`Đã xuất CSV: ${set.title}`);
  };

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="container-fluid mt-4 mx-auto" style={{ maxWidth: '1000px' }}>
      
      {/* Form Tạo Học Phần (Nhận context của thư mục hiện tại để set mặc định) */}
      <AddVocabularyForm 
        onAddSuccess={() => fetchSets(false, true)} 
        existingFolders={allExistingFolders} 
        currentPath={currentPath} 
      />

      {/* THANH TÌM KIẾM & LỌC */}
      <div className="d-flex flex-column flex-lg-row gap-3 mb-4 fade-in-slide align-items-lg-center">
        <div className="position-relative flex-grow-1">
          <span className="position-absolute top-50 translate-middle-y ms-4 fs-5 text-muted">🔍</span>
          <input 
            type="text" 
            className="form-control form-control-lg bg-white border-0 shadow-sm rounded-pill fw-bold text-primary w-100" 
            placeholder="Tìm kiếm từ vựng, ý nghĩa..." 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '3.5rem', height: '54px' }}
          />
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap gap-3 justify-content-between">
          <select 
            className="form-select form-select-lg bg-white border-0 shadow-sm rounded-pill fw-bold text-muted custom-select-fix"
            value={sortOption} onChange={(e) => setSortOption(e.target.value)}
            style={{ height: '54px', minWidth: '160px', cursor: 'pointer' }}
          >
            <option value="newest">Mới nhất</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
          <button 
            className={`btn btn-lg fw-bold rounded-pill shadow-sm text-nowrap px-4 ${showOnlyStarred ? 'btn-warning text-white' : 'btn-white bg-white text-muted border-0'}`}
            onClick={() => setShowOnlyStarred(!showOnlyStarred)} style={{ height: '54px' }}
          >
            {showOnlyStarred ? '⭐ Lọc từ khó' : '☆ Lọc từ gắn sao'}
          </button>
          <div className="d-none d-md-flex align-items-center bg-white p-1 shadow-sm border" style={{ height: '54px', borderRadius: '50px' }}>
            <button 
              className={`border-0 h-100 d-flex align-items-center justify-content-center transition-all ${viewMode === 'list' ? 'bg-primary text-white shadow-sm' : 'bg-transparent text-muted'}`} 
              style={{ width: '64px', borderRadius: '40px' }} 
              onClick={() => setViewMode('list')}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
            <button 
              className={`border-0 h-100 d-flex align-items-center justify-content-center transition-all ${viewMode === 'grid' ? 'bg-primary text-white shadow-sm' : 'bg-transparent text-muted'}`} 
              style={{ width: '64px', borderRadius: '40px' }} 
              onClick={() => setViewMode('grid')}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
          </div>
        </div>
      </div>

      {/* THANH ĐIỀU HƯỚNG THƯ MỤC KÈM NÚT TẠO (BREADCRUMB) */}
      {!isSearching && (
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white px-4 py-3 rounded-pill shadow-sm fade-in-slide">
          <div className="d-flex align-items-center flex-wrap gap-2">
            <button className={`btn btn-sm rounded-pill fw-bold ${currentPath === "" ? 'btn-primary shadow-sm' : 'btn-light'}`} onClick={() => setCurrentPath("")}>
              🏠 Gốc
            </button>
            {currentPath && currentPath.split('/').map((part, idx, arr) => {
              const pathToHere = arr.slice(0, idx + 1).join('/');
              const isLast = idx === arr.length - 1;
              return (
                <React.Fragment key={idx}>
                  <span className="text-muted fw-bold">/</span>
                  <button className={`btn btn-sm rounded-pill fw-bold ${isLast ? 'btn-primary shadow-sm' : 'btn-light'}`} onClick={() => setCurrentPath(pathToHere)}>
                    {part}
                  </button>
                </React.Fragment>
              )
            })}
          </div>
          
          {/* NÚT TẠO THƯ MỤC NẰM Ở ĐÂY */}
          <button className="btn btn-outline-primary btn-sm rounded-pill fw-bold px-3 d-flex align-items-center gap-2 transition-all hover-bg-light" onClick={handleCreateFolder}>
            <span className="fs-6">📁</span> <span className="d-none d-sm-block">Thư mục mới</span>
          </button>
        </div>
      )}

      {/* DANH SÁCH THƯ MỤC CON */}
      {!isSearching && displayFolders.length > 0 && (
        <div className="row g-3 mb-5 fade-in">
          {displayFolders.map(folderName => (
            <div key={folderName} className="col-6 col-md-4 col-lg-3">
              <div 
                className="card shadow-sm border-0 rounded-4 h-100 bg-white transition-all hover-bg-light" 
                style={{cursor: 'pointer'}}
                onClick={() => setCurrentPath(currentPath ? `${currentPath}/${folderName}` : folderName)}
              >
                <div className="card-body d-flex align-items-center gap-3 p-4">
                  <span className="fs-2">📁</span>
                  <h5 className="fw-bold mb-0 text-dark text-truncate w-100">{folderName}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DANH SÁCH HỌC PHẦN */}
      {sets.length === 0 ? (
        <EmptyState title="Thư viện trống" message="Chưa có học phần nào. Hãy tạo mới ở phần trên nhé!" />
      ) : displaySets.length === 0 && displayFolders.length === 0 ? (
        <div className="text-center text-muted mt-5 fw-bold fs-5">Khu vực này hiện đang trống.</div>
      ) : (
        <div className={viewMode === 'grid' ? 'row g-4' : ''}>
          {displaySets.map((vocabSet) => (
            <div key={vocabSet.id} className={viewMode === 'grid' ? 'col-md-6 col-xl-4' : 'mb-4'}>
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div 
                  className={`card-header bg-white p-4 border-0 rounded-4 d-flex ${viewMode === 'grid' ? 'flex-column align-items-start gap-3' : 'justify-content-between align-items-center'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleSet(vocabSet.id)}
                >
                  <div className={viewMode === 'grid' ? 'w-100' : ''}>
                    <h5 className="mb-2 fw-bold text-dark text-truncate" title={vocabSet.title}>{vocabSet.title}</h5>
                    <span className="badge bg-light text-muted border px-2 py-1">{vocabSet.vocabularies.length} thuật ngữ</span>
                    
                    <div className={`mt-3 ${viewMode === 'list' ? 'd-none' : 'w-100'}`}>
                      <div className="d-flex justify-content-between text-muted fw-bold mb-2" style={{ fontSize: '0.8rem' }}>
                        <span>Tiến độ</span>
                        <span>{vocabSet.progress}%</span>
                      </div>
                      <div className="progress rounded-pill bg-light" style={{ height: '6px' }}>
                        <div className="progress-bar bg-success rounded-pill" style={{ width: `${vocabSet.progress}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className={`d-flex align-items-center gap-2 ${viewMode === 'grid' ? 'w-100 justify-content-between mt-2' : ''}`}>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-light text-danger fw-bold border-0 px-3 py-2" onClick={(e) => handleDeleteSet(e, vocabSet.id, vocabSet.title)}>🗑️ Xóa</button>
                    </div>
                    {viewMode === 'list' && (
                      <span className="text-muted fs-5 ms-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width:'35px', height:'35px' }}>
                        {expandedSetId === vocabSet.id ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </div>

                {expandedSetId === vocabSet.id && viewMode === 'list' && (
                  <div className="card-body p-0 border-top bg-light rounded-bottom-4 fade-in-slide">
                    <div className="list-group list-group-flush rounded-bottom-4">
                      
                      {vocabSet.vocabularies.length === 0 && addingToSetId !== vocabSet.id && (
                        <div className="text-center py-4 text-muted fst-italic border-bottom border-light">Học phần trống. Hãy thêm thẻ đầu tiên!</div>
                      )}

                      {vocabSet.vocabularies.map((vocab) => (
                        <div key={vocab.id} className="list-group-item bg-white p-4 border-bottom border-light">
                          {editingVocabId === vocab.id ? (
                            <div className="row g-2 align-items-center">
                              <div className="col-sm-4">
                                <input type="text" className="form-control bg-light border-0" value={editWord} onChange={(e) => setEditWord(e.target.value)} autoFocus placeholder="Thuật ngữ" />
                              </div>
                              <div className="col-sm-3">
                                <input type="text" className="form-control bg-light border-0" value={editFurigana} onChange={(e) => setEditFurigana(e.target.value)} placeholder="Phiên âm" />
                              </div>
                              <div className="col-sm-3">
                                <input type="text" className="form-control bg-light border-0" value={editMeaning} onChange={(e) => setEditMeaning(e.target.value)} placeholder="Định nghĩa" />
                              </div>
                              <div className="col-sm-2 text-end">
                                <button className="btn btn-success fw-bold me-2 px-3" onClick={() => handleSaveEdit(vocab.id)}>Lưu</button>
                                <button className="btn btn-secondary fw-bold px-3" onClick={() => setEditingVocabId(null)}>Hủy</button>
                              </div>
                            </div>
                          ) : (
                            <div className="row align-items-center">
                              <div className="col-sm-5 border-end border-2 border-light d-flex align-items-center gap-3">
                                <button 
                                  className="btn btn-light rounded-circle border-0 d-flex align-items-center justify-content-center p-0 shadow-sm"
                                  style={{ width: '40px', height: '40px', color: vocab.is_starred ? '#ffc107' : '#dee2e6', fontSize: '1.4rem' }}
                                  onClick={(e) => handleToggleStarList(e, vocab)}
                                >★</button>
                                <div className="ms-1 text-truncate">
                                  {vocab.furigana && <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{vocab.furigana}</div>}
                                  <div className="fw-bold fs-5 text-dark">{highlightText(vocab.word, searchTerm)}</div>
                                </div>
                              </div>
                              <div className="col-sm-5 text-dark ps-4 text-truncate fs-5">
                                {highlightText(vocab.meaning, searchTerm)}
                              </div>
                              <div className="col-sm-2 text-end">
                                <button className="btn btn-sm btn-light text-primary fw-bold px-3 py-2 me-2" onClick={() => handleEditClick(vocab)}>✏️ Sửa</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {addingToSetId === vocabSet.id ? (
                        <div className="list-group-item bg-white p-4 border-top border-primary border-2">
                          <div className="row g-2 align-items-center">
                            <div className="col-sm-4">
                              <input type="text" className="form-control bg-light border-0" value={newWord} onChange={(e) => setNewWord(e.target.value)} autoFocus placeholder="Từ vựng mới" />
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control bg-light border-0" value={newFurigana} onChange={(e) => setNewFurigana(e.target.value)} placeholder="Phiên âm (Tùy chọn)" />
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control bg-light border-0" value={newMeaning} onChange={(e) => setNewMeaning(e.target.value)} placeholder="Định nghĩa" />
                            </div>
                            <div className="col-sm-2 text-end">
                              <button className="btn btn-primary fw-bold me-2 px-3" onClick={() => handleSaveNew(vocabSet.id)}>Lưu</button>
                              <button className="btn btn-secondary fw-bold px-3" onClick={() => setAddingToSetId(null)}>Hủy</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="list-group-item bg-light p-3 text-center border-0 rounded-bottom-4">
                          <button 
                            className="btn btn-outline-primary fw-bold rounded-pill px-4" 
                            style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                            onClick={() => handleAddClick(vocabSet.id)}
                          >
                            + Thêm thẻ mới
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {hasMore && sets.length > 0 && !searchTerm && (
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-outline-primary px-5 py-3 fs-5 fw-bold rounded-pill shadow-sm" onClick={() => fetchSets(true)}>
            Tải thêm học phần cũ ↓
          </button>
        </div>
      )}  
    </div>
  );
}

export default VocabularyList;