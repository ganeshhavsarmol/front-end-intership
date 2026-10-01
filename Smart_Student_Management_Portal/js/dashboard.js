document.addEventListener("DOMContentLoaded",()=>{
 const a=attendance.map(x=>x.present/x.total*100), avg=a.reduce((s,x)=>s+x,0)/a.length;
 document.getElementById("welcomeName").textContent=getProfile().name.split(" ")[0];
 document.getElementById("attendanceStat").textContent=avg.toFixed(1)+"%";
 document.getElementById("marksStat").textContent=(marks.reduce((s,x)=>s+(x.internal+x.external),0)/(marks.length*100)*100).toFixed(1)+"%";
 document.getElementById("subjectStat").textContent=marks.length;
 document.getElementById("noticeStat").textContent=notices.length;
 document.getElementById("attendancePreview").innerHTML=attendance.slice(0,4).map(x=>{let p=x.present/x.total*100;return `<div class="mini-row"><span>${x.subject.split(" ")[0]}</span><div class="bar"><i style="width:${p}%"></i></div><b>${p.toFixed(0)}%</b></div>`}).join("");
 document.getElementById("noticePreview").innerHTML=notices.slice(0,3).map(n=>`<div class="notice-item"><strong>${n.title}</strong><small>${n.date}</small></div>`).join("");
});