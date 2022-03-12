import React from 'react';
import { v4 as uuid } from 'uuid';

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
        <form className='todo-form'onSubmit={handleSubmit}>
            <div className='row justify-content-center'>
                <div className='col-6' style={{display: 'flex'}}>
                    <input
                        type='text'
                        value={inputText}
                        className='form-control'
                        onChange={onChange}
                        placeholder='Add a todo'
                    />
                    <button type="submit" class="btn btn-outline-secondary">
                    <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className='col-3'>
                    <select className='form-select' defaultValue="All">
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
