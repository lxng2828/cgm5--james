import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    { key: '/', label: 'Home' },
    { key: '/contact', label: 'Contact' },
    { key: '/gallery', label: 'Gallery' },
    { key: '/email-composer', label: 'Email Composer' },
    { key: '/health-declaration', label: 'Health Declaration' },
    { key: '/login', label: 'Login' },
    { key: '/profile', label: 'Profile' },
    { key: '/employees', label: 'Employees' },
  ];
  const handleClick = (e) => {
    navigate(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[location.pathname]}
      mode="horizontal"
      items={items}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    />
  );
};
export default Navbar;