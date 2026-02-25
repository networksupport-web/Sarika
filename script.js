function showSection(id){
document.querySelectorAll('.section').forEach(sec=>{
sec.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}

/* Typing Effect */
const texts=["Web Developer","UI Designer","Creative Coder"];
let count=0;
let index=0;

(function type(){
let typingElement=document.getElementById("typing");
if(!typingElement) return;

let currentText=texts[count];
let letter=currentText.slice(0,++index);
typingElement.textContent=letter;

if(letter.length===currentText.length){
count++;
index=0;
if(count===texts.length){count=0;}
setTimeout(type,1000);
}else{
setTimeout(type,100);
}
})();

/* Success Message */
function showMessage(e){
e.preventDefault();
document.getElementById("successMsg").style.display="block";
}

/* Load Skills */
fetch("./skills.json")
.then(res=>{
if(!res.ok) throw new Error("Skills JSON not found");
return res.json();
})
.then(data=>{
if(!Array.isArray(data)) throw new Error("Skills JSON format wrong");

let container=document.getElementById("skillsContainer");
container.innerHTML="";

data.forEach(skill=>{
container.innerHTML+=`<div class="skill">${skill}</div>`;
});
})
.catch(err=>console.error(err));

/* Load Projects */
fetch("./projects.json")
.then(res=>{
if(!res.ok) throw new Error("Projects JSON not found");
return res.json();
})
.then(data=>{
if(!Array.isArray(data)) throw new Error("Projects JSON format wrong");

let container=document.getElementById("projectsContainer");
container.innerHTML="";

data.forEach(project=>{
container.innerHTML+=`<div class="project">${project}</div>`;
});
})
.catch(err=>console.error(err));
