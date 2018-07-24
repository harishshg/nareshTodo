import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Wish from "./Wish";
class App extends Component {
  state = {
    inputText: "",
    todos: [
      {
        id: 1,
        text: "create simple react app"
      },
      {
        id: 2,
        text: "To create rest api"
      },
      {
        id: 3,
        text: "To create react redux app"
      }
    ]
  };

  changeTodoText = text =>
    this.setState({
      inputText: text
    });
  submit = () =>
    this.setState({
      inputText: "",
      todos: this.state.todos.concat({
        id: this.state.todos.length + 1,
        text: this.state.inputText
      })
    });
  delete = id =>
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    });
  edit = id => {
    let filteredArray = this.state.todos.filter(todo => todo.id == id);
    let todo=filteredArra[0]
    console.log(filteredArray);
  };

  render() {
    return (
      <div className="container">
        <TodoForm
          inputText={this.state.inputText}
          changeTodoText={this.changeTodoText}
          submit={this.submit}
        />
        <TodoList
          todos={this.state.todos}
          delete={this.delete}
          edit={this.edit}
        />
      </div>
    );
  }
}

export default App;
