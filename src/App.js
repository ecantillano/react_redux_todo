import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './todo/Todolist';
import NewTask from './todo/NewTask';

class App extends React.Component {

  render(){
    return (
      <div className="App">
          <h1>Lista de tareas</h1>
          <TodoList />
          <NewTask />
      </div>
    );
  }
}

export default App;
