import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    const {
        todos,
        setTodos,
        filtered
    } = props;

  return (
      <div style={{margin: '7%'}}>
          <ul>
            {filtered.map(todo => (
                <Todo
                    task={todo.task}
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
          </ul>
      </div>
  );
}

export default TodoList;
