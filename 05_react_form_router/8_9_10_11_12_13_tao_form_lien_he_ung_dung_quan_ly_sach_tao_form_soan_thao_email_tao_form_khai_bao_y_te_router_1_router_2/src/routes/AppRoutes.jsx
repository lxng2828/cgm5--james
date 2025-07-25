
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import EmployeeListPage from '../pages/EmployeeListPage';
import EmailComposerPage from '../pages/EmailComposerPage';
import GalleryPage from '../pages/GalleryPage';
import HealthDeclarationPage from '../pages/HealthDeclarationPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/employees" element={<EmployeeListPage />} />
      <Route path="/email-composer" element={<EmailComposerPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/health-declaration" element={<HealthDeclarationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
