import React, { useState } from 'react';
import Header from './Header.js';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    setTodo('');
  }

  console.log(todos);

  return (
    <div className="container">
      <header>
        <Header />
        <a href="https://github.com/alzseven/start-fe/tree/master/13">Github</a>
        <form className="new-task" onSubmit={handleSubmit}>
          <input
            name="text"
            placeholder="할일을 입력하세요"
            value={todo}
            onChange={handleChange}
          />
        </form>
      </header>
      <div id="result">
        <ul>
          {todos.map((todo) => {
            return <li key={todo}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
