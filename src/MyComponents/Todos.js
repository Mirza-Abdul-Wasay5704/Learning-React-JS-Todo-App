
import React from 'react';
import { TodoItem } from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>My Todos</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} onToggle={props.onToggle} />
        ))
      }
    </div>
  );
}

export default Todos;

