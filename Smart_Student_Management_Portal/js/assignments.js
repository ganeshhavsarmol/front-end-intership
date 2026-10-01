let assignments=JSON.parse(localStorage.getItem('assignments')||'null')||[
{name:'Network Design Report',subject:'Computer Networks',due:'10 Oct 2026',status:'Pending'},
{name:'SE Case Study',subject:'Software Engineering',due:'14 Oct 2026',status:'Pending'},
{name:'Portfolio Website',subject:'Web Development',due:'18 Oct 2026',status:'Submitted'}];
function renderAssignments(){document.getElementById('assignmentTable').innerHTML=assignments.map((a,i)=>`<tr><td>${a.name}</td><td>${a.subject}</td><td>${a.due}</td><td><span class="badge">${a.status}</span></td><td><button class="btn secondary" onclick="toggleAssignment(${i})">${a.status==='Submitted'?'Mark Pending':'Mark Submitted'}</button></td></tr>`).join('')}
function toggleAssignment(i){assignments[i].status=assignments[i].status==='Submitted'?'Pending':'Submitted';localStorage.setItem('assignments',JSON.stringify(assignments));renderAssignments()}
function addAssignment(){const name=prompt('Assignment name:');if(!name)return;const subject=prompt('Subject:')||'New Subject';const due=prompt('Due date:')||'Not set';assignments.push({name,subject,due,status:'Pending'});localStorage.setItem('assignments',JSON.stringify(assignments));renderAssignments()}
renderAssignments();
