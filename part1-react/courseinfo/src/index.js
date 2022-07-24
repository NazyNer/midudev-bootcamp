import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = (props) => {
    if(props.part1){
      return <p>{props.part1}</p>
    }
    if(props.part2){
      return <p>{props.part2}</p>
    }
    if(props.part3){
      return <p>{props.part3}</p>
    }
} 

const Content = ({part1, part2, part3}) => {

  return (
    <div>
      <Part part1={part1}/>
      <Part part2={part2}/>
      <Part part3={part3}/>
    </div>
  )
}

const Total = ({Total}) =>{
  return <p>Number of exercises {Total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />

      <Content part1={part1 + exercises1} part2={part2 + exercises2} part3={part3 + exercises3} />

      <Total Total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))