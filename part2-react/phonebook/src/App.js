import './App.css';
import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas' 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const nameToAddToState = {
        name: newName 
      }
      setPersons(persons.concat(nameToAddToState))
      setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' onChange={handleChange} value={newName} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App;
