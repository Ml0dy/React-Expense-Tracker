import React, { useState } from "react"
import Balance from "./Balance"
import History from "./History"
import Add from "./Add"
import "./Main.css"

function Main() {
  const [balance, setBalance] = useState(0)
  const [inputText, setInputText] = useState("")
  const [inputMoney, setInputMoney] = useState(0)
  const [id, setId] = useState(0)
  const [transitions, setTransition] = useState([])
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Balance balance={balance} income={income} expenses={expenses} />
      <History transitions={transitions} setBalance={setBalance} />
      <Add
        setBalance={setBalance}
        balance={balance}
        transitions={transitions}
        setTransition={setTransition}
        inputText={inputText}
        setInputText={setInputText}
        id={id}
        setId={setId}
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
        income={income}
        expenses={expenses}
        setIncome={setIncome}
        setExpenses={setExpenses}
      />
    </div>
  )
}

export default Main
