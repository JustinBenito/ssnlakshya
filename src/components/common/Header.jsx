import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/logos/logo_white.png';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <img
            src={logo}
            alt="Lakshya Logo"
            className="header-logo"
            onClick={() => navigate('/')}
          />
          <span className="header-brand-name">Lakshya</span>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <Link
            to="/"
            className={`header-nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`header-nav-link ${isActive('/events') ? 'active' : ''}`}
          >
            Events
          </Link>
          <Link
            to="/team-page"
            className={`header-nav-link ${isActive('/team-page') ? 'active' : ''}`}
          >
            Team
          </Link>
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=GI3CZn8101iSYMyJ"
            className="header-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </nav>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.875rem 1.5rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .header-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        .header-brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #171717;
          letter-spacing: -0.02em;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .header-nav-link {
          color: #525252;
          text-decoration: none;
          font-size: 0.938rem;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.2s ease;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #f97316;
          transition: width 0.2s ease;
        }

        .header-nav-link:hover,
        .header-nav-link.active {
          color: #f97316;
        }

        .header-nav-link:hover::after,
        .header-nav-link.active::after {
          width: 100%;
        }

        .header-cta-btn {
          background: #f97316;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
        }

        .header-cta-btn:hover {
          background: #ea580c;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          gap: 5px;
        }

        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: #171717;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0.75rem 1rem;
          }

          .header-brand-name {
            font-size: 1.125rem;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .header-nav {
            position: fixed;
            top: 65px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1.5rem;
            gap: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .header-nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .header-nav-link {
            font-size: 1rem;
            padding: 0.75rem 0;
          }

          .header-cta-btn {
            width: 100%;
            text-align: center;
            padding: 0.875rem 1.5rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
};
