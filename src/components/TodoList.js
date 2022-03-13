import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    const { todos, inputText } = props;

  return (
      <div style={{margin: '7%'}}>
          <ul>
            {todos.map(todo => (
                <Todo task={todo.task} key={todo.id}/>
            ))}
          </ul>
      </div>
  );
}

export default TodoList;
