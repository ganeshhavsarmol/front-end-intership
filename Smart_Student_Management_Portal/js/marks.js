document.addEventListener("DOMContentLoaded",()=>{
 const totals=marks.map(x=>x.internal+x.external), avg=totals.reduce((a,b)=>a+b,0)/totals.length;
 document.getElementById("average").textContent=avg.toFixed(1)+"%";
 document.getElementById("highest").textContent=Math.max(...totals)+"/100";
 document.getElementById("count").textContent=marks.length;
 document.getElementById("marksTable").innerHTML=marks.map(x=>{const t=x.internal+x.external;return `<tr><td>${x.subject}</td><td>${x.internal}/30</td><td>${x.external}/70</td><td><b>${t}/100</b></td><td>${t}%</td><td><span class="badge">${grade(t)}</span></td></tr>`}).join("");
});