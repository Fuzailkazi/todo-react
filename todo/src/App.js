import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const inputTask = useRef(null);
  const addTask = () => {
    setTodo([...todo, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    // we need to use .current when working with useref
  };

  const deleteTask = (taskToDelete) => {
    setTodo(
      todo.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };
  const completeTask = (taskCompleted) => {
    setTodo(
      todo.map((task) => {
        return task.task === taskCompleted
          ? { task: taskCompleted, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
  };
  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <div>
        <input
          ref={inputTask}
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
          return (
            <div id='task'>
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? <h1> Done </h1> : <h1> Work hard </h1>}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
