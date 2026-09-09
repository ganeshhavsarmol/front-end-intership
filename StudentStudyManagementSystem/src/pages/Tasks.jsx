import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import tasksData from "../data/tasks.json";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("studymate_tasks") || "null") || tasksData);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => localStorage.setItem("studymate_tasks", JSON.stringify(tasks)), [tasks]);

  function addTask(e) {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks([...tasks, {id:Date.now(), title, subject:subject || "General", date:"Today", done:false}]);
    setTitle(""); setSubject("");
  }

  function toggle(id) { setTasks(tasks.map(t => t.id === id ? {...t, done:!t.done} : t)); }
  function remove(id) { setTasks(tasks.filter(t => t.id !== id)); }

  const done = tasks.filter(t=>t.done).length;

  return <div className="container page">
    <div className="page-heading"><span className="eyebrow">PRODUCTIVITY</span><h1>My Tasks</h1><p>{done} of {tasks.length} tasks completed.</p></div>

    <form className="add-task" onSubmit={addTask}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter a new task..." />
      <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject (optional)" />
      <button className="primary-button" type="submit"><Plus size={18}/> Add Task</button>
    </form>

    <div className="task-list">{tasks.map(task => <TaskCard key={task.id} task={task} onToggle={toggle} onDelete={remove}/>)}</div>
  </div>
}