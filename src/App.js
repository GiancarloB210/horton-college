import MainPage from './pages/MainPage.js'
import AboutUsPage from './pages/AboutUsPage.js'
import ScheduleVisitPage from './pages/ScheduleVisitPage.js'
import StaffMainPage from './pages/staff/StaffMainPage.js'
import Jerrie from './pages/staff/staff-pages/Jerrie.js'
import InvertedJayBaruchel from './pages/staff/staff-pages/InvertedJayBaruchel.js'
import AIGeneratedAnimeWoman from './pages/staff/staff-pages/AnimeWomanAI.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/staff" element={<StaffMainPage />} />
          <Route path="/staff/jerrie" element={<Jerrie />} />
          <Route path="/staff/inverted_jay_baruchel" element={<InvertedJayBaruchel />} />
          <Route path="/staff/ai_generated_anime_woman" element={<AIGeneratedAnimeWoman />} />
        <Route path="/schedule_visit" element={<ScheduleVisitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
