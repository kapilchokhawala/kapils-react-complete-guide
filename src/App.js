import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Viral Subodh Parekh', age: 41},
      { name: 'Smruti Chokhawala Parekh', age: 39},
      { name: 'Vivaan Chokhawala Parekh', age: 7}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Viral'
    this.setState({persons: [
      { name: newName, age: 41},
      { name: 'Tinu', age: 39},
      { name: 'Vivu', age: 7}
    ]})
  }

  nameChangedHanlder = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 41},
      { name: event.target.value, age: 39},
      { name: 'Vivu', age: 7}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Viru')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Viru Sahasrabuddhe')}
          changed={this.nameChangedHanlder}>Hobbies: Swimming</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
