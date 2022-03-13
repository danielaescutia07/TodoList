import React from 'react';


function Todo(props) {

  const { task } = props;

  return (
      <div className='row justify-content-between align-items-center' style={{margin: '1%', border: 'solid lightGray', borderRadius: '.3em'}}>
        <li className='todo-item col-8'>{task}</li>
        <div className='col-2'>
          <button className='btn'><i className="fa-solid fa-check"></i></button>
          <button className='btn'><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
  );
}

export default Todo;
