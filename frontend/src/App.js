import React, { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n'; // i18n yapılandırmamızı dahil ediyoruz
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation(); // useTranslation hook'u ile dil desteğini alıyoruz

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Dil değiştirme fonksiyonu
  };

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    visaType: '',
    phone: '',
    email: '',
    mortgageAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      {/* Navbar bileşenine dil değiştirme fonksiyonu aktarıldı */}
      <Navbar handleLanguageChange={handleLanguageChange} />

      <Slider />

      <div className="container">
        <h1>{t('welcome')}</h1> {/* Sayfa başlığı dil desteği ile değişecek */}
        <p>{t('services')}</p> {/* Servisler kısmı dil desteği ile değişecek */}

        <form onSubmit={handleSubmit} className="mortgage-form">
          <h2>{t('mortgage_form')}</h2> {/* Form başlığı dil desteği ile değişecek */}

          <label>{t('full_name')}</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <label>{t('address')}</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label>{t('visa_type')}</label>
          <input
            type="text"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
          />

          <label>{t('phone')}</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>{t('email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>{t('mortgage_amount')}</label>
          <input
            type="number"
            name="mortgageAmount"
            value={formData.mortgageAmount}
            onChange={handleChange}
          />

          <button type="submit">{t('submit_button')}</button> {/* Submit butonu metni dil desteği ile değişecek */}
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default App;
