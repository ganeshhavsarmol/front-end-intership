import React, { useEffect, useState } from "react";
import { Plus, Trash2, Search } from "lucide-react";
import notesData from "../data/notes.json";

export default function Notes() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("studymate_notes") || "null") || notesData);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({title:"", subject:"", content:""});

  useEffect(() => localStorage.setItem("studymate_notes", JSON.stringify(notes)), [notes]);

  function addNote(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    setNotes([{id:Date.now(), ...form, date:"Today"}, ...notes]);
    setForm({title:"",subject:"",content:""});
    setShowForm(false);
  }

  function removeNote(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  const filtered = notes.filter(n => (n.title+" "+n.subject+" "+n.content).toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container page">
      <div className="page-heading row-heading">
        <div><span className="eyebrow">STUDY MATERIAL</span><h1>My Notes</h1><p>Save and organize your important notes.</p></div>
        <button className="primary-button" onClick={() => setShowForm(!showForm)}><Plus size={18}/> New Note</button>
      </div>

      {showForm && <form className="form-card" onSubmit={addNote}>
        <input placeholder="Note title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
        <input placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
        <textarea placeholder="Write your note..." rows="5" value={form.content} onChange={e=>setForm({...form,content:e.target.value})}/>
        <button className="primary-button" type="submit">Save Note</button>
      </form>}

      <div className="search-box"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search notes..." /></div>

      <div className="notes-grid">
        {filtered.map(note => <article className="note-card" key={note.id}>
          <div className="note-top"><span className="tag">{note.subject || "General"}</span><button className="icon-delete" onClick={()=>removeNote(note.id)}><Trash2 size={17}/></button></div>
          <h3>{note.title}</h3><small>{note.date}</small><p>{note.content}</p>
        </article>)}
      </div>
    </div>
  );
}