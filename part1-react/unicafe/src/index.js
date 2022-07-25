import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  // ...
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <h2>statistics</h2>
      <strong>good {good}</strong><br />
      <strong>neutral {neutral}</strong><br />
      <strong>bad {bad}</strong>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)