import React from 'react';
// import ReactDOM from 'react-dom';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList'

const toDoData = [

  { toDoName: 'Wake up' },
  { toDoName: 'School' },
  { toDoName: 'Sleep' }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDoList: toDoData,
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  addNewToDo = ev => {
    this.setState({
      toDoList: [
        ...this.state.characterList, 
        { toDoName: this.state.toDoName }
      ],
      toDoName: ''
    });
  
  };

  render() {
    
    return (
      <div>
        <h2>Todo List: MVP</h2>
      <ToDoList toDoDataList={this.state.toDoList} />

      <ToDoForm
      addNewToDo={this.state.addNewToDo}
      handleChanges={this.handleChanges}
      characterName={this.state.toDoName}
      />

      </div>
    );

  }

}

export default App;

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);









// class App extends React.Component {
  
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!!!!!!!</h2>
//       </div>
//     );
//   }
// }

// export default App;







// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state