import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationTr from './locales/tr/translation.json';

// i18next yapılandırması
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...translationEn, // mevcut İngilizce çevirileri koruyoruz
          welcome: "Welcome to my Mortgage Broker Website!",
          services: "Services",
          mortgage_types: "Mortgage Types",
          mortgage_form: "Mortgage Application Form",
          full_name: "Full Name",
          address: "Address",
          visa_type: "Visa Type",
          phone: "Phone",
          email: "Email",
          mortgage_amount: "Mortgage Amount",
          submit_button: "Submit Application",
          blog: "Blog", // Blog menüsü başlığı
          search: "Search...",
          login: "Login",
          english: "English",
          turkish: "Türkçe"
        }
      },
      tr: {
        translation: {
          ...translationTr, // mevcut Türkçe çevirileri koruyoruz
          welcome: "Mortgage Broker Web Siteme Hoşgeldiniz!",
          services: "Hizmetler",
          mortgage_types: "Mortgage Türleri",
          mortgage_form: "Mortgage Başvuru Formu",
          full_name: "Ad ve Soyad",
          address: "Adres",
          visa_type: "Oturum Vizesi Türü",
          phone: "Telefon",
          email: "Email",
          mortgage_amount: "Mortgage Tutarı",
          submit_button: "Başvuruyu Gönder",
          blog: "Blog", // Blog menüsü başlığı
          search: "Ara...",
          login: "Giriş Yap",
          english: "İngilizce",
          turkish: "Türkçe"
        }
      }
    },
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en', // Dil bulunmazsa hangi dil kullanılacak
    interpolation: {
      escapeValue: false // React otomatik olarak HTML'yi kaçırır, bu yüzden buna ihtiyacımız yok.
    }
  });

export default i18n;
