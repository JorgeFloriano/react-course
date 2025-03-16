import { useState } from "react";
import Input from "./Input";
function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type the task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Type the task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
            // Verify if the title and description are not empty
            if(!title.trim()|| !description.trim()) {
                setTitle("")
                setDescription("")
                return alert("Please fill the title and description")
            }
                
            // Call the onAddTaskSubmit function
            onAddTaskSubmit(title, description)

            // Reset the title and description
            setTitle("")
            setDescription("")
        }}
        className="bg-slate-500 text-white p-2 rounded-md"
        name="addTask"
        id="addTask"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
