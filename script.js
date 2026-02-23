function openModal(){
document.getElementById("contactModal").style.display="flex";
}

function closeModal(){
document.getElementById("contactModal").style.display="none";
}

/* Load Skills */
fetch("skills.json")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("skills-container");
data.skills.forEach(skill=>{
container.innerHTML+=`<div class="card">${skill}</div>`;
});
});

/* Load Projects */
fetch("project.json")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("projects-container");
data.projects.forEach(project=>{
container.innerHTML+=`
<div class="card">
<h3>${project.name}</h3>
<p>${project.description}</p>
<p><strong>Technologies:</strong> ${project.tech}</p>
</div>`;
});
});
