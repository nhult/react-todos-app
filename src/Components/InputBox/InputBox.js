import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import './InputBox.css';

export default class InputBox extends Component {
  constructor() {
    super();
  }

  handleInputChange = (event) => {
    this.props.onInputChange(event.target.value);
  }

  render() {
    return (
      <div>
        <div id='input-container'> 
            <input id='input-field' type='text' value={this.props.value} placeholder='Enter a todo..' onChange={this.handleInputChange.bind(this)} onKeyPress={this.props.onKeyPress}/>
            <button id='todos-append' type="submit" onClick={this.props.onButtonSubmit}></button>

               <div id='todos-trash' onClick={this.props.removeTodos}>
                  <FontAwesome
                  className='far fa-trash-alt'
                  name='trash'
                  size='2x'
                  style={{ color: '#e74c3c' }}
                  />
               </div>
        </div>
      </div>
    );
  }
}