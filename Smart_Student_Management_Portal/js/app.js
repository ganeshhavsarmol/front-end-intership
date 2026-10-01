const defaultProfile={name:"Rohit Student",roll:"42",email:"student@example.com",phone:"9876543210",college:"ABC Polytechnic College",semester:"6th Semester",address:"Pune, Maharashtra"};
const attendance=[
 {subject:"Computer Networks",present:42,total:48},
 {subject:"Software Engineering",present:44,total:50},
 {subject:"Operating System",present:39,total:45},
 {subject:"Java Programming",present:46,total:50},
 {subject:"DBMS",present:43,total:48}
];
const marks=[
 {subject:"Computer Networks",internal:22,external:62},
 {subject:"Software Engineering",internal:24,external:65},
 {subject:"Operating System",internal:21,external:60},
 {subject:"Java Programming",internal:25,external:68},
 {subject:"DBMS",internal:23,external:64}
];
const notices=[
 {title:"Final Year Project Submission",date:"30 September 2026",text:"Students are requested to complete and submit their final-year project documentation as per the department schedule."},
 {title:"Internal Examination Notice",date:"25 September 2026",text:"Internal examination timetable has been published. Students should check the academic schedule."},
 {title:"College ID Card",date:"20 September 2026",text:"All students should carry their valid college ID card on campus."},
 {title:"Project Review",date:"15 September 2026",text:"The next project review will include project demonstration and documentation checking."}
];
function getProfile(){return JSON.parse(localStorage.getItem("studentProfile")||"null")||defaultProfile}
function saveProfile(p){localStorage.setItem("studentProfile",JSON.stringify(p))}
function logout(){localStorage.removeItem("loggedIn");location.href="index.html"}
function toggleSidebar(){document.getElementById("sidebar")?.classList.toggle("open")}
function requireLogin(){if(localStorage.getItem("loggedIn")!=="true" && !location.pathname.endsWith("index.html")) location.href="index.html"}
function setNavName(){document.querySelectorAll("#navName").forEach(e=>e.textContent=getProfile().name)}
function grade(p){if(p>=80)return"A+";if(p>=70)return"A";if(p>=60)return"B+";if(p>=50)return"B";if(p>=40)return"C";return"F"}
document.addEventListener("DOMContentLoaded",()=>{requireLogin();setNavName();const d=document.getElementById("today");if(d)d.textContent=new Date().toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long",year:"numeric"});});
document.getElementById("loginForm")?.addEventListener("submit",e=>{e.preventDefault();localStorage.setItem("loggedIn","true");location.href="dashboard.html"});
