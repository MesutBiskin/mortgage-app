import React, { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n'; // i18n yapılandırmamızı dahil ediyoruz
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import MortgageTypes from './components/MortgageTypes'; // MortgageTypes bileşenini içeri aktarıyoruz

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
      <Navbar handleLanguageChange={handleLanguageChange} />
      <Slider />

      <div className="welcome-section">
        <div className="message-content">
          <h2>Mortgage dünyasına hoş geldiniz!</h2>
          <p>
            Ev sahibi olma yolculuğunuzda, karmaşık mortgage süreçlerini
            basitleştirerek size özel çözümler sunuyoruz. Deneyimli bir mortgage
            brokerı olarak, hayallerinizdeki eve ulaşmanız için size rehberlik
            ediyor, en uygun kredi seçeneklerini titizlikle değerlendiriyoruz.
            Finansal hedeflerinizi ve bireysel ihtiyaçlarınızı anlayarak, size
            özel stratejiler geliştiriyor ve her adımda yanınızda oluyoruz. 
            Amacımız, mortgage sürecini sizin için şeffaf, anlaşılır ve stressiz 
            hale getirmek. Ev sahibi olma hayalinizi gerçeğe dönüştürmek için 
            profesyonel desteğimizle yanınızdayız. Ücretsiz danışmanlık için hemen 
            iletişime geçin.
          </p>
          <a href="mailto:info@mortgagebroker.com" className="contact-btn">
            İletişime Geçin
          </a>
        </div>
        <div className="message-image">
          <img src="./images/1.jpeg" alt="Mortgage Broker" />
        </div>
      </div>

      <div className="container">
        <h1>{t('welcome')}</h1> 
        <p>{t('services')}</p>

        <MortgageTypes />

        <div className="images-section">
          <h2>Görsellerimiz</h2>
          <div className="image-gallery">
            <img src="./images/birlik.jpg" alt="modern house exterior" />
            <img src="./images/evrakmrtg.jpg" alt="modern house exterior 2" />
            <img src="./images/faiz.jpg" alt="modern house exterior" />
            <img src="./images/imza.jpg" alt="modern house exterior" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mortgage-form">
          <h2>{t('mortgage_form')}</h2>

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

          <button type="submit">{t('submit_button')}</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default App;
