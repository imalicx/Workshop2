function calculateMortgage() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanLength = parseInt(document.getElementById("loanLength").value);
  
    const monthlyInterestRate = interestRate / 100 / 12;
    const numOfPayments = loanLength * 12;
  
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numOfPayments));
    const totalPayment = monthlyPayment * numOfPayments;
    const totalInterest = totalPayment - principal;
  
    document.getElementById("monthlyPayment").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("totalInterest").innerHTML = `Total Interest Paid: $${totalInterest.toFixed(2)}`;
  }
  
  
  function calculateFutureValue() {
    const deposit = parseFloat(document.getElementById("deposit").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const numOfYears = parseInt(document.getElementById("numOfYears").value);
  
    const dailyInterestRate = interestRate / 100 / 365;
    const numOfDays = numOfYears * 365;
  
    const futureValue = deposit * Math.pow(1 + dailyInterestRate, numOfDays);
    const totalInterestEarned = futureValue - deposit;
  
    document.getElementById("futureValue").innerHTML = `Future Value: $${futureValue.toFixed(2)}`;
    document.getElementById("totalInterestEarned").innerHTML = `Total Interest Earned: $${totalInterestEarned.toFixed(2)}`;
  }
  
  
  
  
  function calculatePresentValue() {
    const monthlyPayout = parseFloat(document.getElementById("monthlyPayout").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const yearsToPayout = parseInt(document.getElementById("yearsToPayout").value);
  
    const n = 12; // Number of compounding periods per year (monthly compounding)
    const interestRatePerPeriod = interestRate / 100 / n;
    const numOfPeriods = yearsToPayout * n;
  
    const presentValue = monthlyPayout * (1 - Math.pow(1 + interestRatePerPeriod, -numOfPeriods)) / interestRatePerPeriod;
    document.getElementById("presentValue").innerHTML = `Present Value: $${presentValue.toFixed(2)}`;
  }
  