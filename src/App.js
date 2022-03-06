import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
