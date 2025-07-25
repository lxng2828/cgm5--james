import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />

      <main style={{
        flexGrow: 1,
        paddingTop: '50px',
        paddingBottom: '50px'
      }}>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;