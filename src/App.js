import React, { useState } from 'react';
import './App.css';
import background from './images/background.2.jpeg';


//*Importing Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="card container">
      <div className='row'>
        <div className='col' style={{width: '50%'}}>
          <img src={background} className= 'card-img-top' alt='background'/>
        </div>
        
        <div className='card-body col'>
          <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
          <TodoList inputText={inputText}/>
        </div>
      </div>
      
    </div>
    
  );
};

export default App;
