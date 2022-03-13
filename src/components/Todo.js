import React from 'react';


function Todo(props) {

  const {
    task,
    todo,
    todos,
    setTodos,
  } = props;

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
     if (item.id === todo.id) {
       return {
         ...item,
         completed: !item.completed
       }
     }
     return item;
    }))
  };

  return (
      <div className='row justify-content-between align-items-center list-item' style={{margin: '1%', border: 'solid lightGray', borderRadius: '.3em'}}>
        <li className={`task col-8 col-sm-6 ${todo.completed ? 'completed' : ''}`}>{task}</li>
        
          <button  onClick={completeHandler} className='btn col-1 offset-md-4'><i className="fa-solid fa-check"></i></button>
          <button onClick={deleteHandler} className='btn col-1'><i className="fa-solid fa-trash-can"></i></button>
        
      </div>
  );
}

export default Todo;
