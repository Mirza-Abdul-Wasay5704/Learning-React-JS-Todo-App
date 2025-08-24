import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer';
import PropTypes from 'prop-types';


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './MyComponents/About';


function getInitialTodos() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }
  return [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false }
  ];
}

function App() {
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  const addTodo = (title) => {
    // Prevent duplicate (case-insensitive, trimmed)
    const exists = todos.some(t => t.title.trim().toLowerCase() === title.trim().toLowerCase());
    if (exists) {
      alert('This todo already exists!');
      return;
    }
    const newTodo = {
      id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      title: title.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (todo) => {
    setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <Router>
      <Header title = "My Todo List" SearchBar={false}/>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <AddTodo onAdd={addTodo} />
            <Todos todos={todos} onDelete={onDelete} onToggle={toggleComplete} />
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  SearchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  SearchBar: PropTypes.bool
};

export default App;
