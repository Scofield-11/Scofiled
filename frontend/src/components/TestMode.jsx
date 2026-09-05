import React, { useState, useEffect, useContext } from 'react';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';
import TestSetup from './TestSetup';
import TestResult from './TestResult';

function TestMode() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => {
    fetchSets();
    fetchAllVocabs();
  }, [fetchSets, fetchAllVocabs]);
  const [poolSize, setPoolSize] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const [questionCount, setQuestionCount] = useState(10);
  const [askType, setAskType] = useState('meaning'); 
  const [questionFormat, setQuestionFormat] = useState('choice'); 

  useEffect(() => {
    if (selectedSetId === 'all') {
      setPoolSize(allVocabs.length);
      if (allVocabs.length < questionCount) setQuestionCount(allVocabs.length || 10);
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) {
        setPoolSize(targetSet.vocabularies.length);
        if (targetSet.vocabularies.length < questionCount) setQuestionCount(targetSet.vocabularies.length);
      }
    }
  }, [selectedSetId, allVocabs, sets, questionCount]);

  const generateTest = () => {
    let pool = [];
    if (selectedSetId === 'all') {
      pool = allVocabs;
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) pool = targetSet.vocabularies;
    }

    if (pool.length === 0) {
      toast.warning("Học phần này chưa có từ vựng nào!");
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedVocabs = shuffled.slice(0, Math.min(questionCount, pool.length));

    const newQuestions = selectedVocabs.map((vocab) => {
      let type = questionFormat;
      if (questionFormat === 'mixed') {
        type = Math.random() > 0.5 ? 'choice' : 'typing';
      }

      const questionText = askType === 'meaning' ? vocab.meaning : vocab.word;
      const correctAnswer = askType === 'meaning' ? vocab.word : vocab.meaning;
      
      let options = [];
      if (type === 'choice') {
        // Thuật toán tạo nhiễu thông minh
        const scoredAnswers = allVocabs
          .filter(v => v.id !== vocab.id)
          .map(v => {
            let score = 0;
            const targetChars = vocab.word.split('');
            targetChars.forEach(c => {
              if (v.word.includes(c)) score += 1;
            });
            score += Math.random() * 0.5;
            return { ...v, score };
          });
          
        scoredAnswers.sort((a, b) => b.score - a.score);
        const wrongAnswers = scoredAnswers.slice(0, 3).map(v => askType === 'meaning' ? v.word : v.meaning);
        
        options = [...wrongAnswers, correctAnswer].sort(() => 0.5 - Math.random());
      }

      return {
        id: vocab.id,
        type,
        questionText,
        correctAnswer,
        options,
        userAnswer: '',
        isCorrect: null
      };
    });

    setQuestions(newQuestions);
    setIsTestStarted(true);
    setIsTestFinished(false);
  };

  const handleAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].userAnswer = value;
    setQuestions(updatedQuestions);
  };

  const submitTest = () => {
    const answeredCount = questions.filter(q => q.userAnswer.trim() !== '').length;
    
    // MỤC 16: Chống nộp bài rỗng
    if (answeredCount === 0) {
      toast.error("Vui lòng trả lời ít nhất 1 câu trước khi nộp bài!");
      return;
    }

    // MỤC 13: Cảnh báo bỏ sót câu hỏi
    if (answeredCount < questions.length) {
      const confirmSubmit = window.confirm(`Bạn mới hoàn thành ${answeredCount}/${questions.length} câu. Bạn có chắc chắn muốn nộp bài?`);
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    const gradedQuestions = questions.map(q => {
      const isCorrect = q.userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      if (isCorrect) correctCount++;
      return { ...q, isCorrect };
    });

    setQuestions(gradedQuestions);
    setScore({ correct: correctCount, total: gradedQuestions.length });
    setIsTestFinished(true);
    window.scrollTo(0, 0);
    
    // Bắn pháo giấy nếu điểm >= 80%
    if (correctCount / gradedQuestions.length >= 0.8) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (loading) return (
    <div className="container mt-5 text-center" style={{ maxWidth: '850px' }}>
      <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
      <h5 className="text-muted fw-bold">Đang tải dữ liệu...</h5>
    </div>
  );

  if (!isTestStarted) {
    return (
      <TestSetup 
        sets={sets} selectedSetId={selectedSetId} setSelectedSetId={setSelectedSetId}
        questionCount={questionCount} setQuestionCount={setQuestionCount} poolSize={poolSize}
        questionFormat={questionFormat} setQuestionFormat={setQuestionFormat}
        askType={askType} setAskType={setAskType} generateTest={generateTest}
      />
    );
  }

  const handleCreateMistakeSet = async () => {
    const wrongQs = questions.filter(q => !q.isCorrect);
    if (wrongQs.length === 0) return;
    
    const title = window.prompt("Nhập tên học phần ôn tập:", "Ôn tập câu sai - Bài Test");
    if (!title || !title.trim()) return;

    const rawText = wrongQs.map(q => `${q.questionText} | ${q.correctAnswer}`).join('\n');
    try {
      await api.post("/vocabularies/bulk-import", { title: title.trim(), raw_text: rawText });
      toast.success(`Đã tạo học phần: ${title}`);
    } catch (error) {
      toast.error("Lỗi khi tạo học phần ôn tập");
    }
  };

  if (isTestFinished) {
    return <TestResult score={score} questions={questions} onRestart={() => setIsTestStarted(false)} onCreateMistakeSet={handleCreateMistakeSet} />;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <h3 className="mb-4 fw-bold text-center">Bài Kiểm Tra ({questions.length} câu)</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="card shadow-sm border-0 mb-4 rounded-4">
          <div className="card-body p-5">
            <h4 className="mb-4 fw-bold">
              <span className="badge bg-primary me-3">Câu {idx + 1}</span> 
              {q.questionText}
            </h4>

            {q.type === 'choice' ? (
              <div className="row g-3">
                {q.options.map((opt, oIdx) => (
                  <div className="col-sm-6" key={oIdx}>
                    <div className={`form-check border rounded-3 p-3 h-100 fs-5 ${q.userAnswer === opt ? 'bg-light border-primary' : ''}`}>
                      <input 
                        className="form-check-input ms-0 me-3" 
                        type="radio" 
                        name={`question-${idx}`} 
                        id={`q${idx}-opt${oIdx}`}
                        value={opt}
                        checked={q.userAnswer === opt}
                        onChange={(e) => handleAnswerChange(idx, e.target.value)}
                      />
                      <label className="form-check-label w-100 fw-bold" htmlFor={`q${idx}-opt${oIdx}`} style={{ cursor: 'pointer' }}>
                        {opt}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <input 
                  type="text" 
                  className="form-control form-control-lg py-3 bg-light border-0 fw-bold d-print-none" 
                  placeholder="Nhập câu trả lời của bạn..."
                  value={q.userAnswer}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  autoComplete="off"
                />
                <div className="print-blank-line d-none d-print-block"></div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary btn-lg px-5 py-3 fw-bold w-100 shadow" onClick={submitTest}>
          Nộp bài ngay
        </button>
      </div>
    </div>
  );
}

export default TestMode;