import React from "react"

const Balance = ({ balance, income, expenses }) => {
  return (
    <div>
      <h2>Your Balance</h2>
      <label
        className={`moneyBalance ${balance > 0 ? "positive" : "negative"}`}
      >
        {balance} zł
      </label>
      <div className="incomesAndExpenses">
        <div className="income">
          <h3>Incomes</h3>
          <label className="positive labelIncomes">{income}zł</label>
        </div>
        <div className="expenses">
          <h3>Expenses</h3>
          <label className="negative labelExpenses">{expenses}zł</label>
        </div>
      </div>
    </div>
  )
}

export default Balance
