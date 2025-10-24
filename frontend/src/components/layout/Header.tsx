import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SeoLink from '../common/SeoLink';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <SeoLink
            to="/"
            className="logo-container"
            title="Rupantar Home"
            description="Return to Rupantar homepage"
          >
            <img
              src="/rupantar-high-resolution-logo-transparent.png"
              alt="Rupantar Logo"
              className="logo"
              width="150"
              height="50"
              loading="eager"
              style={{ objectFit: 'contain' }}
            />
          </SeoLink>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <nav
            className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Main navigation"
          >
            {isAuthenticated ? (
              <>
                <SeoLink
                  to="/home"
                  className="nav-link"
                  title="Home"
                  description="Go to your dashboard"
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </SeoLink>
                <button
                  onClick={handleLogout}
                  className="nav-link logout-button"
                  aria-label="Logout from your account"
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </>
            ) : (
              <>
                <SeoLink
                  to="/login"
                  className="nav-link"
                  title="Login"
                  description="Sign in to your account"
                  state={{ activeTab: 'login' }}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </SeoLink>
                <SeoLink
                  to="/login"
                  className="nav-link"
                  title="Register"
                  description="Create a new account"
                  state={{ activeTab: 'register' }}
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Register
                </SeoLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
