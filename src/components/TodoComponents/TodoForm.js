import React from 'react';

function TodoForm(props) {

  return (
    <form onSubmit={props.addNewCharacter}>

      <input
        value={props.task}
        type="text"
        name="task"
        placeholder="DO MORE"
        onChange={props.handleChanges}
      />
      <button type="submit">Add Goal</button>
      {/* <button type="submit">Completed</button> */}

      <button onClick={props.clearReds}>Clears Completed</button>
    </form>
  );
}

export default TodoForm;