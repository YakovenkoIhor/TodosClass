import React from 'react';

import TodosComponent from "./component";

// import useTestHook from "../../hooks"

import './styles.scss';

// useTestHook()

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enterTodo: '',
      todos: [],
    };
  }
  // useTestHook()
  handleEnterTodo = e => {
    this.setState({ enterTodo: e.target.value });
  }

  handleAddTodo = () => {

    const { enterTodo, todos } = this.state;

    if(enterTodo==='') return
    

    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    this.setState({
      enterTodo: '',
      todos: [...todos, newTodo]
    })
  }

  handleRemoveTodo = todoId => {
    const { todos } = this.state;

    const updatedTodos = todos.filter(todo => todoId !== todo.id);

    this.setState({
      todos: updatedTodos
    })
  }

  handleCheckTodo = (checkId) => {
    const { todos } = this.state;

    const updatedTodos = todos.map(todo => {
      if(todo.id === checkId){
        return {...todo, checked: !todo.checked}
      }
      return todo
    });

    this.setState({
      todos: updatedTodos
    })
  }

  get isTodosEmpty() {
    const { todos } = this.state;

    return todos.length === 0;
  }

  render = () => {
    const { enterTodo, todos } = this.state;

    return (
      <TodosComponent
        enterTodo={enterTodo}
        todos={todos}
        isTodosEmpty={this.isTodosEmpty}
        onEnterTodo={this.handleEnterTodo}
        onAddTodo={this.handleAddTodo}
        onRemoveTodo={this.handleRemoveTodo}
        onCheckTodo={this.handleCheckTodo}
      />
    )
  }
}

export default Todos;
