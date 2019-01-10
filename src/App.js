import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';



const todoData = [

  {
    task: 'Take a trip alone',
    id: Date.now(),
    completed: false
  },


  {
    task: 'Start writing a book',
    id: Date.now(),
    completed: false
  },


  {
    task: 'Work on a farm',
    id: Date.now(),
    completed: false
  },


  {
    task: 'Only buy necessities',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Practice pouring candles',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Learn to play piano (again)',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Make homemade pasta',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Learn French for basic conversation',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Memorize world map',
    id: Date.now(),
    completed: false
  },

  {
    task: 'Volunteer cleaning beaches',
    id: Date.now(),
    completed: false
  },

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characterList: todoData,
      task: '',
    };
  }

  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  addNewCharacter = ev => {
    ev.preventDefault();
    this.setState({
      characterList: [
        ...this.state.characterList,
        { task: this.state.task }
      ],
      task: ''
    });
  };

  render() {

    console.log('render is running');
    return (
      <div className="App">
      <h2>2019 GOALS</h2>
      <h3>KELLI RAE HANSON</h3>
        <TodoList disneyDataList={this.state.characterList} />
        <TodoForm
          addNewCharacter={this.addNewCharacter}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state