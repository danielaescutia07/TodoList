import React from 'react';
import { v4 as uuid } from 'uuid';

function TodoForm(props) {

//*props that are passed down from App.js
    const {
        inputText,
        setInputText,
        todos,
        setTodos,
        setStatus,
    } = props;
    const uniqueId = uuid();

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                task: inputText,
                completed: false,
                id: uniqueId
            }
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

  return (
        <form className='todo-form'onSubmit={handleSubmit}>
            <div className='row justify-content-around'>
                <div className='col-6' style={{display: 'flex'}}>
                    <input
                        type='text'
                        value={inputText}
                        className='form-control'
                        onChange={onChange}
                        placeholder='Add a todo'
                    />
                    <button type="submit" className="btn btn-outline-secondary">
                    <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className='col-3'>
                    <select className='form-select' aria-label='select example' defaultValue="All" onChange={statusHandler}>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>

            </div>
        </form>
  );
};

export default TodoForm;
