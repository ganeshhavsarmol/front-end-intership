document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("noticeList").innerHTML=notices.map(n=>`<article class="notice-large"><h3>📢 ${n.title}</h3><small>${n.date}</small><p>${n.text}</p></article>`).join("");
});