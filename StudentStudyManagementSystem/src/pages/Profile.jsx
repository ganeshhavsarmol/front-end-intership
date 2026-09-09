import React, { useState } from "react";
import { User, Mail, GraduationCap, Save } from "lucide-react";

export default function Profile() {
  const [profile,setProfile] = useState(() => JSON.parse(localStorage.getItem("studymate_profile") || "null") || {
    name:"Student", email:"student@example.com", course:"Computer Engineering", year:"3rd Year"
  });
  const [saved,setSaved]=useState(false);

  function save(e){
    e.preventDefault();
    localStorage.setItem("studymate_profile",JSON.stringify(profile));
    setSaved(true); setTimeout(()=>setSaved(false),1800);
  }

  return <div className="container page">
    <div className="page-heading"><span className="eyebrow">ACCOUNT</span><h1>Student Profile</h1><p>Manage your basic academic profile.</p></div>
    <form className="profile-card" onSubmit={save}>
      <div className="avatar"><User size={42}/></div>
      <label><span>Name</span><div className="input-icon"><User/><input value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})}/></div></label>
      <label><span>Email</span><div className="input-icon"><Mail/><input type="email" value={profile.email} onChange={e=>setProfile({...profile,email:e.target.value})}/></div></label>
      <label><span>Course</span><div className="input-icon"><GraduationCap/><input value={profile.course} onChange={e=>setProfile({...profile,course:e.target.value})}/></div></label>
      <label><span>Year</span><input value={profile.year} onChange={e=>setProfile({...profile,year:e.target.value})}/></label>
      <button className="primary-button" type="submit"><Save size={18}/> {saved ? "Saved!" : "Save Profile"}</button>
    </form>
  </div>
}