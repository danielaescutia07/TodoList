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
      <div className='row justify-content-between align-items-center' style={{margin: '1%', border: 'solid lightGray', borderRadius: '.3em'}}>
        <li className={`col-8 ${todo.completed ? 'completed' : ''}`}>{task}</li>
        <div className='col-2'>
          <button onClick={completeHandler} className='btn'><i className="fa-solid fa-check"></i></button>
          <button onClick={deleteHandler} className='btn'><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
  );
}

export default Todo;
