import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="TodoCounter">
        <h2 className="Counter">
          {completedTodos} de {totalTodos} tareas completadas
        </h2>
      </div>
    </React.Fragment>
  );
}

export { TodoCounter };
