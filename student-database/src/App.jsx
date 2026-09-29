import React, { useEffect, useMemo, useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Pencil,
  Trash2,
  X,
  GraduationCap,
  Moon,
  Sun,
  Eye,
  Filter,
} from "lucide-react";

const demo = [
  {
    id: 1,
    name: "Ganesh Avsarmol",
    roll: "101",
    branch: "CSE",
    year: "3rd Year",
    phone: "9322978542",
    email: "avsarmolganesh93@gmail.com",
  },
];
const blank = {
  name: "",
  roll: "",
  branch: "CSE",
  year: "3rd Year",
  phone: "",
  email: "",
};

export default function App() {
  const [students, setStudents] = useState(
    () => JSON.parse(localStorage.getItem("students") || "null") || demo,
  );
  const [dark, setDark] = useState(
    () => localStorage.getItem("dark") === "true",
  );
  const [q, setQ] = useState(""),
    [branch, setBranch] = useState("All"),
    [year, setYear] = useState("All");
  const [form, setForm] = useState(blank),
    [editing, setEditing] = useState(null),
    [profile, setProfile] = useState(null),
    [showForm, setShowForm] = useState(false);
  useEffect(
    () => localStorage.setItem("students", JSON.stringify(students)),
    [students],
  );
  useEffect(() => {
    localStorage.setItem("dark", dark);
    document.body.classList.toggle("dark", dark);
  }, [dark]);
  const filtered = useMemo(
    () =>
      students.filter(
        (s) =>
          (!q ||
            `${s.name} ${s.roll} ${s.branch} ${s.email}`
              .toLowerCase()
              .includes(q.toLowerCase())) &&
          (branch === "All" || s.branch === branch) &&
          (year === "All" || s.year === year),
      ),
    [students, q, branch, year],
  );
  const openAdd = () => {
      setForm({ ...blank });
      setEditing(null);
      setShowForm(true);
    },
    openEdit = (s) => {
      setForm({ ...s });
      setEditing(s.id);
      setShowForm(true);
    };
  const save = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll || !form.phone)
      return alert("Name, Roll Number and Phone are required.");
    setStudents((x) =>
      editing
        ? x.map((s) => (s.id === editing ? { ...form, id: editing } : s))
        : [...x, { ...form, id: Date.now() }],
    );
    setForm({ ...blank });
    setEditing(null);
    setShowForm(false);
  };
  const del = (id) => {
    if (confirm("Delete this student?"))
      setStudents((x) => x.filter((s) => s.id !== id));
  };
  const ini = (n) =>
    n
      .split(" ")
      .map((x) => x[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  const count = (b) => students.filter((s) => s.branch === b).length;
  return (
    <div className="app">
      <aside>
        <div className="logo">
          <span>
            <GraduationCap />
          </span>
          <div>
            <b>StudentHub</b>
            <small>Management System</small>
          </div>
        </div>
        <nav>
          <div className="nav active">Dashboard</div>
          <div className="nav">Students</div>
        </nav>
        <button className="reset" onClick={() => setStudents(demo)}>
          Reset Demo Data
        </button>
      </aside>
      <main>
        <header>
          <div>
            <label>COLLEGE ADMINISTRATION</label>
            <h1>Student Dashboard</h1>
          </div>
          <button className="theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </header>
        <section className="stats">
          <Stat title="Total Students" value={students.length} />
          <Stat title="CSE Students" value={count("CSE")} />
          <Stat title="IT Students" value={count("IT")} />
          <Stat title="ENTC Students" value={count("ENTC")} />
        </section>
        <section className="card">
          <div className="head">
            <div>
              <h2>Student List</h2>
              <p>Manage all registered students.</p>
            </div>
            <button className="primary" onClick={openAdd}>
              <UserPlus /> Add Student
            </button>
          </div>
          <div className="filters">
            <div className="search">
              <Search />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name, roll no, branch..."
              />
            </div>
            <div className="select">
              <Filter />
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option>All</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ENTC</option>
              </select>
            </div>
            <select
              className="select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option>All</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
            </select>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>STUDENT</th>
                  <th>ROLL NO.</th>
                  <th>BRANCH</th>
                  <th>YEAR</th>
                  <th>PHONE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div className="student">
                        <span className="avatar">{ini(s.name)}</span>
                        <div>
                          <b>{s.name}</b>
                          <small>{s.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>{s.roll}</td>
                    <td>
                      <em className={s.branch.toLowerCase()}>{s.branch}</em>
                    </td>
                    <td>{s.year}</td>
                    <td>{s.phone}</td>
                    <td>
                      <button className="act" onClick={() => setProfile(s)}>
                        <Eye />
                      </button>
                      <button className="act" onClick={() => openEdit(s)}>
                        <Pencil />
                      </button>
                      <button className="act danger" onClick={() => del(s.id)}>
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
                {!filtered.length && (
                  <tr>
                    <td colSpan="6" className="empty">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="bottom">
            Showing <b>{filtered.length}</b> of <b>{students.length}</b>{" "}
            students
          </div>
        </section>
        <footer>StudentHub • Student List Management System</footer>
      </main>
      {showForm && (
        <Modal
          form={form}
          setForm={setForm}
          editing={editing}
          save={save}
          close={() => {
            setEditing(null);
            setForm({ ...blank });
            setShowForm(false);
          }}
        />
      )}
      {profile && (
        <div className="overlay">
          <div className="profile">
            <button className="close" onClick={() => setProfile(null)}>
              <X />
            </button>
            <div className="big">{ini(profile.name)}</div>
            <h2>{profile.name}</h2>
            <p>
              {profile.branch} • {profile.year}
            </p>
            <div className="details">
              <div>
                <span>Roll Number</span>
                <b>{profile.roll}</b>
              </div>
              <div>
                <span>Phone</span>
                <b>{profile.phone}</b>
              </div>
              <div>
                <span>Email</span>
                <b>{profile.email || "—"}</b>
              </div>
            </div>
            <button
              className="primary full"
              onClick={() => {
                setForm({ ...profile });
                setEditing(profile.id);
                setProfile(null);
                setShowForm(true);
              }}
            >
              <Pencil /> Edit Student
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="stat">
      <Users />
      <div>
        <small>{title}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
function Modal({ form, setForm, editing, save, close }) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modalHead">
          <div>
            <h2>{editing ? "Edit Student" : "Add Student"}</h2>
            <p>Enter student information.</p>
          </div>
          <button className="close" onClick={close}>
            <X />
          </button>
        </div>
        <form onSubmit={save}>
          <div className="grid">
            {["name", "roll", "phone", "email"].map((k, i) => (
              <label key={k}>
                {k === "name"
                  ? "Full Name"
                  : k === "roll"
                    ? "Roll Number"
                    : k[0].toUpperCase() + k.slice(1)}
                <input
                  type={k === "email" ? "email" : "text"}
                  value={form[k]}
                  onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  required={k === "name" || k === "roll" || k === "phone"}
                />
              </label>
            ))}
            <label>
              Branch
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
              >
                <option>CSE</option>
                
              </select>
            </label>
            <label>
              Year
              <select
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
              </select>
            </label>
          </div>
          <div className="formActions">
            <button type="button" className="secondary" onClick={close}>
              Cancel
            </button>
            <button className="primary">
              {editing ? "Save Changes" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
