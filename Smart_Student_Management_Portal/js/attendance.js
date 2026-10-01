document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("attendanceTable").innerHTML=attendance.map(x=>{const p=x.present/x.total*100;return `<tr><td>${x.subject}</td><td>${x.present}</td><td>${x.total}</td><td>${p.toFixed(1)}%</td><td class="${p>=75?"status-good":"status-low"}">${p>=75?"Good":"Low"}</td></tr>`}).join("");
});