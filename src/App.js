import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  // const name = "brad";
  // const is_open = true;
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shop",
      day: "sunday",
      remainder: true,
    },
    {
      id: 2,
      text: "good shop",
      day: "sunday",
      remainder: true,
    },
    {
      id: 3,
      text: "bad shop",
      day: "monday",
      remainder: true,
    },
  ]);
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
