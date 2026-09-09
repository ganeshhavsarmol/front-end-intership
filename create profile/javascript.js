let name = document.querySelector("#name")
let age = document.querySelector("#age")
let profession = document.querySelector("#profession")
let city = document.querySelector("#city")
let profileimage = document.querySelector("#profileimage")
let bio = document.querySelector("#bio")
let profilesCount = 0

document.querySelector("#submit").addEventListener("click",(e)=>{
    e.preventDefault()

let card = document.querySelector("#card");
let cardtop = document.createElement("div");
cardtop.classList.add("card-top");

let image = document.createElement("img");
image.src = profileimage.value;
image.alt = "profile image"

cardtop.append(image);

let h3 = document.createElement("h3")
h3.innerText = name.value;
cardtop.append(h3);

let professionSpan = document.createElement("span");
professionSpan.classList.add("card-profession");
professionSpan.innerText = profession.value;
cardtop.append(professionSpan);

let cardInfoDiv = document.createElement("div");
cardInfoDiv.classList.add("class-info-div");

let paragraphAge = document.createElement("p");
paragraphAge.classList.add("info");

let  spanparagraphAge = document.createElement("span");
spanparagraphAge.innerText = "Age: ";
paragraphAge.append(spanparagraphAge);

let spanValueParaAge = document.createElement("span");
spanValueParaAge.innerText = age.value;
paragraphAge.append(spanValueParaAge);

cardInfoDiv.append(paragraphAge);




//profession
let paragraphprofession = document.createElement("p");
paragraphprofession.classList.add("info");

let  spanparagraphprofession = document.createElement("span");
spanparagraphprofession.innerText = "Profession: ";
paragraphprofession.append(spanparagraphprofession);

let spanValueParaprofession = document.createElement("span");
spanValueParaprofession.innerText = profession.value;
paragraphprofession.append(spanValueParaprofession);

cardInfoDiv.append(paragraphprofession);



//city
let paragraphcity = document.createElement("p");
paragraphcity.classList.add("info");

let  spanparagraphcity = document.createElement("span");
spanparagraphcity.innerText = "City: ";
paragraphcity.append(spanparagraphcity);

let spanValueParacity = document.createElement("span");
spanValueParacity.innerText = city.value;
paragraphcity.append(spanValueParacity);

cardInfoDiv.append(paragraphcity);




//bio
let paragraphbio = document.createElement("p");
paragraphbio.classList.add("info");

let  spanparagraphbio = document.createElement("span");
spanparagraphbio.innerText = "Bio: ";
paragraphbio.append(spanparagraphbio);

let spanValueParabio = document.createElement("span");
spanValueParabio.innerText = bio.value;
paragraphbio.append(spanValueParabio);

cardInfoDiv.append(paragraphbio);

cardtop.append(cardInfoDiv);

let deletebtn = document.createElement("button");
deletebtn.classList.add("btn-4");
deletebtn.innerText = "Delete";

deletebtn.addEventListener("click",()=>{
    cardtop.remove();
    profilesCount--
let profileNo = document.querySelector("#profileNo");
profileNo.innerText = profilesCount
})

cardtop.append(deletebtn);


card.append(cardtop);
profilesCount++;

let profileNo = document.querySelector("#profileNo");
profileNo.innerText = profilesCount

document.querySelector("#btn-3").addEventListener("click",()=>{
    let cards = document.querySelectorAll(".card-top");

    cards.forEach((item)=>item.remove())
    profilesCount = 0
    let profileNo = document.querySelector("#profileNo");
profileNo.innerText = profilesCount
})
})