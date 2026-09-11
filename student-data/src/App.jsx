import { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  UserPlus,
  Search,
  Moon,
  Sun,
  Pencil,
  Trash2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Hash,
  Filter,
} from "lucide-react";

const YEARS = ["1st Year", "2nd Year", "3rd Year"];
const BRANCHES = ["CSE", "IT", "ENTC"];

const demoStudents = [
  {
    id: "STU001",
    enrollmentNo: "ENR001",
    name: "Aarav Patil",
    rollNo: "101",
    branch: "CSE",
    year: "1st Year",
    phone: "9876543210",
    email: "aarav@example.com",
    city: "Buldhana",
  },
  {
    id: "STU002",
    enrollmentNo: "ENR002",
    name: "Sneha Shinde",
    rollNo: "102",
    branch: "IT",
    year: "1st Year",
    phone: "9876543211",
    email: "sneha@example.com",
    city: "Chikhli",
  },
  {
    id: "STU003",
    enrollmentNo: "ENR003",
    name: "Rohit Pawar",
    rollNo: "103",
    branch: "ENTC",
    year: "1st Year",
    phone: "9876543212",
    email: "rohit@example.com",
    city: "Akola",
  },
  {
    id: "STU004",
    enrollmentNo: "ENR004",
    name: "Priya Jadhav",
    rollNo: "201",
    branch: "CSE",
    year: "2nd Year",
    phone: "9876543213",
    email: "priya@example.com",
    city: "Malkapur",
  },
  {
    id: "STU005",
    enrollmentNo: "ENR005",
    name: "Om Deshmukh",
    rollNo: "202",
    branch: "IT",
    year: "2nd Year",
    phone: "9876543214",
    email: "om@example.com",
    city: "Khamgaon",
  },
  {
    id: "STU006",
    enrollmentNo: "ENR006",
    name: "Neha More",
    rollNo: "203",
    branch: "ENTC",
    year: "2nd Year",
    phone: "9876543215",
    email: "neha@example.com",
    city: "Jalgaon",
  },
  {
    id: "STU007",
    enrollmentNo: "ENR007",
    name: "Aditya Kulkarni",
    rollNo: "301",
    branch: "CSE",
    year: "3rd Year",
    phone: "9876543216",
    email: "aditya@example.com",
    city: "Pune",
  },
  {
    id: "STU008",
    enrollmentNo: "ENR008",
    name: "Isha Joshi",
    rollNo: "302",
    branch: "IT",
    year: "3rd Year",
    phone: "9876543217",
    email: "isha@example.com",
    city: "Nashik",
  },
  {
    id: "STU009",
    enrollmentNo: "ENR009",
    name: "Vivek Pawar",
    rollNo: "303",
    branch: "ENTC",
    year: "3rd Year",
    phone: "9876543218",
    email: "vivek@example.com",
    city: "Aurangabad",
  },
  {
    id: "STU010",
    enrollmentNo: "ENR010",
    name: "Kunal Wankhede",
    rollNo: "304",
    branch: "CSE",
    year: "3rd Year",
    phone: "9876543219",
    email: "kunal@example.com",
    city: "Nagpur",
  },
];

const blankForm = {
  name: "",
  enrollmentNo: "",
  rollNo: "",
  branch: "CSE",
  year: "1st Year",
  phone: "",
  email: "",
  city: "",
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "") || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const CLOUD_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const STUDENTS_ENDPOINT = CLOUD_ENABLED ? `${SUPABASE_URL}/rest/v1/students` : "";

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

function toDbStudent(student) {
  return {
    id: student.id,
    enrollment_no: student.enrollmentNo,
    name: student.name,
    roll_no: student.rollNo,
    branch: student.branch,
    year: student.year,
    phone: student.phone,
    email: student.email || "",
    city: student.city || "",
  };
}

function fromDbStudent(row) {
  return {
    id: row.id,
    enrollmentNo: row.enrollment_no,
    name: row.name,
    rollNo: row.roll_no,
    branch: row.branch,
    year: row.year,
    phone: row.phone,
    email: row.email || "",
    city: row.city || "",
  };
}

async function cloudFetchStudents() {
  const response = await fetch(`${STUDENTS_ENDPOINT}?select=*&order=created_at.desc`, {
    headers: supabaseHeaders(),
  });
  if (!response.ok) throw new Error(`Database read failed (${response.status})`);
  const rows = await response.json();
  return rows.map(fromDbStudent);
}

