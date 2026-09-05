import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import Flashcard from './Flashcard';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';

function FlashcardMode() {
  const { sets, loading, fetchSets } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => {
    fetchSets();
  }, [fetchSets]);
  
  const [vocabsToStudy, setVocabsToStudy] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onlyStarred, setOnlyStarred] = useState(false);

  // Sửa nhanh trên Flashcard
  const [editingVocab, setEditingVocab] = useState(null);

  // Cấu hình nâng cao
  const [autoPlay, setAutoPlay] = useState(() => localStorage.getItem("flashcardAutoPlay") === "true");
  const [reverse, setReverse] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("flashcardAutoPlay", autoPlay);
  }, [autoPlay]);

  const vibrate = (ms = 40) => {
    if (navigator.vibrate) navigator.vibrate(ms);
  };

  const handleStart = () => {
    let selectedVocabs = [];
    if (selectedSetId === 'all') {
      selectedVocabs = sets.flatMap(s => s.vocabularies);
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) selectedVocabs = targetSet.vocabularies;
    }

    if (selectedVocabs.length === 0) return toast.warning("Học phần này chưa có từ vựng!");
    if (onlyStarred) {
      selectedVocabs = selectedVocabs.filter(v => v.is_starred);
      if (selectedVocabs.length === 0) return toast.warning("Không có từ vựng nào được gắn sao (⭐)!");
    }

    setVocabsToStudy(selectedVocabs);
    setCurrentIndex(0);
    setIsStarted(true);
    setIsFinished(false);
    setIsSlideshow(false); 
  };

  const handleNext = useCallback(() => {
    vibrate();
    if (currentIndex < vocabsToStudy.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setIsSlideshow(false); 
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  }, [currentIndex, vocabsToStudy.length]);

  const handlePrev = useCallback(() => {
    vibrate();
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  const handleShuffle = () => {
    vibrate(60);
    const shuffled = [...vocabsToStudy].sort(() => 0.5 - Math.random());
    setVocabsToStudy(shuffled);
    setCurrentIndex(0); 
    setIsFinished(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => toast.error("Trình duyệt không hỗ trợ Fullscreen"));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isStarted || isFinished || editingVocab) return;
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault(); 
        document.querySelector('.flashcard-container')?.click();
      } else if (e.code === 'ArrowRight') handleNext();
      else if (e.code === 'ArrowLeft') handlePrev();
      else if (e.code === 'KeyF') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStarted, isFinished, editingVocab, handleNext, handlePrev]);

  useEffect(() => {
    let flipTimer, nextTimer;
    if (isSlideshow && !isFinished && isStarted && !editingVocab) {
      flipTimer = setTimeout(() => document.querySelector('.flashcard-container')?.click(), 2500); 
      nextTimer = setTimeout(() => handleNext(), 5000); 
    }
    return () => { clearTimeout(flipTimer); clearTimeout(nextTimer); };
  }, [currentIndex, isSlideshow, isFinished, isStarted, editingVocab, handleNext]);

  const handleQuickSave = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/vocabularies/${editingVocab.id}`, editingVocab);
      
      // Cập nhật mảng đang học ngay lập tức để thấy thay đổi
      setVocabsToStudy(prev => {
        const newArr = [...prev];
        newArr[currentIndex] = editingVocab;
        return newArr;
      });
      
      toast.success("Đã lưu chỉnh sửa!");
      setEditingVocab(null);
    } catch (err) {
      toast.error("Lỗi khi lưu!");
    }
  };

  if (loading) return <LoadingSkeleton />;

  if (!isStarted) {
    return (
      <div className="container mt-5" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <h4 className="text-center mb-4 fw-bold">Chế độ Flashcards</h4>
          <div className="mb-4">
            <label className="form-label fw-bold text-muted">Chọn học phần muốn ôn:</label>
            <select className="form-select form-select-lg bg-light border-0" value={selectedSetId} onChange={(e) => setSelectedSetId(e.target.value)}>
              <option value="all">-- Tất cả từ vựng --</option>
              {sets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
            </select>
          </div>
          <div className="mb-4 text-start">
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-2">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="starToggle" checked={onlyStarred} onChange={(e) => setOnlyStarred(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="starToggle" style={{ cursor: 'pointer' }}>Chỉ ôn tập thẻ được gắn sao (⭐)</label>
            </div>
          </div>
          <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={handleStart}>Bắt đầu lật thẻ</button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container mt-5 text-center fade-in-slide">
        <div className="card shadow-sm border-0 p-5 rounded-4 mx-auto bg-primary text-white position-relative overflow-hidden" style={{ maxWidth: '500px' }}>
          <div className="position-relative" style={{ zIndex: 2 }}>
            <div className="display-1 mb-3">🎓</div>
            <h2 className="fw-bold mb-3">Chúc mừng!</h2>
            <p className="fs-5 opacity-75 mb-4">Bạn đã ôn tập xong <strong>{vocabsToStudy.length}</strong> thẻ từ vựng.</p>
            <div className="d-flex flex-column gap-3">
              <button className="btn btn-warning py-3 fw-bold text-dark fs-5 shadow-sm" onClick={handleShuffle}>🔀 Trộn & Học lại</button>
              <button className="btn btn-light py-3 fw-bold fs-5 text-primary shadow-sm" onClick={() => setIsStarted(false)}>Học phần khác</button>
            </div>
          </div>
          <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '200px', height: '200px', top: '-50px', right: '-50px' }}></div>
          <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '150px', height: '150px', bottom: '-20px', left: '-50px' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container-fluid py-4 text-center transition-all ${isFullscreen ? 'bg-light d-flex flex-column justify-content-center align-items-center' : ''}`} ref={containerRef} style={isFullscreen ? { height: '100vh', overflow: 'hidden' } : {}}>
      
      {/* Modal Sửa Nhanh */}
      {editingVocab && (
        <div className="modal d-flex align-items-center justify-content-center fade-in" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="card border-0 shadow-lg rounded-4 p-4" style={{ width: '90%', maxWidth: '400px' }}>
            <h5 className="fw-bold mb-4">✏️ Sửa nhanh thẻ</h5>
            <form onSubmit={handleQuickSave}>
              <input type="text" className="form-control bg-light border-0 mb-3 fw-bold" value={editingVocab.word} onChange={e => setEditingVocab({...editingVocab, word: e.target.value})} placeholder="Từ vựng" required />
              <input type="text" className="form-control bg-light border-0 mb-3" value={editingVocab.furigana || ''} onChange={e => setEditingVocab({...editingVocab, furigana: e.target.value})} placeholder="Phiên âm (Tùy chọn)" />
              <input type="text" className="form-control bg-light border-0 mb-4" value={editingVocab.meaning} onChange={e => setEditingVocab({...editingVocab, meaning: e.target.value})} placeholder="Ý nghĩa" required />
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-secondary w-50 fw-bold" onClick={() => setEditingVocab(null)}>Hủy</button>
                <button type="submit" className="btn btn-primary w-50 fw-bold">Lưu lại</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mx-auto mb-3" style={{ maxWidth: '450px' }}>
        <h3 className="m-0 fw-bold">Flashcards</h3>
        <button className="btn btn-light rounded-circle shadow-sm border-0" onClick={toggleFullscreen} title="Bật/Tắt Toàn màn hình (Phím F)">
          {isFullscreen ? '↙️' : '⛶'}
        </button>
      </div>
      
      <div className="mb-2 text-muted fw-bold d-flex justify-content-between align-items-center mx-auto" style={{ maxWidth: '450px' }}>
        <span>Thẻ {currentIndex + 1} / {vocabsToStudy.length}</span>
        <span>{Math.round(((currentIndex + 1) / vocabsToStudy.length) * 100)}%</span>
      </div>
      <div className="progress mb-4 mx-auto" style={{ height: '8px', maxWidth: '450px' }}>
        <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${((currentIndex + 1) / vocabsToStudy.length) * 100}%` }}></div>
      </div>

      <div className="d-flex justify-content-center fade-in-slide" key={currentIndex}>
        <Flashcard vocab={vocabsToStudy[currentIndex]} autoPlay={autoPlay} reverse={reverse} onEdit={setEditingVocab} />
      </div>
      
      <div className="d-flex flex-wrap justify-content-center gap-4 mx-auto mt-4" style={{ maxWidth: '600px' }}>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="autoPlaySwitch" checked={autoPlay} onChange={() => setAutoPlay(!autoPlay)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="autoPlaySwitch" style={{ cursor: 'pointer' }}>Phát âm</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="reverseSwitch" checked={reverse} onChange={() => setReverse(!reverse)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="reverseSwitch" style={{ cursor: 'pointer' }}>Đảo mặt</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="slideshowSwitch" checked={isSlideshow} onChange={() => setIsSlideshow(!isSlideshow)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="slideshowSwitch" style={{ cursor: 'pointer' }}>Trình chiếu</label>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-outline-secondary px-4 py-2 fw-bold" onClick={handlePrev} disabled={currentIndex === 0}>← Trước</button>
        <button className="btn btn-warning px-4 py-2 fw-bold text-white" onClick={handleShuffle}>🔀 Trộn</button>
        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleNext}>Tiếp →</button>
      </div>
      
      {!isFullscreen && (
        <p className="text-muted small mb-0 mt-4 d-none d-md-block">
          💡 <strong>Mẹo:</strong> Phím <strong>Space</strong> lật thẻ, <strong>Trái/Phải</strong> chuyển từ, <strong>F</strong> toàn màn hình.
        </p>
      )}

      {!isFullscreen && (
        <div className="mt-4">
           <button className="btn btn-link text-muted text-decoration-none fw-bold" onClick={() => setIsStarted(false)}>
              &larr; Đổi học phần khác
           </button>
        </div>
      )}
    </div>
  );
}

export default FlashcardMode;