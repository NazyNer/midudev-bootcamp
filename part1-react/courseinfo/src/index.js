import React from 'react'
import ReactDOM from 'react-dom'



const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Part = ({part1, part2, part3}) => {
  if(part1){
    return <p>{part1.name + part1.exercises}</p>
    }
    if(part2){
      return <p>{part2.name + part2.exercises}</p>
    }
    if(part3){
      return <p>{part3.name + part3.exercises}</p>
    }
} 

const Content = ({parts}) => {
  return (
    <div>
      <Part part1={parts.parts[0]}/>
      <Part part2={parts.parts[1]}/>
      <Part part3={parts.parts[2]}/>
    </div>
  )
}

const sum = ({partsSum}) =>{
  let sum = 0;
  const arrayLength = partsSum.length
  console.log(arrayLength)
  for (let i = 0; i < arrayLength; i++) {
  sum += partsSum[i].exercises;
        
  }
  return sum
}

const Total = ({parts}) =>{
  const partsSum = parts.parts
  const total = sum({partsSum})
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React ',
        exercises: 10
      },
      {
        name: 'Using props to pass data ',
        exercises: 7
      },
      {
        name: 'State of a component ',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))