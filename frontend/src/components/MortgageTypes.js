import React from "react";
import './MortgageTypes.css';

const mortgageTypes = [
    {
      type: "Fixed-Rate Mortgage",
      description: "A mortgage with a fixed interest rate for the entire term.",
    },
    {
      type: "Adjustable-Rate Mortgage",
      description:
        "A mortgage with an interest rate that may change periodically.",
    },
    {
      type: "FHA Loan",
      description: "A government-backed mortgage with lower down payment options.",
    },
    {
      type: "VA Loan",
      description: "A mortgage available to veterans with no down payment.",
    },
    {
      type: "Foreign Mortgage",  // Yeni kutucuk eklendi
      description: "A mortgage for buying property in a foreign country.",
    },
  ];
  

const MortgageTypes = () => {
  return (
    <div className="mortgage-types-container">
      {mortgageTypes.map((mortgage, index) => (
        <div key={index} className="mortgage-box">
          <div className="mortgage-title">{mortgage.type}</div>
          <p>{mortgage.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MortgageTypes;
