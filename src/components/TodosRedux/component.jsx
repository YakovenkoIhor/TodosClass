import React from "react";

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

import {connect} from "react-redux";
import {addTodo} from '../../store/todos/actions';

const TodosComponent = ({ enterTodo, todos, isTodosEmpty, onEnterTodo, addTodo, setEnterTodo}) => (
  <div className="todos">
    <h1 className="title">Todos</h1>
    <EnterTodo
      value={enterTodo}
      onChange={onEnterTodo}
      onClick={() => addTodo(enterTodo, setEnterTodo)}
    />
    {isTodosEmpty
      ? <EmptyList/>
      : (
        <List
          todos={todos}
        />
      )
    }
  </div>
)
const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(TodosComponent);
