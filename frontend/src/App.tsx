import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SplashLoader from './components/SplashLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ModulesPage from './pages/ModulesPage';
import GYBPage from './pages/modules/GYBPage';
import SYBPage from './pages/modules/SYBPage';
import IYBPage from './pages/modules/IYBPage';
import EYBPage from './pages/modules/EYBPage';
import GamePage from './pages/modules/GamePage';
import VisionBoardPage from './pages/VisionBoardPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <SplashLoader />}</AnimatePresence>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/gyb" element={<GYBPage />} />
          <Route path="/modules/syb" element={<SYBPage />} />
          <Route path="/modules/iyb" element={<IYBPage />} />
          <Route path="/modules/eyb" element={<EYBPage />} />
          <Route path="/modules/game" element={<GamePage />} />
          <Route path="/vision-board" element={<VisionBoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
