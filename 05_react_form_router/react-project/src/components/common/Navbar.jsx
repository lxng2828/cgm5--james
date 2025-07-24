
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#f8f9fa' }}>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/contact">Contact</NavLink> | 
      <NavLink to="/gallery">Gallery</NavLink> | 
      <NavLink to="/email-composer">Email Composer</NavLink> | 
      <NavLink to="/health-declaration">Health Declaration</NavLink> | 
      <NavLink to="/login">Login</NavLink> | 
      <NavLink to="/profile">Profile</NavLink> | 
      <NavLink to="/employees">Employees</NavLink>
    </nav>
  );
};

export default Navbar;
