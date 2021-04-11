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

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Viral'
    this.setState({persons: [
      { name: 'Viru', age: 41},
      { name: 'Tinu', age: 39},
      { name: 'Vivu', age: 7}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Swimming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
