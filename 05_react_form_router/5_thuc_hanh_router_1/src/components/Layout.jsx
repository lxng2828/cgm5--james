import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (
        <div className="layout-container">
            <header className="app-header">
                <nav className="main-nav">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        Trang chủ
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        Về chúng tôi
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        Liên hệ
                    </NavLink>
                    <NavLink
                        to="/some-non-existent-page"
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        Kiểm tra 404
                    </NavLink>
                </nav>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="app-footer">
                <p>&copy; 2025 Demo React Router Basic</p>
            </footer>
        </div>
    );
}

export default Layout;