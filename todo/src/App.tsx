import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/list';
import TodoInput from './components/add-todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
