import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectCarPage from './pages/SelectCarPage';
import CarDetailsPage from './pages/CarDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SelectCarPage />} />

          <Route path="/car-details" element={<CarDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;