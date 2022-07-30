import './App.css';
import React, { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  

  const handleSubmit = (event) => {
      event.preventDefault()
      if(persons.find(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
      }
      else{
        const nameToAddToState = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(nameToAddToState))
        setNewName('')
        setNewNumber('')
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with<input type='text' onChange={handleFilter} value={filter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' onChange={handleName} value={newName} />
        </div>
        <div>
          number: <input type='text' onChange={handleNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App;
