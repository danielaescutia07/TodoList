import React from 'react';
import { v4 as uuid } from 'uuid';

//*Ant Design Component imports
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function TodoForm(props) {

    const {inputText, setInputText, todos, setTodos} = props;
    const uniqueId = uuid();

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: uniqueId
            }
        ]);
        setInputText('');
    };

  return (
      <form className='todo-form' onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputText}
            className='todo-input'
            onChange={onChange}
          />
          <button className='todo-button'>Add todo</button>
          <div className='select'>
              <select className='filter-todo'>
                  <option value='all'>All</option>
                  <option value='completed'>Completed</option>
                  <option value='uncompleted'>Uncompleted</option>
              </select>
          </div>
      </form>
  )
}

export default TodoForm;
