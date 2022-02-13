import { useState } from "react";

import "./styles.css";

export default function App() {
  const [message] = useState("Hello Coding Jitsu fans");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      task: "Learn React",
      id: 1,
      done: false
    },
    {
      task: "Learn JSX",
      id: 2,
      done: false
    }
  ]);

  function handleSubmit(event) {
    function uid() {
      return Math.floor(Math.random() * 569);
    }
    event.preventDefault();
    setTodos([
      ...todos,
      {
        task: todo,
        id: uid(),
        done: false
      }
    ]);
    setTodo("");
  }

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function toggle(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else return todo;
    });

    setTodos(updatedTodos);
  }

  function remove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo"></label>
        <input
          id="todo"
          name="todo"
          placeholder="add todo"
          onChange={handleChange}
          value={todo}
          required
        />
        <button>Add</button>
      </form>

      {todos.map((todo) => {
        return (
          <ul>
            <input type="checkbox" onChange={() => toggle(todo.id)} />
            <li className={todo.done ? "done" : null} key={todo.id}>
              {todo.task}
              {todo.id}
            </li>
            <button onClick={() => remove(todo.id)}>delete</button>
          </ul>
        );
      })}
    </div>
  );
}
