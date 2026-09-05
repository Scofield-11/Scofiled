import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FlashcardMode from "./components/FlashcardMode";
import LearnMode from "./components/LearnMode";
import TestMode from "./components/TestMode";
import MatchMode from "./components/MatchMode";
import ExamMode from './components/ExamMode';
import NotFound from "./pages/NotFound";
import { VocabProvider } from "./context/VocabContext";

function App() {
  return (
    <VocabProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            {/* Đã xóa <Breadcrumbs /> theo yêu cầu */}
            <div className="container-fluid py-4" style={{ maxWidth: '1200px' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flashcards" element={<FlashcardMode />} />
                <Route path="/learn" element={<LearnMode />} />
                <Route path="/test" element={<TestMode />} />
                <Route path="/match" element={<MatchMode />} />
                <Route path="/exam" element={<ExamMode />} /> 
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
      </BrowserRouter>
    </VocabProvider>
  );
}

export default App;