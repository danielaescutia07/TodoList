import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    const { todos } = props;

  return (
      <div>
          <ul className='todo-list'>
              <Todo todos={todos}/>
          </ul>
      </div>
  );
}

export default TodoList;
