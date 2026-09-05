import React from 'react';

function TestSetup({ sets, selectedSetId, setSelectedSetId, questionCount, setQuestionCount, poolSize, questionFormat, setQuestionFormat, askType, setAskType, generateTest }) {
  // Bỏ qua học phần ảo và nhóm theo thư mục
  const validSets = sets.filter(s => !s.title.startsWith('_Thư mục:'));
  const groupedSets = validSets.reduce((acc, set) => {
    const folder = set.folder_path || '🏠 Thư mục gốc';
    if (!acc[folder]) acc[folder] = [];
    acc[folder].push(set);
    return acc;
  }, {});

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4 rounded-4">
        <h4 className="text-center mb-4 fw-bold">Thiết lập Bài Kiểm Tra</h4>
        
        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Chọn học phần:</label>
          <select 
            className="form-select form-select-lg bg-light border-0 fw-bold text-dark" 
            value={selectedSetId} 
            onChange={(e) => setSelectedSetId(e.target.value)}
          >
            <option value="all">-- Tất cả từ vựng --</option>
            {Object.entries(groupedSets).map(([folder, folderSets]) => (
              <optgroup key={folder} label={folder}>
                {folderSets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Số lượng câu hỏi:</label>
          <input 
            type="number" 
            className="form-control form-control-lg bg-light border-0 fw-bold text-dark" 
            value={questionCount} 
            onChange={(e) => setQuestionCount(Number(e.target.value))} 
            max={poolSize}
            min={1}
          />
          <small className="text-muted">Tối đa {poolSize} câu trong phần này.</small>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Hình thức kiểm tra:</label>
          <select 
            className="form-select form-select-lg bg-light border-0 fw-bold text-dark" 
            value={questionFormat} 
            onChange={(e) => setQuestionFormat(e.target.value)}
          >
            <option value="choice">100% Trắc nghiệm</option>
            <option value="typing">100% Tự luận (Gõ từ)</option>
            <option value="mixed">Hỗn hợp (50% Trắc nghiệm - 50% Tự luận)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold text-muted">Chiều hiển thị câu hỏi:</label>
          <select 
            className="form-select form-select-lg bg-light border-0 fw-bold text-dark" 
            value={askType} 
            onChange={(e) => setAskType(e.target.value)}
          >
            <option value="meaning">Tiếng Việt (Hỏi Nghĩa, đáp Từ vựng)</option>
            <option value="word">Tiếng Nhật (Hỏi Từ vựng, đáp Nghĩa)</option>
          </select>
        </div>

        <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={generateTest}>
          Bắt đầu làm bài
        </button>
      </div>
    </div>
  );
}

export default TestSetup;