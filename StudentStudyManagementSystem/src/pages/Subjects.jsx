import React, { useState } from "react";
import subjects from "../data/subjects.json";
import { Search } from "lucide-react";

export default function Subjects() {
  const [search, setSearch] = useState("");
  const list = subjects.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container page">
      <div className="page-heading">
        <span className="eyebrow">ACADEMICS</span>
        <h1>My Subjects</h1>
        <p>Track your progress across all subjects.</p>
      </div>

      <div className="search-box"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search subject..." /></div>

      <div className="subject-grid six">
        {list.map(s => (
          <div className="subject-card large" key={s.id}>
            <div className="subject-top"><span className="subject-emoji">{s.icon}</span><span className="subject-code">{s.code}</span></div>
            <h3>{s.name}</h3><p>{s.teacher}</p>
            <div className="progress-row"><span>Course progress</span><strong>{s.progress}%</strong></div>
            <div className="progress"><div style={{width:`${s.progress}%`}} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}