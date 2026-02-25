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
let currentText=texts[count];
let letter=currentText.slice(0,++index);
document.getElementById("typing").textContent=letter;

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
fetch("skills.json")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("skillsContainer");
data.forEach(skill=>{
container.innerHTML+=`<div class="skill">${skill}</div>`;
});
});

/* Load Projects */
fetch("projects.json")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("projectsContainer");
data.forEach(project=>{
container.innerHTML+=`<div class="project">${project}</div>`;
});
});
