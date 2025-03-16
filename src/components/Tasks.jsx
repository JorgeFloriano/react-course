// import the ChevronRightIcon and TrashIcon components
import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

// import the useNavigate hook to navigate to the task page
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={
                            () => onTaskClick(task.id)
                        }
                        className={
                            `bg-slate-400 text-left text-white px-4 py-2 rounded-md w-full flex items-center gap-2${
                                task.isCompleted && ' line-through'
                            }`
                        }>
                        
                        {task.isCompleted && <CheckIcon />}

                        {task.title}

                    </button>
                    
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>

                    <Button
                        onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks