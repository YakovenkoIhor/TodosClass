import React, {useState} from 'react';

import TodosComponent from "./component";

import './styles.scss';

import {connect} from "react-redux";

const Todos = ({todos}) => {

  const [enterTodo, setEnterTodo] =useState('')

  const handleEnterTodo = e => {
    setEnterTodo(e.target.value)
  }

  const isTodosEmpty = todos.length === 0;

    return (
      <TodosComponent
        enterTodo={enterTodo}
        todos={todos}
        setEnterTodo={setEnterTodo}
        isTodosEmpty={isTodosEmpty}
        onEnterTodo={handleEnterTodo}
      />
    )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, null)(Todos);
