import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={task.done ? "task-card done" : "task-card"}>
      <button className="check-button" onClick={() => onToggle(task.id)}>
        {task.done ? <CheckCircle2 /> : <Circle />}
      </button>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.subject} • {task.date}</p>
      </div>
      <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}