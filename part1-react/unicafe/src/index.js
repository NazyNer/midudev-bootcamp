
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Positive = ({good, neutral, bad}) =>{
  const All = good + neutral + bad
  const persentil = good / All*100
  if (isNaN(persentil)){
    return <tr><td>positive</td><td>0%</td></tr>
  }
  return <tr><td>positive</td><td>{persentil}%</td></tr>
}

const Average = ({goods, neutrals, bads}) => {
  const averageClicks = goods + neutrals + bads
  const good = goods
  const bad = bads
  const Avg = (good - bad) / averageClicks
  if (isNaN(Avg)){
    return <tr><td>average</td><td>0%</td></tr>
  }
  return <tr><td>average</td><td>{Avg}</td></tr>
}

const Button = ({clicksGood, clicksNeutral, clicksBad}) => {
  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={clicksGood}>good</button>
        <button onClick={clicksNeutral}>neutral</button>
        <button onClick={clicksBad}>bad</button>
    </div>
  )
}
const Statistic = ({text, value}) =>{
  return (
    <tr>
      <td>{text}</td><td>{value}</td>  
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return(
    <>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
    </>
  )
}

const All = ({good, neutral, bad}) => {
  const allClicks = good + neutral + bad
  return allClicks
}

const Table = ({good, neutral, bad}) => {
  if(All({good, neutral, bad}) === 0){
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} />
        <tr><td>all</td><td><All good={good} neutral={neutral} bad={bad}/></td></tr>
        <Average goods={good} neutrals={neutral} bads={bad} />
        <Positive good={good} neutral={neutral} bad={bad} />
      </table>
  </div>
  )
}

const App = (props) => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const clicksGood = () => {
  setGood((prevGood) => {
    return prevGood + 1
  })
}
const clicksNeutral = () => {
  setNeutral((prevNeutral) => {
    return prevNeutral + 1
  })
}
const clicksBad = () => {
  setBad((prevBad) => {
    return prevBad + 1
  })
}

  return (
      <div>
        <Button clicksGood={clicksGood} clicksNeutral={clicksNeutral} clicksBad={clicksBad}/>
        <Table good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
