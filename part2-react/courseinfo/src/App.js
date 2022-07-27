import './App.css';

const Part = ({parts}) => {
  if(typeof parts === 'undefined') {
    return "No hay partes en este curso"
  }
  return (
    <div>
      {
        parts.map((parts) => {
          return <p key={parts.id}>{parts.name} {parts.exercises}</p>
        })
      }
    </div>
  )
}

const Total = ({parts}) => {
  const maxParts = parts.length
  let suma = 0
  for (let i = 0; i < maxParts; i++) {
    suma += parts[i].exercises
  }
  
  return(
    <p><strong>total of {suma} exercises</strong></p>
  )
}

const Course = ({course}) =>{
  return (
    <div>
    <h1>{course[0].name}</h1>
    <Part parts={course[0].parts}/>
    <Total parts={course[0].parts} />
    <h1>{course[1].name}</h1>
    <Part parts={course[1].parts}/>
    <Total parts={course[1].parts} />
    </div>
  )
}

const App = () => {
  const course = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]

  return <Course course={course} />
}


export default App;
