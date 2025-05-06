import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const calculateEMI = (cost, interest, duration) => {
    if (!cost || !interest || !duration) return;

    const loanAmount = cost;
    const rateOfInterest = interest / 100;
    const months = duration * 12;

    const monthlyRate = rateOfInterest / 12 / 100;

    // EMI formula to calculate monthly emi
    const EMI =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const schedule = [];
    let balance = loanAmount;

    for (let i = 1; i <= months; i++) {
      const interestForMonth = balance * monthlyRate;
      const principalForMonth = EMI - interestForMonth;
      balance -= principalForMonth;

      schedule.push({
        month: i,
        principal: principalForMonth.toFixed(2),
        interest: interestForMonth.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    setAmount(Number(EMI).toFixed(2));
    return schedule;
  };

  const value = { amount, calculateEMI };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
