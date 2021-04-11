import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

// class App extends Component {
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Viral Subodh Parekh', age: 41},
      { name: 'Smruti Chokhawala Parekh', age: 39},
      { name: 'Vivaan Chokhawala Parekh', age: 7}
    ]
  })

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Viral'
    setPersonsState({persons: [
      { name: 'Viru', age: 41},
      { name: 'Tinu', age: 39},
      { name: 'Vivu', age: 7}
    ],
    otherState: 'some other value'
  })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Swimming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default app;