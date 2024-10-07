import React, { useState } from "react";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([
    "Make the bed",
    "Wash the cars",
    "Start coding",
    "Take my dog to get a grooming",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">todos</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => removeTodo(index)} className="delete-button">
              ✖
            </button>
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        {todos.length} item{todos.length !== 1 ? "s" : ""} left
      </div>
    </div>
  );
};
export default Home;
