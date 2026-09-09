import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/subjects", "Subjects"],
  ["/notes", "Notes"],
  ["/tasks", "Tasks"],
  ["/timer", "Timer"],
  ["/profile", "Profile"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon"><BookOpen size={21} /></span>
          <span>Study<span>Mate</span></span>
        </NavLink>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links show" : "nav-links"}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}