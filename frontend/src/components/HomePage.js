// src/components/HomePage.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
      <p>{t('service_description')}</p>
    </div>
  );
};

export default HomePage;
