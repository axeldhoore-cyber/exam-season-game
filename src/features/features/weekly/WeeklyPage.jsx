// File: src/features/weekly/WeeklyPage.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWeeklyTask,
  toggleWeeklyTask,
  removeWeeklyTask,
} from "./weeklySlice";
import { v4 as uuid } from "uuid";

export default function WeeklyPage() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.weekly.tasks);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch(
      addWeeklyTask({
        id: uuid(),
        text: input,
        completed: false,
      })
    );
    setInput("");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Semanales</h1>

      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Nueva tarea semanal..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border p-3 rounded"
          >
            <div
              className={`cursor-pointer ${
                task.completed ? "line-through opacity-60" : ""
              }`}
              onClick={() => dispatch(toggleWeeklyTask(task.id))}
            >
              {task.text}
            </div>
            <button
              className="text-red-500"
              onClick={() => dispatch(removeWeeklyTask(task.id))}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
