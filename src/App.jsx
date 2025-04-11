// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UploadResumePage from './pages/dashboard/UploadResumePage';
import JobMatchesPage from './pages/dashboard/JobMatchesPage';
import AboutUsPage from './pages/AboutUsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PricingPages from './pages/PricingPages';
import UploadPage from './pages/UploadPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/upload-resume" element={<UploadResumePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/job-matches" element={<JobMatchesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pricing" element={<PricingPages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;