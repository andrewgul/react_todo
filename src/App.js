import React, {Component} from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
import TodoList from './TodoList'
import Watch from './Watch'


class App extends Component {
  constructor(){
    super()
    this.state = {
      items:[],
      currentItem: {
        text: "",
        key: "firstItem"
      }
    }
  }

  render(){
    return(
      <Container className="App">
        <Watch />
        <h1>Приложение для дел</h1>
        <TodoList currentItem={this.state.currentItem}/>
      </Container>
    )
  }
}

export default App