import React, { useState, useEffect } from 'react';
import './App.css';
import background from './images/background.2.jpeg';


//*Importing Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break
    }
  };

  return (
    <div className="card container">
      <div className='row'>
        <div className='col imgDiv' style={{width: '50%'}}>
          <img src={background} className= 'card-img-top' alt='background'/>
        </div>
        
        <div className='card-body col'>
          <TodoForm
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filtered={filtered}
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default App;
