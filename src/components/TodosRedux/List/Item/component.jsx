import React from "react";

import './styles.scss';

import {connect} from "react-redux";
import {removeTodo} from '../../../../store/todos/actions';
import {checkTodo} from '../../../../store/todos/actions';


const Item = ({ id, value, removeTodo, checkTodo }) => (
  <li className="item">
    <div className="value">
      <input
        className="check"
        type="checkbox"
        onClick={() => checkTodo(id)}
      />
      <span>{value}</span>
    </div>
    <button onClick={() => removeTodo(id)}>
      x
    </button>
  </li>
)
const mapDispatchToProps = {
  removeTodo,
  checkTodo
}

export default connect(null, mapDispatchToProps)(Item);
