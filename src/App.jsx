import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  // Remove task function
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex w-full justify-center  bg-gradient-to-br from-gray-900 to bg-gray-600 min-h-screen">
      <div className=" bg-gradient-to-br from bg-gray-950 to gray-700 flex flex-col w-full max-w-3xl p-6 sm:p-12 rounded-2xl text-center my-6 sm:my-12 opacity-80">
        <h1 className="font-extrabold text-4xl sm:text-5xl text-[#3488bf] pb-4 sm:pb-6">
          To-Do App
        </h1>
        <ToDoForm addTask={addTask} />
        <ToDoList task={tasks} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
