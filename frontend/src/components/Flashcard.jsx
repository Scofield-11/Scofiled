import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../api/axiosConfig';

function Flashcard({ vocab, autoPlay, reverse, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const [isStarred, setIsStarred] = useState(vocab.is_starred || false);

  useEffect(() => {
    setIsStarred(vocab.is_starred || false);
  }, [vocab]);

  const handleToggleStar = async (e) => {
    e.stopPropagation();
    const newState = !isStarred;
    setIsStarred(newState);
    vocab.is_starred = newState; 
    try {
      await api.put(`/vocabularies/${vocab.id}/star`, { is_starred: newState });
    } catch (error) {
      toast.error("Lỗi khi lưu trạng thái sao");
      setIsStarred(!newState); 
    }
  };

  const detectLanguage = (text) => {
    const hasJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text);
    return hasJapanese ? 'ja-JP' : 'en-US';
  };

  const frontText = reverse ? vocab.meaning : vocab.word;
  const backText = reverse ? vocab.word : vocab.meaning;
  const frontLang = reverse ? 'vi-VN' : detectLanguage(vocab.word);
  const backLang = reverse ? detectLanguage(vocab.word) : 'vi-VN';
  const showFuriganaFront = !reverse && vocab.furigana;
  const showFuriganaBack = reverse && vocab.furigana;

  const speak = (text, lang) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      toast.error("Trình duyệt không hỗ trợ phát âm thanh.");
    }
  };

  useEffect(() => {
    setFlipped(false);
    if (autoPlay) {
      setTimeout(() => speak(frontText, frontLang), 250);
    }
  }, [vocab, autoPlay, reverse]);

  const handleFlip = () => {
    const newState = !flipped;
    setFlipped(newState);
    if (autoPlay) {
      speak(newState ? backText : frontText, newState ? backLang : frontLang);
    }
  };

  const playAudio = (e, text, lang) => {
    e.stopPropagation(); 
    speak(text, lang);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front flex-column">
          <button 
            className="btn btn-light position-absolute top-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10, color: isStarred ? '#ffc107' : '#ced4da' }}
            onClick={handleToggleStar}
            title={isStarred ? "Bỏ đánh dấu sao" : "Đánh dấu sao (Từ khó)"}
          >
            ★
          </button>
          {showFuriganaFront && <span className="text-muted fw-normal" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{vocab.furigana}</span>}
          <span>{frontText}</span>
          <button 
            className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => playAudio(e, frontText, frontLang)}
            title="Nghe phát âm"
          >
            🔊
          </button>
        </div>
        <div className="flashcard-back flex-column">
          <button 
            className="btn btn-light position-absolute top-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10, color: isStarred ? '#ffc107' : '#ced4da' }}
            onClick={handleToggleStar}
            title={isStarred ? "Bỏ đánh dấu sao" : "Đánh dấu sao (Từ khó)"}
          >
            ★
          </button>
          <button 
            className="btn btn-light position-absolute bottom-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => { e.stopPropagation(); if(onEdit) onEdit(vocab); }}
            title="Sửa từ vựng này"
          >
            ✏️
          </button>
          {showFuriganaBack && <span className="text-light opacity-75 fw-normal" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{vocab.furigana}</span>}
          <span>{backText}</span>
          <button 
            className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => playAudio(e, backText, backLang)}
            title="Nghe phát âm"
          >
            🔊
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;