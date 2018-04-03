import React, { Component } from 'react';
import InputBox from './Components/InputBox/InputBox';
import Todo from './Components/Todo/Todo';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: [
      {value: "1", id: 1, checked: true},
      {value: "2 ", id: 2, checked: true},
      {value: "3this stays", id: 3, checked: false},
      {value: "4", id: 4, checked: true}
      ]
    }
  }
  
  onButtonSubmit = () => {
    let todosClone = this.state.todos;
    let id = 1;
    let isUnique = () => {
      let index = todosClone.findIndex(i => i['id'] == id);
      if (index === -1) {
        return id
      }
      id++
      return isUnique(id);
    }
    isUnique(id);

    this.state.todos.length >= 12 ? alert("Too many todos (Limit: 12)") :
      this.state.input === '' ? alert('Empty input') :
        this.state.todos.unshift({value: this.state.input, id: id, checked: false});
        this.setState({input: ''}); //This updates the state as a whole in render and updates the modification done on the previous line that wasn't done with setState() method.
    
        console.log(this.state.todos);
  }

  onKeyPress = (event) => {
    event.charCode === 13
      ? document.getElementById('todos-append').click() /*Use onButtonSubmit as callback?*/
      : false;
  }

  onInputChange = (value) => {
    this.setState({input: value});
  }

  onCheckedChange = (bool, id) => {
    let todosClone = this.state.todos;
    let index = todosClone.findIndex(i => i['id'] == id);
    todosClone[index]['checked'] = bool;

    this.setState({todos: todosClone});
  }

  removeSelected = () => {
    let newTodos = this.state.todos.filter((item) => {
      return !item['checked']
    });
    console.log(newTodos);
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className='container'>
        <InputBox value={this.state.input} onButtonSubmit={this.onButtonSubmit} onKeyPress={this.onKeyPress} onInputChange={this.onInputChange.bind(this)} removeTodos={this.removeSelected} />
        <ul>
          {
            this.state.todos.map((item, index) => {
              return (
                <Todo
                  key={item['id']} 
                  id={item['id']} 
                  todo={item['value']} 
                  checked={item['checked']}
                  onCheckedChange={this.onCheckedChange.bind(this)}
                />
              );
            })
          }
        </ul>
      </div>
      );
  }
}
