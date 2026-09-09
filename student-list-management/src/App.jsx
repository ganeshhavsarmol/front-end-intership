import React, { useEffect, useMemo, useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Pencil,
  Trash2,
  X,
  GraduationCap,
  LayoutDashboard,
  Moon,
  Sun,
  Filter,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react";

const initialStudents = [
  { id: 1, name: "Rahul Patil", rollNo: "101", branch: "CSE", year: "3rd Year", phone: "9876543210", email: "rahul@example.com", city: "Nashik" },
  { id: 2, name: "Amit Shinde", rollNo: "102", branch: "CSE", year: "3rd Year", phone: "9876543211", email: "amit@example.com", city: "Pune" },
  { id: 3, name: "Priya More", rollNo: "103", branch: "IT", year: "3rd Year", phone: "9876543212", email: "priya@example.com", city: "Mumbai" },
  { id: 4, name: "Sneha Pawar", rollNo: "104", branch: "ENTC", year: "3rd Year", phone: "9876543213", email: "sneha@example.com", city: "Nashik" },
  { id: 5, name: "Akash Jadhav", rollNo: "105", branch: "CSE", year: "2nd Year", phone: "9876543214", email: "akash@example.com", city: "Dhule" },
  { id: 6, name: "Neha Deshmukh", rollNo: "106", branch: "IT", year: "2nd Year", phone: "9876543215", email: "neha@example.com", city: "Nashik" }
];

const emptyForm = {
  name: "",
  rollNo: "",
  branch: "CSE",
  year: "3rd Year",
  phone: "",
  email: "",
  city: ""
};

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [dark, setDark] = useState(() => localStorage.getItem("darkMode") === "true");
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("All");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [viewStudent, setViewStudent] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(dark));
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const filteredStudents = useMemo(() => {
    const q = search.toLowerCase().trim();
    return students.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.rollNo.toLowerCase().includes(q) ||
        s.branch.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q);
      const matchesBranch = branch === "All" || s.branch === branch;
      const matchesYear = year === "All" || s.year === year;
      return matchesSearch && matchesBranch && matchesYear;
    });
  }, [students, search, branch, year]);

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const visibleStudents = filteredStudents.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const stats = {
    total: students.length,
    cse: students.filter((s) => s.branch === "CSE").length,
    it: students.filter((s) => s.branch === "IT").length,
    entc: students.filter((s) => s.branch === "ENTC").length
  };

  function openAdd() {
    setForm(emptyForm);
    setModal("add");
  }

  function openEdit(student) {
    setForm({ ...student });
    setModal("edit");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.rollNo.trim() || !form.phone.trim()) {
      alert("Please fill Name, Roll Number and Phone.");
      return;
    }

    if (modal === "add") {
      setStudents((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    } else {
      setStudents((prev) =>
        prev.map((s) => (s.id === form.id ? form : s))
      );
    }

    setModal(null);
    setForm(emptyForm);
  }

  function deleteStudent(id) {
    const student = students.find((s) => s.id === id);
    if (window.confirm(`Delete ${student?.name || "this student"}?`)) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  }

  function resetData() {
    if (window.confirm("Reset all student data to demo data?")) {
      setStudents(initialStudents);
      setSearch("");
      setBranch("All");
      setYear("All");
      setPage(1);
    }
  }

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function initials(name) {
    return name
      .split(" ")
      .map((x) => x[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><GraduationCap size={24} /></div>
          <div>
            <h2>StudentHub</h2>
            <span>Management System</span>
          </div>
        </div>

        <nav>
          <div className="nav-item active">
            <LayoutDashboard size={19} />
            Dashboard
          </div>
          <div className="nav-item">
            <Users size={19} />
            Students
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-card">
            <strong>Diploma CSE</strong>
            <span>Student Management</span>
          </div>
          <button className="reset-btn" onClick={resetData}>Reset Demo Data</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">COLLEGE ADMINISTRATION</p>
            <h1>Student Dashboard</h1>
          </div>
          <button className="theme-btn" onClick={() => setDark(!dark)} title="Toggle theme">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </header>

        <section className="stats-grid">
          <Stat icon={<Users />} label="Total Students" value={stats.total} />
          <Stat icon={<GraduationCap />} label="CSE Students" value={stats.cse} />
          <Stat icon={<GraduationCap />} label="IT Students" value={stats.it} />
          <Stat icon={<GraduationCap />} label="ENTC Students" value={stats.entc} />
        </section>

        <section className="content-card">
          <div className="section-head">
            <div>
              <h2>Student List</h2>
              <p>Manage and view all registered students.</p>
            </div>
            <button className="primary-btn" onClick={openAdd}>
              <UserPlus size={18} /> Add Student
            </button>
          </div>

          <div className="toolbar">
            <div className="search-box">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search by name, roll no, branch..."
              />
            </div>

            <div className="select-box">
              <Filter size={16} />
              <select value={branch} onChange={(e) => { setBranch(e.target.value); setPage(1); }}>
                <option value="All">All Branches</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ENTC">ENTC</option>
              </select>
            </div>

            <select className="normal-select" value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }}>
              <option value="All">All Years</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
            </select>
          </div>

          <div className="table-wrap">
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
                {visibleStudents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="empty">
                      No students found.
                    </td>
                  </tr>
                ) : (
                  visibleStudents.map((student) => (
                    <tr key={student.id}>
                      <td>
                        <div className="student-cell">
                          <div className="avatar">{initials(student.name)}</div>
                          <div>
                            <strong>{student.name}</strong>
                            <span>{student.email || "No email"}</span>
                          </div>
                        </div>
                      </td>
                      <td><span className="roll">{student.rollNo}</span></td>
                      <td><span className={`badge ${student.branch.toLowerCase()}`}>{student.branch}</span></td>
                      <td>{student.year}</td>
                      <td>{student.phone}</td>
                      <td>
                        <div className="actions">
                          <button className="icon-btn view" title="View" onClick={() => setViewStudent(student)}><Eye size={17} /></button>
                          <button className="icon-btn edit" title="Edit" onClick={() => openEdit(student)}><Pencil size={17} /></button>
                          <button className="icon-btn delete" title="Delete" onClick={() => deleteStudent(student.id)}><Trash2 size={17} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>Showing {filteredStudents.length === 0 ? 0 : (currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredStudents.length)} of {filteredStudents.length}</span>
            <div className="page-buttons">
              <button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}><ChevronLeft size={17} /></button>
              <span className="page-number">{currentPage}</span>
              <button disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}><ChevronRight size={17} /></button>
            </div>
          </div>
        </section>

        <footer>StudentHub • Student List Management System</footer>
      </main>

      {modal && (
        <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-head">
              <div>
                <h2>{modal === "add" ? "Add Student" : "Edit Student"}</h2>
                <p>Enter student information below.</p>
              </div>
              <button className="close-btn" onClick={() => setModal(null)}><X /></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full Name<input name="name" value={form.name} onChange={updateField} placeholder="Enter full name" /></label>
                <label>Roll Number<input name="rollNo" value={form.rollNo} onChange={updateField} placeholder="e.g. 107" /></label>
                <label>Branch
                  <select name="branch" value={form.branch} onChange={updateField}>
                    <option>CSE</option><option>IT</option><option>ENTC</option>
                  </select>
                </label>
                <label>Year
                  <select name="year" value={form.year} onChange={updateField}>
                    <option>1st Year</option><option>2nd Year</option><option>3rd Year</option>
                  </select>
                </label>
                <label>Phone<input name="phone" value={form.phone} onChange={updateField} placeholder="10 digit mobile number" /></label>
                <label>Email<input type="email" name="email" value={form.email} onChange={updateField} placeholder="student@email.com" /></label>
                <label className="full">City<input name="city" value={form.city} onChange={updateField} placeholder="Enter city" /></label>
              </div>
              <div className="form-actions">
                <button type="button" className="secondary-btn" onClick={() => setModal(null)}>Cancel</button>
                <button type="submit" className="primary-btn">{modal === "add" ? "Add Student" : "Save Changes"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewStudent && (
        <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && setViewStudent(null)}>
          <div className="profile-modal">
            <button className="close-btn profile-close" onClick={() => setViewStudent(null)}><X /></button>
            <div className="big-avatar">{initials(viewStudent.name)}</div>
            <h2>{viewStudent.name}</h2>
            <p className="profile-sub">{viewStudent.branch} • {viewStudent.year}</p>
            <div className="profile-details">
              <Detail label="Roll Number" value={viewStudent.rollNo} />
              <Detail label="Phone" value={viewStudent.phone} />
              <Detail label="Email" value={viewStudent.email || "—"} />
              <Detail label="City" value={viewStudent.city || "—"} />
            </div>
            <button className="primary-btn full-btn" onClick={() => { setViewStudent(null); openEdit(viewStudent); }}>
              <Pencil size={17} /> Edit Student
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div><span>{label}</span><strong>{value}</strong></div>
    </div>
  );
}

function Detail({ label, value }) {
  return <div><span>{label}</span><strong>{value}</strong></div>;
}

export default App;
