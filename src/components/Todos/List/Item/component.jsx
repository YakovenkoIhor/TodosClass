import React from "react";

import './styles.scss';

const Item = ({ id, value, onRemoveTodo, onCheckTodo }) => (
  <li className="item">
    <div className="value">
      <input
        className="check"
        type="checkbox"
        onClick={() => onCheckTodo(id)}
      />
      <span>{value}</span>
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
