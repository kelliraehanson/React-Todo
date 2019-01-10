// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo';

function TodoList(props) {

  return (
    <div>
      {props.disneyDataList.map((character, index) => {
        return <Todo character={character} key={index}/>;
      })}
    </div>
  );

}

export default TodoList;