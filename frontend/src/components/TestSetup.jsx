import React from 'react';

function TestSetup({ sets, selectedSetId, setSelectedSetId, questionCount, setQuestionCount, poolSize, questionFormat, setQuestionFormat, askType, setAskType, generateTest }) {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4 rounded-4">
        <h4 className="text-center mb-4 fw-bold">Thiết lập Bài Kiểm Tra</h4>
        
        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Chọn học phần:</label>
          <select 
            className="form-select form-select-lg bg-light border-0" 
            value={selectedSetId} 
            onChange={(e) => setSelectedSetId(e.target.value)}
          >
            <option value="all">-- Tất cả từ vựng --</option>
            {sets.map(s => (
              <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Số lượng câu hỏi:</label>
          <input 
            type="number" 
            className="form-control form-control-lg bg-light border-0 fw-bold" 
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
            className="form-select form-select-lg bg-light border-0" 
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
            className="form-select form-select-lg bg-light border-0" 
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