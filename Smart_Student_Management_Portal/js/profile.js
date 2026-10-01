document.addEventListener("DOMContentLoaded",()=>{
 const p=getProfile();
 const photo=document.getElementById("profilePhoto");
 const placeholder=document.getElementById("photoPlaceholder");
 const savedPhoto=localStorage.getItem("studentProfilePhoto");
 if(savedPhoto){photo.src=savedPhoto;}
 document.getElementById("photoInput")?.addEventListener("change",function(){
   const file=this.files[0];
   if(!file)return;
   const reader=new FileReader();
   reader.onload=()=>{localStorage.setItem("studentProfilePhoto",reader.result);photo.src=reader.result;photo.classList.remove("hide");placeholder.style.display="none";};
   reader.readAsDataURL(file);
 });
 document.getElementById("removePhoto")?.addEventListener("click",()=>{
   localStorage.removeItem("studentProfilePhoto");
   photo.src="images/profile.jpg";
 });
 ["name","roll","profileEmail","phone","college","semester","address"].forEach(id=>document.getElementById(id).value=p[id==="profileEmail"?"email":id]||"");
 document.getElementById("profileHeading").textContent=p.name;
 document.getElementById("profileForm").addEventListener("submit",e=>{
  e.preventDefault();
  const n={name:name.value,roll:roll.value,email:profileEmail.value,phone:phone.value,college:college.value,semester:semester.value,address:address.value};
  saveProfile(n);document.getElementById("profileHeading").textContent=n.name;setNavName();
  document.getElementById("saveMsg").textContent="Profile saved successfully!";
  setTimeout(()=>document.getElementById("saveMsg").textContent="",2500);
 });
});
