// import { useState } from 'react' to import the useState hook
import { useEffect, useState } from "react";

// import the AddTask component
import AddTask from "./components/AddTask";

// import the Tasks component
import Tasks from "./components/Tasks";

// import the uuid package to generate a unique id
import {v4} from "uuid"
import Title from "./components/Title";

function App() {

  // Get the tasks from the local storage if it don't exist return an empty array
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Save the tasks in the local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // When useEfect receives an empty array as a second argument it will run only one time
  useEffect(() => {
    // const fetchTasks = async () => {
    //   // Call the api
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
    //     method: "GET",
    //   });

    //   // Get the api data return an array of tasks
    //   const data = await response.json();

    //   // Update the state
    //   setTasks(data);
    // }
    // fetchTasks();
  }, []);


  // Function to handle the click on the task
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // I need to update the task
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      // I don't need to update the task
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    // Filter the tasks array to remove the task
    const newTasks = tasks.filter((task) => task.id !== taskId);

    // Update the state
    setTasks(newTasks);
  }

  // Function to handle the submit of the add task form
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Render the app
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Tasks Manager
        </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
