// import React from 'react';

// const Todo = props => {
//   return (

//     <h1>
//       onClick={() => props.changeColor(props.characterOnProps.id)}
//       className={`character-header ${props.characterOnProps.color}`}
//     >
//   {props.character.task}
//   </h1>
  
  
//   );
  
// };

// export default Todo;





import React from 'react';

function Todo(props) {
  return <div>{props.character.task}</div>
  
} 

export default Todo;