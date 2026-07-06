import MainPage from './pages/MainPage.js'
import AboutUsPage from './pages/AboutUsPage.js'
import ScheduleVisitPage from './pages/visits/ScheduleVisitPage.js'
import DisplayVisitsPage from './pages/visits/DisplayVisitsPage.js'
import VisitsDirectoryPage from './pages/visits/VisitsDirectoryPage.js'
import StaffMainPage from './pages/staff/StaffMainPage.js'
import AlumniMainPage from './pages/alumni/AlumniMainPage.js'
import UnknownPage from './pages/UnknownPage.js'
import Baxter from './pages/alumni/alumni-pages/Baxter.js'
import Jerrie from './pages/staff/staff-pages/Jerrie.js'
import InvertedJayBaruchel from './pages/staff/staff-pages/InvertedJayBaruchel.js'
import AIGeneratedAnimeWoman from './pages/staff/staff-pages/AnimeWomanAI.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VisitsProvider } from './contexts/VisitsContext';
import './style/index.css'; 

function App() {
  return (
    <VisitsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/staff" element={<StaffMainPage />} />
            <Route path="/staff/jerrie" element={<Jerrie />} />
            <Route path="/staff/inverted_jay_baruchel" element={<InvertedJayBaruchel />} />
            <Route path="/staff/ai_generated_anime_woman" element={<AIGeneratedAnimeWoman />} />
          <Route path="/alumni" element={<AlumniMainPage />} />
            <Route path="/alumni/baxter" element={<Baxter />} />
          <Route path="/visits" element={<VisitsDirectoryPage />} />
            <Route path="/visits/schedule_visit" element={<ScheduleVisitPage />} />
            <Route path="/visits/display_visits" element={<DisplayVisitsPage />} />
          <Route path="/unknown" element={<UnknownPage />} />
        </Routes>
      </BrowserRouter>
   </VisitsProvider>
  );
}

export default App;
