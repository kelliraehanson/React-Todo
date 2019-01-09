import React from 'react';

function ToDoForm(props) {
    console.log('ToDo Form is re-rendering');
    return (
        <form onSubmit={props.addNewToDo}>

        <input
        value={props.ToDoName}
        type="text"
        name="todoName"
        placeholder="...todo"
        onChange={props.handleChanges}
        />

        <button type="submit">Add Todo</button>

        <button type="reset">Clear Completed</button>
        
        </form>
    );
}

export default ToDoForm;