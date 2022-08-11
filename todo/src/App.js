import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const addTask = () => {
    setTodo([...todo, currentTask]);
  };
  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <div>
        <input
          type='text'
          placeholder='Task'
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todo.map((val, key) => {
          return <li key={key}>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
