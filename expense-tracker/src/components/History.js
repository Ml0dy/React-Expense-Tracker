import React from "react"

const History = ({ transitions }) => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {transitions.map((element) => (
          <li
            className={`listElement ${
              element.money > 0 ? "positiveList" : "negativeList"
            }`}
            key={element.id}
          >
            <label className="elementText">{element.text}</label>
            <label
              className={`elementMoney ${
                element.money > 0 ? "positive" : "negative"
              }`}
            >
              {element.money} zł
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
