import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MortgageApplicationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    visaType: '',
    phone: '',
    email: '',
    mortgageAmount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Formu gönderme işlemleri burada yapılabilir
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('first_name')}</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label>{t('last_name')}</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label>{t('address')}</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>{t('visa_type')}</label>
        <input type="text" name="visaType" value={formData.visaType} onChange={handleChange} />
      </div>
      <div>
        <label>{t('phone')}</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label>{t('email')}</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>{t('mortgage_amount')}</label>
        <input type="number" name="mortgageAmount" value={formData.mortgageAmount} onChange={handleChange} />
      </div>
      <button type="submit">{t('submit')}</button>
    </form>
  );
}

export default MortgageApplicationForm;
