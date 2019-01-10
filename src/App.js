import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import StateStuff from './components/TodoComponents/StateStuff';
// import Todo from './components/TodoComponents/Todo';



const todoData = [

  {
    task: 'Take a trip alone',
    id: Date.now(),
    completed: false,
    color: 'black',
  },


  {
    task: 'Start writing a book',
    id: Date.now(),
    completed: false,
    color: 'black',
  },


  {
    task: 'Work on a farm',
    id: Date.now(),
    completed: false,
    color: 'black',
  },


  {
    task: 'Only buy necessities',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Practice pouring candles',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Learn to play piano (again)',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Make homemade pasta',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Learn French for basic conversation',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Memorize world map',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

  {
    task: 'Volunteer cleaning beaches',
    id: Date.now(),
    completed: false,
    color: 'black',
  },

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characterList: todoData,
      task: '',
      inputText: '',
      inputTextTwo: '',
      number: 0
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
        { task: this.state.task, color: 'black', completed: false, id: Date.now() }
      ],
      task: ''
    });
  };

  changeColor = id => {
    console.log('function invoked!');
    
    this.setState({
      characters: this.state.characters.map(character => {
        if (character.id === id) {
          return {
            ...character,
            color: character.color === 'black' ? 'red' : 'black'
          };
        } else {
          return character;
        }
      })
    });
  };


  clearReds = ev => {
    ev.preventDefault();
    this.setState({
      characters: this.state.characters.filter(
        character => character.color === 'black'
      )
    });
  };

  increment = ev => {
    ev.preventDefault();
    this.setState(prevState => ({ number: this.state.number + 1 }));
   
  };



  render() {

    console.log('render is running');
    return (
      <div className="App">
      <h2>2019 GOALS</h2>
      <h3>KELLI RAE HANSON</h3>

        <TodoList 
    banana={this.state.characterList} 
        />

        <TodoForm
        clearsReds={this.clearReds}
          addNewCharacter={this.addNewCharacter}
          inputText={this.state.inputText}
          inputTextTwo={this.state.inputTextTwo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />

        <StateStuff number={this.state.number} increment={this.increment}/>


      </div>
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state