import React from 'react';

function StateStuff(props) {
  return (
    <div className="days">
      {props.number}
      <button onClick={props.increment}>Days of Excersise</button>
    </div>
  );
}

export default StateStuff;