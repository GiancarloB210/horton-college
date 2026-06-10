import MainPage from './pages/MainPage.js'
import AboutUsPage from './pages/AboutUsPage.js'
import StaffMainPage from './pages/staff/StaffMainPage.js'
import Jerrie from './pages/staff/staff-pages/Jerrie.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/staff" element={<StaffMainPage />} />
        <Route path="/staff/jerrie" element={<Jerrie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
