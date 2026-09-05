import React, { useState, useEffect, useContext, useRef } from 'react';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';

const CHUNK_SIZE = 4;

function LearnMode() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => { fetchSets(); fetchAllVocabs(); }, [fetchSets, fetchAllVocabs]);

  const [isStarted, setIsStarted] = useState(false);
  const [askType, setAskType] = useState('meaning'); 
  const [rounds, setRounds] = useState([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentRoundWords, setCurrentRoundWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mode, setMode] = useState('choice'); 
  const [options, setOptions] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState(null);
  
  const [isShaking, setIsShaking] = useState(false);
  const [onlyDue, setOnlyDue] = useState(false); 
  const [onlyStarred, setOnlyStarred] = useState(false); 

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0); 
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const vibrate = (pattern) => { if (navigator.vibrate) navigator.vibrate(pattern); };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen().catch(() => toast.error("Không hỗ trợ Fullscreen"));
    else document.exitFullscreen();
  };

  // Hàm thoát ra ngoài an toàn
  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsStarted(false);
  };

  useEffect(() => {
    const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFs);
    return () => document.removeEventListener("fullscreenchange", handleFs);
  }, []);

  const updateSRS = async (vocabId, isCorrect) => {
    try { await api.put(`/vocabularies/${vocabId}/srs`, { is_correct: isCorrect }); } 
    catch (err) { console.error("Lỗi cập nhật SRS:", err); }
  };

  const detectLanguage = (text) => /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text) ? 'ja-JP' : 'vi-VN';

  const playAudio = (text, type = 'normal') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = detectLanguage(text);
      utterance.rate = type === 'error' ? 0.8 : 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStart = () => {
    let pool = selectedSetId === 'all' ? sets.flatMap(s => s.vocabularies) : (sets.find(s => s.id === parseInt(selectedSetId))?.vocabularies || []);

    if (onlyDue) {
      const now = new Date();
      pool = pool.filter(v => v.next_review && new Date(v.next_review) <= now);
      if (pool.length === 0) return toast.success("Tuyệt vời! Không có từ vựng nào đến hạn.");
    }

    if (onlyStarred) {
      pool = pool.filter(v => v.is_starred);
      if (pool.length === 0) return toast.warning("Chưa có từ vựng được gắn sao!");
    }

    if (pool.length === 0) return toast.warning("Học phần này chưa có từ vựng!");

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const chunked = [];
    for (let i = 0; i < shuffled.length; i += CHUNK_SIZE) chunked.push(shuffled.slice(i, i + CHUNK_SIZE));
    
    setRounds(chunked);
    setCurrentRoundIndex(0);
    setCurrentWordIndex(0);
    setMode('choice');
    setCurrentRoundWords([...chunked[0]]);
    generateOptions(chunked[0][0], allVocabs);
    setStreak(0);
    setMaxStreak(0);
    setIsStarted(true);
    setIsFinished(false);
  };

  const generateOptions = (currentWord, allData) => {
    if (!currentWord) return;
    const scoredAnswers = allData.filter(v => v.id !== currentWord.id).map(v => {
      let score = 0;
      currentWord.word.split('').forEach(c => { if (v.word.includes(c)) score += 1; });
      return { ...v, score: score + Math.random() * 0.5 };
    });
    scoredAnswers.sort((a, b) => b.score - a.score);
    const choices = [...scoredAnswers.slice(0, 3), currentWord].sort(() => 0.5 - Math.random());
    setOptions(choices);
  };

  const handleNextAfterFeedback = () => {
    setFeedback(null);
    setInputText('');

    if (currentWordIndex < currentRoundWords.length - 1) {
      const nextWord = currentRoundWords[currentWordIndex + 1];
      setCurrentWordIndex(currentWordIndex + 1);
      if (mode === 'choice') generateOptions(nextWord, allVocabs);
    } else {
      if (mode === 'choice') {
        setMode('typing');
        setCurrentWordIndex(0);
        setCurrentRoundWords([...rounds[currentRoundIndex]]);
      } else {
        if (currentRoundIndex < rounds.length - 1) {
          const nextRoundIdx = currentRoundIndex + 1;
          setCurrentRoundIndex(nextRoundIdx);
          setCurrentWordIndex(0);
          setMode('choice');
          setCurrentRoundWords([...rounds[nextRoundIdx]]);
          generateOptions(rounds[nextRoundIdx][0], allVocabs);
        } else {
          setIsFinished(true);
          confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
          vibrate([100, 50, 100, 50, 200]); 
        }
      }
    }
  };

  const handleWrongAnswer = (currentWord, correctAnswer, userAnsText) => {
    vibrate([200, 100, 200]); 
    setStreak(0);
    updateSRS(currentWord.id, false);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
    setCurrentRoundWords(prev => [...prev, currentWord]); 
    setFeedback({ isCorrect: false, correctAnswer, yourAnswer: userAnsText });
    playAudio(correctAnswer, 'error');
  };

  const handleCorrectAnswer = (currentWord) => {
    vibrate(40);
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > maxStreak) setMaxStreak(newStreak);
    updateSRS(currentWord.id, true);
    handleNextAfterFeedback();
  };

  const handleChoiceSubmit = (selectedOption) => {
    const currentWord = currentRoundWords[currentWordIndex];
    if (selectedOption.id === currentWord.id) handleCorrectAnswer(currentWord);
    else handleWrongAnswer(currentWord, askType === 'meaning' ? currentWord.word : currentWord.meaning, askType === 'meaning' ? selectedOption.word : selectedOption.meaning);
  };

  const checkFuzzyMatch = (input, correctStr) => {
    const clean = (str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim().toLowerCase();
    return correctStr.split(',').map(s => clean(s)).includes(clean(input));
  };

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    const currentWord = currentRoundWords[currentWordIndex];
    const correctAnswer = askType === 'meaning' ? currentWord.word : currentWord.meaning;
    if (checkFuzzyMatch(inputText, correctAnswer)) handleCorrectAnswer(currentWord);
    else handleWrongAnswer(currentWord, correctAnswer, inputText.trim() || "(Để trống)");
  };

  const handleDontKnow = () => {
    const currentWord = currentRoundWords[currentWordIndex];
    handleWrongAnswer(currentWord, askType === 'meaning' ? currentWord.word : currentWord.meaning, "Không biết 🤷‍♂️");
  };

  if (loading) return <LoadingSkeleton />;

  if (!isStarted) {
    const validSets = sets.filter(s => !s.title.startsWith('_Thư mục:'));
    const groupedSets = validSets.reduce((acc, set) => {
      const folder = set.folder_path || '🏠 Thư mục gốc';
      if (!acc[folder]) acc[folder] = [];
      acc[folder].push(set);
      return acc;
    }, {});

    return (
      <div className="container mt-5 fade-in-slide" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <h4 className="text-center mb-4 fw-bold">Cài đặt Chế độ Học</h4>
          <div className="mb-3">
            <label className="form-label fw-bold text-muted">Chọn học phần muốn học:</label>
            <select className="form-select form-select-lg bg-light border-0 fw-bold text-dark" value={selectedSetId} onChange={(e) => setSelectedSetId(e.target.value)}>
              <option value="all">-- Tất cả từ vựng --</option>
              {Object.entries(groupedSets).map(([folder, folderSets]) => (
                <optgroup key={folder} label={folder}>
                  {folderSets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold text-muted">Chọn câu hỏi hiển thị:</label>
            <select className="form-select form-select-lg bg-light border-0 fw-bold text-dark" value={askType} onChange={(e) => setAskType(e.target.value)}>
              <option value="meaning">Tiếng Việt (Hỏi Nghĩa, gõ Từ vựng)</option>
              <option value="word">Tiếng Nhật (Hỏi Từ vựng, gõ Nghĩa)</option>
            </select>
          </div>
          <div className="mb-4 text-start">
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-3 bg-white p-3 rounded-4 border shadow-sm">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="srsToggle" checked={onlyDue} onChange={(e) => setOnlyDue(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="srsToggle" style={{ cursor: 'pointer' }}>Chỉ ôn tập từ đến hạn (SRS)</label>
            </div>
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-3 bg-white p-3 rounded-4 border shadow-sm mt-3">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="starredLearnToggle" checked={onlyStarred} onChange={(e) => setOnlyStarred(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="starredLearnToggle" style={{ cursor: 'pointer' }}>Chỉ học từ được gắn sao (⭐)</label>
            </div>
          </div>
          <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={handleStart}>Bắt đầu học</button>
        </div>
      </div>
    );
  }

  const currentWord = currentRoundWords[currentWordIndex];
  const questionText = askType === 'meaning' ? currentWord?.meaning : currentWord?.word;
  const progressPercent = Math.round(((currentRoundIndex + (currentWordIndex/currentRoundWords.length)) / rounds.length) * 100);

  return (
    <div className={`container-fluid py-4 transition-all ${isFullscreen ? 'bg-light d-flex flex-column justify-content-center' : ''}`} ref={containerRef} style={isFullscreen ? { minHeight: '100vh', overflow: 'hidden' } : {}}>
      <div className="mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
        
        {!isFinished && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-light rounded-circle shadow-sm border-0 d-print-none" onClick={toggleFullscreen} title="Toàn màn hình (F)">
                {isFullscreen ? '↙️' : '⛶'}
              </button>
              <div className="d-flex align-items-center gap-3 fw-bold text-muted">
                {streak > 0 && (
                  <div className="streak-indicator d-flex align-items-center bg-white rounded-pill shadow-sm border overflow-hidden fade-in" style={{ height: '38px', borderColor: streak >= 5 ? '#dc3545' : '#ffc107' }}>
                    <div className={`px-3 h-100 d-flex align-items-center fw-bold fs-6 text-white ${streak >= 5 ? 'bg-danger streak-glow' : 'bg-warning text-dark'}`}>
                      🔥 {streak}
                    </div>
                    <div className="d-flex align-items-center gap-1 px-2" style={{ width: '70px' }}>
                      {[...Array(5)].map((_, i) => {
                        const isActive = i < (streak > 0 ? ((streak - 1) % 5) + 1 : 0);
                        return (
                          <div 
                            key={i} 
                            className={`rounded-pill ${isActive ? (streak >= 5 ? 'bg-danger' : 'bg-warning') : 'bg-light'}`} 
                            style={{ height: '6px', flexGrow: 1, transition: 'all 0.3s ease', transform: isActive ? 'scaleY(1.5)' : 'scaleY(1)' }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <span className="fs-5">{progressPercent}%</span>
              </div>
            </div>
            <div className="progress mb-4 shadow-sm" style={{ height: '10px', borderRadius: '10px' }}>
              <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease' }}></div>
            </div>
          </>
        )}
        
        {isFinished ? (
          <div className="card shadow-lg border-0 p-5 rounded-4 fade-in-slide mx-auto bg-white">
            <div className="display-1 mb-3 text-center">🏆</div>
            <h2 className="fw-bold text-success mb-3 text-center">Bài học hoàn tất!</h2>
            <p className="fs-5 text-muted mb-4 text-center">Mỗi ngày học một chút là con đường dẫn đến thành công.</p>
            
            <div className="row g-3 mb-5">
              <div className="col-6">
                <div className="bg-light p-4 rounded-4 h-100 border border-warning text-center" style={{ borderWidth: '2px !important' }}>
                  <h2 className="fw-bold text-warning mb-0">🔥 {maxStreak}</h2>
                  <span className="fw-bold text-muted small">CHUỖI DÀI NHẤT</span>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light p-4 rounded-4 h-100 border border-primary text-center" style={{ borderWidth: '2px !important' }}>
                  <h2 className="fw-bold text-primary mb-0">⚡ {rounds.flat().length * 10}</h2>
                  <span className="fw-bold text-muted small">TỔNG ĐIỂM XP</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg fw-bold w-100 shadow-sm" onClick={handleExit}>Hoàn thành & Quay lại</button>
          </div>
        ) : (
          <div className={`card shadow-sm border-0 rounded-4 fade-in-slide ${isShaking ? 'shake border border-danger' : ''}`} key={`${currentRoundIndex}-${currentWordIndex}-${mode}-${feedback ? 'fb' : 'q'}`}>
            <div className="card-body p-4 p-md-5">
              {feedback ? (
                <div className="text-center">
                  <h5 className="text-danger fw-bold mb-4">❌ Chưa chính xác! Từ này sẽ được hỏi lại.</h5>
                  <div className="p-4 mb-4 bg-light rounded-4 text-start border-start border-danger border-4">
                    <p className="mb-2"><strong>Câu hỏi:</strong> <span className="text-primary">{questionText}</span></p>
                    <p className="text-muted mb-3"><strong>Bạn chọn/gõ:</strong> <span className="text-decoration-line-through">{feedback.yourAnswer}</span></p>
                    <p className="text-success fs-4 mb-0 fw-bold">
                      ✓ {feedback.correctAnswer}
                      <button className="btn btn-sm btn-light rounded-circle ms-3 shadow-sm border" onClick={() => playAudio(feedback.correctAnswer)} title="Nghe lại">🔊</button>
                    </p>
                  </div>
                  <button className="btn btn-primary btn-lg fw-bold w-100 mt-2 shadow-sm" onClick={handleNextAfterFeedback} autoFocus>Đã hiểu, tiếp tục</button>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-dark fw-bold mb-5" style={{ fontSize: '2rem' }}>{questionText}</h3>
                  
                  {mode === 'choice' ? (
                    <div className="d-flex flex-column gap-3">
                      {options.map((opt) => (
                        <button key={opt.id} className="btn btn-light border py-3 text-start px-4 fs-5 fw-bold hover-bg-light transition-all" onClick={() => handleChoiceSubmit(opt)}>
                          {askType === 'meaning' ? opt.word : opt.meaning}
                        </button>
                      ))}
                      <button className="btn btn-outline-secondary border-0 py-3 fw-bold mt-2 text-decoration-underline" onClick={handleDontKnow}>Không biết 🤷‍♂️</button>
                    </div>
                  ) : (
                    <form onSubmit={handleTypeSubmit}>
                      <input 
                        type="text" 
                        className="form-control form-control-lg text-center mb-4 py-4 bg-light border-0 fw-bold" 
                        placeholder={askType === 'meaning' ? "Gõ từ vựng..." : "Gõ ý nghĩa..."}
                        value={inputText} onChange={(e) => setInputText(e.target.value)} autoComplete="off" autoFocus
                        style={{ fontSize: '1.5rem', borderRadius: '16px' }}
                      />
                      <div className="d-flex gap-3">
                        <button type="button" className="btn btn-outline-secondary w-50 py-3 fs-5 fw-bold border-0" onClick={handleDontKnow}>Bỏ qua</button>
                        <button type="submit" className="btn btn-primary w-50 py-3 fs-5 fw-bold shadow-sm">Kiểm tra</button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearnMode;