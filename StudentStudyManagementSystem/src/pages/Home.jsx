import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle2, Clock3, Target, ArrowRight, Plus } from "lucide-react";
import subjects from "../data/subjects.json";
import tasksData from "../data/tasks.json";
import StatCard from "../components/StatCard";

export default function Home() {
  const savedTasks = JSON.parse(localStorage.getItem("studymate_tasks") || "null");
  const tasks = savedTasks || tasksData;
  const completed = tasks.filter(t => t.done).length;
  const average = Math.round(subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length);

  return (
    <div className="container page">
      <section className="welcome">
        <div>
          <span className="eyebrow">STUDENT DASHBOARD</span>
          <h1>Good evening, <span>Student!</span> 👋</h1>
          <p>Stay organized, study smarter and track your academic progress.</p>
        </div>
        <Link to="/tasks" className="primary-button"><Plus size={18} /> Add Task</Link>
      </section>

      <div className="stats-grid">
        <StatCard icon={<BookOpen />} title="Subjects" value={subjects.length} text="Active subjects" />
        <StatCard icon={<CheckCircle2 />} title="Completed" value={`${completed}/${tasks.length}`} text="Tasks completed" />
        <StatCard icon={<Target />} title="Progress" value={`${average}%`} text="Average progress" />
        <StatCard icon={<Clock3 />} title="Study Goal" value="2h" text="Today's target" />
      </div>

      <section className="section-block">
        <div className="section-heading">
          <div><span className="eyebrow">YOUR SUBJECTS</span><h2>Continue Learning</h2></div>
          <Link to="/subjects" className="view-link">View all <ArrowRight size={16}/></Link>
        </div>

        <div className="subject-grid">
          {subjects.slice(0, 4).map(subject => (
            <div className="subject-card" key={subject.id}>
              <div className="subject-top"><span className="subject-emoji">{subject.icon}</span><span>{subject.code}</span></div>
              <h3>{subject.name}</h3>
              <p>{subject.teacher}</p>
              <div className="progress-row"><span>Progress</span><strong>{subject.progress}%</strong></div>
              <div className="progress"><div style={{ width: `${subject.progress}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><span className="eyebrow">TASKS</span><h2>Today's Tasks</h2></div>
          <Link to="/tasks" className="view-link">Manage tasks <ArrowRight size={16}/></Link>
        </div>
        <div className="task-list">
          {tasks.slice(0, 4).map(task => (
            <div className={task.done ? "task-card done" : "task-card"} key={task.id}>
              <div className="check-static">{task.done ? <CheckCircle2 /> : <Clock3 />}</div>
              <div className="task-content"><h3>{task.title}</h3><p>{task.subject} • {task.date}</p></div>
              <span className={task.done ? "task-status completed" : "task-status"}>{task.done ? "Completed" : "Pending"}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}