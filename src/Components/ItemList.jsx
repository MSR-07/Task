import React, { useState } from 'react'

function Todo() {
    const [ todos, setTodos ] = useState([]);

    const [ newTodo, setNewTodo ] = useState();

    const AddTodo = () => {
        let newTodos = [...todos, { todo: newTodo.trim(), id:Date.now() }];
        setTodos(newTodos);
        setNewTodo("");
        console.log(newTodo);
    }
  return (
    <div className='container'>
        <div className='form-group'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className='form-control' /> 
        </div>
        <div className='form-group'>
            <button className='btn btn-primary' onClick={AddTodo}>Save Task</button>
        </div>
        <hr />
        <ul className='list-group'>
            {
                todos.map((tod) => (
                    <li className='list-group-item'>{ tod.todo }</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo
