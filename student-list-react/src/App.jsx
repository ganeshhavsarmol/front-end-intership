import { useState } from "react";
import "./App.css";

const students = [
  {
    id: 1,
    name: "Aarav Patil",
    rollNo: "101",
    year: "1st Year",
    branch: "CSE",
    marks: 78,
  },
  {
    id: 2,
    name: "Riya Sharma",
    rollNo: "102",
    year: "1st Year",
    branch: "CSE",
    marks: 84,
  },
  {
    id: 3,
    name: "Aditya Jadhav",
    rollNo: "201",
    year: "2nd Year",
    branch: "CSE",
    marks: 81,
  },
  {
    id: 4,
    name: "Sneha More",
    rollNo: "202",
    year: "2nd Year",
    branch: "CSE",
    marks: 89,
  },
  {
    id: 5,
    name: "Rohit Pawar",
    rollNo: "301",
    year: "3rd Year",
    branch: "CSE",
    marks: 91,
  },
  {
    id: 6,
    name: "Priya Deshmukh",
    rollNo: "302",
    year: "3rd Year",
    branch: "CSE",
    marks: 86,
  },
];

function App() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) => {
    const yearMatch = selectedYear === "All" || student.year === selectedYear;

    const searchMatch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.includes(search);

    return yearMatch && searchMatch;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>Student List</h1>
        <p>1st Year • 2nd Year • 3rd Year</p>
      </header>

      <main className="container">
        <div className="controls">
          <input
            type="text"
            placeholder="Search by name or roll no..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="buttons">
            {["All", "1st Year", "2nd Year", "3rd Year"].map((year) => (
              <button
                key={year}
                className={selectedYear === year ? "active" : ""}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="student-count">
          Showing {filteredStudents.length} student
          {filteredStudents.length !== 1 ? "s" : ""}
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Year</th>
                <th>Branch</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>
                      <span className="year">{student.year}</span>
                    </td>
                    <td>{student.branch}</td>
                    <td>{student.marks}%</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
