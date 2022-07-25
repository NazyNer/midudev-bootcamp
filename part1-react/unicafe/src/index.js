import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)



  const[counters, setCounters] = useState({
    good : 0,
    neutral: 0,
    bad: 0,
  })
  const All = () => {
    const allClicks = counters.good + counters.neutral + counters.bad
    return allClicks
  }

  const Average = (promps) =>{
    const averageClicks = All()
    const good = counters.good
    const bad = counters.bad
    const Avg = (good - bad) / averageClicks
    return <strong>average {Avg}</strong>
}

const Positive = () =>{
  const persentil = counters.good / All()*100
  return <strong>positive {persentil}%</strong>
}


const goodClick = () => {
  const newCounterState = {
    ...counters,
    good: counters.good + 1,
  }
  setCounters(newCounterState);
}
const neutralClick = () => {
  const newCounterState = {
    ...counters,
    neutral: counters.neutral + 1,
  }
  setCounters(newCounterState);
}
const badClick = () => {
  const newCounterState = {
    ...counters,
    bad: counters.bad + 1,
  }
  setCounters(newCounterState);
}
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <h2>statistics</h2>
      <strong>good {counters.good}</strong><br />
      <strong>neutral {counters.neutral}</strong><br />
      <strong>bad {counters.bad}</strong><br />
      <strong>all <All /></strong><br />
      <Average all={All}/><br />
      <Positive />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
