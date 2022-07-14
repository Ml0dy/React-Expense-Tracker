import React from "react"

const Add = ({
  balance,
  setBalance,
  transitions,
  setTransition,
  id,
  setId,
  setInputText,
  inputText,
  setInputMoney,
  inputMoney,
  income,
  setIncome,
  expenses,
  setExpenses,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value)
  }
  const handleInputMoney = (e) => {
    console.log(e.target)
    setInputMoney(e.target.value)
  }
  const handleAddTransaction = (e) => {
    e.preventDefault()
    setTransition([
      ...transitions,
      { id: id, text: inputText, money: inputMoney },
    ])
    setId(id + 1)
    setBalance(balance + parseInt(inputMoney))
    if (inputMoney < 0) {
      setExpenses(expenses + parseInt(inputMoney))
    } else {
      setIncome(income + parseInt(inputMoney))
    }
    setInputText("")
    setInputMoney(0)
  }

  return (
    <div>
      <h2>Add new transaction</h2>
      <div className="newTransactionContainer">
        <input
          type="text"
          placeholder="Enter text..."
          onChange={handleInputText}
          value={inputText}
        ></input>
        <input
          type="number"
          placeholder="Enter amount..."
          onChange={handleInputMoney}
          value={inputMoney}
        ></input>
        <button onClick={handleAddTransaction}>Add transition</button>
      </div>
    </div>
  )
}

export default Add
