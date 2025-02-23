import React from 'react';
import './MortgageTypes.css';  // Stil dosyasını import ettiğinden emin ol

const MortgageTypes = () => {
  return (
    <section className="mortgage-types">
      <h2>MORTGAGE TURLERI</h2>
      <div className="mortgage-box-container">
        <div className="mortgage-box">
          <h3>Conventional Loans</h3>
          <p>A standard loan typically offered by banks with no government backing.</p>
        </div>
        <div className="mortgage-box">
          <h3>FHA Loans</h3>
          <p>Loans insured by the Federal Housing Administration, ideal for first-time buyers.</p>
        </div>
        <div className="mortgage-box">
          <h3>VA Loans</h3>
          <p>Loans for veterans with favorable terms, backed by the Department of Veterans Affairs.</p>
        </div>
        <div className="mortgage-box">
          <h3>Jumbo Loans</h3>
          <p>Loans that exceed the limits of standard conforming loans, typically used for luxury homes.</p>
        </div>
        <div className="mortgage-box">
          <h3>Adjustable-Rate Mortgages</h3>
          <p>Loans with a fluctuating interest rate that can adjust periodically.</p>
        </div>
        <div className="mortgage-box">
          <h3>Fixed-Rate Mortgages</h3>
          <p>Loans with a fixed interest rate throughout the loan term, providing predictability.</p>
        </div>
        <div className="mortgage-box">
          <h3>Foreign Mortgage</h3>
          <p>Loans for foreign nationals who wish to purchase property in the USA while on a tourist visa, typically requiring larger down payments and higher interest rates.</p>
        </div>
      </div>
    </section>
  );
};

export default MortgageTypes;
