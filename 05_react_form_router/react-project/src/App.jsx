import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;