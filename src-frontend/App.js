import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import TodoApp from './components/todo/TodoApp'



class App extends Component {
  render() {
    return (   
      <div className="App">
      {/*  <Counter/>*/}
      <TodoApp/>
      </div> 
    );
  }
}
export default App;
