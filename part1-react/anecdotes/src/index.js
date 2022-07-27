import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const H1 = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;
const Votes = ({ votes }) => <p>has {votes} votes</p>;

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const maxArray = anecdotes.length
  const [copy, setCopy] = useState(new Array(maxArray).fill(0));

  const btnRandom = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(maxArray))
    setSelected(randomNum)
  }
  const btnVote = () => {
    const pointsCopy = [...copy]
    pointsCopy[selected] += 1
    setCopy(pointsCopy)
  }
  const highestVotes = Math.max(...copy);
  const winningAnecdote = anecdotes[copy.indexOf(highestVotes)];
  
return (
    <div>
      <H1 text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={copy[selected]} />
      <Button onClick={btnVote} text="vote" />
      <Button onClick={btnRandom} text="next anecdote" />
      <H1 text="Anecdote with most votes" />
      <Anecdote anecdote={winningAnecdote} />
      <Votes votes={highestVotes} />
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)