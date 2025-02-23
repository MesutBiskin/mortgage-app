// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/mortgage-form">{t('mortgage_form')}</Link></li>
          <li><Link to="/blog">{t('blog')}</Link></li>
          <li><Link to="/mortgage-types">{t('mortgage_types')}</Link></li>
        </ul>
        <button onClick={() => changeLanguage('tr')}>TR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </nav>
    </header>
  );
};

export default Header;