async function cloudInsertStudent(student) {
  const response = await fetch(STUDENTS_ENDPOINT, {
    method: "POST",
    headers: supabaseHeaders({ Prefer: "return=representation" }),
    body: JSON.stringify(toDbStudent(student)),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Database insert failed (${response.status})`);
  }
  const rows = await response.json();
  return fromDbStudent(rows[0]);
}

async function cloudUpdateStudent(student) {
  const response = await fetch(`${STUDENTS_ENDPOINT}?id=eq.${encodeURIComponent(student.id)}`, {
    method: "PATCH",
    headers: supabaseHeaders({ Prefer: "return=representation" }),
    body: JSON.stringify(toDbStudent(student)),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Database update failed (${response.status})`);
  }
  const rows = await response.json();
  return fromDbStudent(rows[0]);
}

async function cloudDeleteStudent(id) {
  const response = await fetch(`${STUDENTS_ENDPOINT}?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: supabaseHeaders({ Prefer: "return=minimal" }),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Database delete failed (${response.status})`);
  }
}

async function cloudSeedStudents(students) {
  const response = await fetch(STUDENTS_ENDPOINT, {
    method: "POST",
    headers: supabaseHeaders({ Prefer: "return=minimal" }),
    body: JSON.stringify(students.map(toDbStudent)),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Database seed failed (${response.status})`);
  }
}

function isSameAsDemo(data) {
  if (!Array.isArray(data) || data.length !== demoStudents.length) return false;
  return data.every((s, i) => s.id === demoStudents[i].id && s.name === demoStudents[i].name);
}

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(CLOUD_ENABLED);
  const [syncError, setSyncError] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("student-dark") === "true",
  );
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All Years");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(blankForm);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadStudents() {
      if (!CLOUD_ENABLED) {
        try {
          const saved = localStorage.getItem("student-year-data");
          if (active) setStudents(saved ? JSON.parse(saved) : demoStudents);
        } catch {
          if (active) setStudents(demoStudents);
        }
        return;
      }

      try {
        let remote = await cloudFetchStudents();
        const savedRaw = localStorage.getItem("student-year-data");
        let saved = null;
        try { saved = savedRaw ? JSON.parse(savedRaw) : null; } catch { saved = null; }

        // One-time migration: if this browser has custom local data and the cloud table is empty,
        // move that data to Supabase so it becomes available on every device.
        if (!remote.length && Array.isArray(saved) && saved.length && !isSameAsDemo(saved)) {
          await cloudSeedStudents(saved);
          remote = await cloudFetchStudents();
        }

        if (active) {
          setStudents(remote.length ? remote : demoStudents);
          setSyncError("");
        }
      } catch (err) {
        if (active) {
          setSyncError("Cloud database connect nahi hua. Supabase URL/key aur SQL setup check karein.");
          try {
            const saved = localStorage.getItem("student-year-data");
            setStudents(saved ? JSON.parse(saved) : demoStudents);
          } catch {
            setStudents(demoStudents);
          }
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadStudents();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!CLOUD_ENABLED && students.length) {
      localStorage.setItem("student-year-data", JSON.stringify(students));
    }
  }, [students]);

  // Poll the shared table so changes made from another phone/laptop appear automatically.
  useEffect(() => {
    if (!CLOUD_ENABLED) return undefined;
    const timer = setInterval(async () => {
      try {
        const remote = await cloudFetchStudents();
        setStudents(remote.length ? remote : demoStudents);
        setSyncError("");
      } catch {
        // Keep the current screen usable if the network briefly drops.
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => setPage(1), [search, yearFilter, branchFilter]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return students.filter((s) => {
      const matchesSearch =
        !q ||
        [s.name, s.enrollmentNo, s.rollNo, s.email, s.branch, s.year, s.city].some((v) =>
          String(v).toLowerCase().includes(q),
        );
      const matchesYear = yearFilter === "All Years" || s.year === yearFilter;
      const matchesBranch =
        branchFilter === "All Branches" || s.branch === branchFilter;
      return matchesSearch && matchesYear && matchesBranch;
    });
  }, [students, search, yearFilter, branchFilter]);

  const perPage = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  const stats = YEARS.map((year) => ({
    year,
    count: students.filter((s) => s.year === year).length,
  }));

  function openAdd() {
    setForm(blankForm);
    setError("");
    setModal("add");
  }

  function openEdit(student) {
    setSelected(student);
    setForm({ ...student });
    setError("");
    setModal("edit");
  }

  async function saveStudent(e) {
    e.preventDefault();
    setError("");
    const required = ["name", "enrollmentNo", "rollNo", "phone"];
    if (required.some((k) => !form[k].trim())) {
      setError("Name, Enrollment Number, Roll Number and Phone are required.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      setError("Phone number must contain exactly 10 digits.");
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    const duplicateEnrollment = students.some(
      (s) =>
        s.enrollmentNo?.trim().toLowerCase() === form.enrollmentNo.trim().toLowerCase() &&
        s.id !== selected?.id,
    );
    if (duplicateEnrollment) {
      setError("This Enrollment Number already exists.");
      return;
    }
    const duplicate = students.some(
      (s) =>
        s.rollNo.trim().toLowerCase() === form.rollNo.trim().toLowerCase() &&
        s.id !== selected?.id,
    );
    if (duplicate) {
      setError("This Roll Number already exists.");
      return;
    }

    const student = {
      ...form,
      id: modal === "add" ? `STU${Date.now().toString().slice(-8)}` : selected.id,
      name: form.name.trim(),
      enrollmentNo: form.enrollmentNo.trim(),
      rollNo: form.rollNo.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      city: form.city.trim(),
    };

    try {
      if (CLOUD_ENABLED) {
        const savedStudent = modal === "add"
          ? await cloudInsertStudent(student)
          : await cloudUpdateStudent(student);
        setStudents((prev) =>
          modal === "add"
            ? [savedStudent, ...prev]
            : prev.map((s) => (s.id === selected.id ? savedStudent : s)),
        );
        setSyncError("");
      } else if (modal === "add") {
        setStudents((prev) => [student, ...prev]);
      } else {
        setStudents((prev) => prev.map((s) => s.id === selected.id ? student : s));
      }
      setModal(null);
      setSelected(null);
    } catch (err) {
      const message = String(err?.message || "");
      if (message.includes("duplicate") || message.includes("23505")) {
        setError("Enrollment Number or Roll Number already exists in the shared database.");
      } else {
        setError("Student save nahi hua. Internet aur Supabase setup check karein.");
      }
    }
  }

  async function removeStudent(id) {
    if (!window.confirm("Delete this student?")) return;
    try {
      if (CLOUD_ENABLED) await cloudDeleteStudent(id);
      setStudents((prev) => prev.filter((s) => s.id !== id));
      setSyncError("");
    } catch {
      setSyncError("Student delete nahi hua. Supabase connection check karein.");
    }
  }

  async function resetDemo() {
    if (!window.confirm("Replace current data with demo students?")) return;
    try {
      if (CLOUD_ENABLED) {
        const current = await cloudFetchStudents();
        for (const student of current) await cloudDeleteStudent(student.id);
        await cloudSeedStudents(demoStudents);
        const remote = await cloudFetchStudents();
        setStudents(remote);
      } else {
        setStudents(demoStudents);
      }
      setSearch("");
      setYearFilter("All Years");
      setBranchFilter("All Branches");
      setPage(1);
      setSyncError("");
    } catch {
      setSyncError("Demo reset nahi hua. Supabase setup check karein.");
    }
  }

  function updateField(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <GraduationCap size={25} />
          </div>
          <div>
            <strong>Student</strong>
            <span>Management</span>
          </div>
        </div>

        <nav>
          <button className="nav-item active">
            <LayoutDashboard size={19} /> Dashboard
          </button>
          <button
            className="nav-item"
            onClick={() => {
              setYearFilter("All Years");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Users size={19} /> All Students
          </button>
          {YEARS.map((y) => (
            <button
              key={y}
              className="nav-item"
              onClick={() => {
                setYearFilter(y);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <BookOpen size={19} /> {y}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => setDark((v) => !v)}>
            {dark ? <Sun size={19} /> : <Moon size={19} />}{" "}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="nav-item" onClick={resetDemo}>
            <RotateCcw size={19} /> Reset Demo Data
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">DASHBOARD</p>
            <h1>Student Management</h1>
            <p className="subtitle">
              Manage 1st, 2nd and 3rd year student records.
            </p>
            <p className={CLOUD_ENABLED && !syncError ? "sync-status online" : "sync-status"}>
              {loading ? "Connecting to shared database..." : CLOUD_ENABLED && !syncError ? "● Cloud sync enabled — all devices share the same data" : "● Local mode — add Supabase settings for multi-device data"}
            </p>
            {syncError && <p className="sync-error">{syncError}</p>}
          </div>
          <button className="primary" onClick={openAdd}>
            <UserPlus size={18} /> Add Student
          </button>
        </header>

        <section className="stats-grid">
          <div className="stat-card total">
            <div>
              <span>Total Students</span>
              <strong>{students.length}</strong>
            </div>
            <Users size={28} />
          </div>
          {stats.map((s, i) => (
            <button
              key={s.year}
              className="stat-card year-card"
              onClick={() => setYearFilter(s.year)}
            >
              <div>
                <span>{s.year}</span>
                <strong>{s.count}</strong>
              </div>
              <GraduationCap size={28} />
            </button>
          ))}
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Student Records</h2>
              <p>
                {filtered.length} student{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </p>
            </div>
            <button className="outline" onClick={resetDemo}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>

          <div className="toolbar">
            <div className="search-box">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, enrollment no, roll no, email..."
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="select-wrap">
              <Filter size={16} />
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option>All Years</option>
                {YEARS.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="select-wrap">
              <select
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
              >
                <option>All Branches</option>
                {BRANCHES.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Enrollment No.</th>
                  <th>Roll No.</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.length ? (
                  visible.map((s) => (
                    <tr key={s.id}>
                      <td>
                        <div className="student-cell">
                          <div className="avatar">
                            {s.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <strong>{s.name}</strong>
                            <small>{s.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>{s.enrollmentNo}</td>
                      <td>{s.rollNo}</td>
                      <td>
                        <span className="badge branch">{s.branch}</span>
                      </td>
                      <td>
                        <span className="badge year">{s.year}</span>
                      </td>
                      <td>
                        <div className="contact">
                          <span>{s.phone}</span>
                          <small>{s.email || "No email"}</small>
                        </div>
                      </td>
                      <td>
                        <div className="actions">
                          <button
                            title="View"
                            onClick={() => {
                              setSelected(s);
                              setModal("view");
                            }}
                          >
                            <Eye size={17} />
                          </button>
                          <button title="Edit" onClick={() => openEdit(s)}>
                            <Pencil size={17} />
                          </button>
                          <button
                            title="Delete"
                            className="danger"
                            onClick={() => removeStudent(s.id)}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="empty">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>
              Showing {visible.length ? (page - 1) * perPage + 1 : 0}–
              {Math.min(page * perPage, filtered.length)} of {filtered.length}
            </span>
            <div>
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                <ChevronLeft size={17} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={page === n ? "current" : ""}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {modal && (
        <div
          className="overlay"
          onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="modal">
            <div className="modal-head">
              <div>
                <h2>
                  {modal === "view"
                    ? "Student Profile"
                    : modal === "add"
                      ? "Add Student"
                      : "Edit Student"}
                </h2>
                <p>
                  {modal === "view"
                    ? "Student information"
                    : "Enter student details below."}
                </p>
              </div>
              <button onClick={() => setModal(null)}>
                <X />
              </button>
            </div>

            {modal === "view" ? (
              <div className="profile">
                <div className="profile-top">
                  <div className="profile-avatar">
                    {selected.name.charAt(0)}
                  </div>
                  <div>
                    <h3>{selected.name}</h3>
                    <p>
                      {selected.id} • Enrollment No. {selected.enrollmentNo} • Roll No. {selected.rollNo}
                    </p>
                  </div>
                </div>
                <div className="profile-grid">
                  <Info
                    icon={<BookOpen />}
                    label="Year"
                    value={selected.year}
                  />
                  <Info
                    icon={<GraduationCap />}
                    label="Branch"
                    value={selected.branch}
                  />
                  <Info icon={<Phone />} label="Phone" value={selected.phone} />
                  <Info
                    icon={<Mail />}
                    label="Email"
                    value={selected.email || "Not provided"}
                  />
                  <Info
                    icon={<MapPin />}
                    label="City"
                    value={selected.city || "Not provided"}
                  />
                  <Info
                    icon={<Hash />}
                    label="Enrollment Number"
                    value={selected.enrollmentNo || "Not provided"}
                  />
                  <Info
                    icon={<Hash />}
                    label="Roll Number"
                    value={selected.rollNo}
                  />
                </div>
              </div>
            ) : (
              <form onSubmit={saveStudent}>
                <div className="form-grid">
                  <label>
                    Full Name
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter student name"
                    />
                  </label>
                  <label>
                    Enrollment Number
                    <input
                      name="enrollmentNo"
                      value={form.enrollmentNo}
                      onChange={updateField}
                      placeholder="e.g. ENR2026001"
                    />
                  </label>
                  <label>
                    Roll Number
                    <input
                      name="rollNo"
                      value={form.rollNo}
                      onChange={updateField}
                      placeholder="e.g. 101"
                    />
                  </label>
                  <label>
                    Branch
                    <select
                      name="branch"
                      value={form.branch}
                      onChange={updateField}
                    >
                      {BRANCHES.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Year
                    <select
                      name="year"
                      value={form.year}
                      onChange={updateField}
                    >
                      {YEARS.map((y) => (
                        <option key={y}>{y}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Phone
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      inputMode="numeric"
                      maxLength="10"
                      placeholder="10 digit mobile number"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="student@example.com"
                    />
                  </label>
                  <label className="full">
                    City
                    <input
                      name="city"
                      value={form.city}
                      onChange={updateField}
                      placeholder="Enter city"
                    />
                  </label>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="modal-actions">
                  <button
                    type="button"
                    className="outline"
                    onClick={() => setModal(null)}
                  >
                    Cancel
                  </button>
                  <button className="primary" type="submit">
                    {modal === "add" ? "Add Student" : "Save Changes"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="info">
      <span>{icon}</span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default App;
