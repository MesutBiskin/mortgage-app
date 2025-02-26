import React from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = ({ handleLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Gamze Algan Biskin</h1>
        <h2>{t('Mortgage Broker')}</h2>
      </div>

      <div className="menu">
        <a href="#home">
          <i className="fas fa-home"></i> {t('home')}
        </a>
        <a href="#services">
          <i className="fas fa-handshake"></i> {t('services')}
        </a>
        <a href="#about">
          <i className="fas fa-info-circle"></i> {t('about')}
        </a>
        <a href="#contact">
          <i className="fas fa-phone"></i> {t('contact')}
        </a>
        <a href="#blog">
          <i className="fas fa-blog"></i> {t('blog')}
        </a>
      </div>

      <div className="right-side">
        <input type="text" placeholder={t('search')} />
        <button>{t('login')}</button>

        {/* Dil değiştirme butonları */}
        <button className="language-btn" onClick={() => handleLanguageChange('en')} aria-label="English">
          ENG
        </button>
        <button className="language-btn" onClick={() => handleLanguageChange('tr')} aria-label="Turkish">
          TR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
