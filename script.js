// ===== SKILLS DATA =====
const skills = [
"HTML",
"CSS",
"JavaScript",
"Responsive Design",
"Bootstrap",
"Git & GitHub"
];

// ===== PROJECT DATA =====
const projects = [
{
title: "Portfolio Website",
description: "Responsive personal portfolio website using HTML, CSS and JavaScript."
},
{
title: "Modal Popup Form",
description: "Contact form popup using JavaScript and CSS."
},
{
title: "College Mini Project",
description: "Web Designing academic project for FYIT."
}
];

// ===== LOAD SKILLS =====
const skillsContainer = document.getElementById("skills-container");

skillsContainer.innerHTML = "";

skills.forEach(skill => {
const div = document.createElement("div");
div.classList.add("card");
div.innerHTML = `<h3>${skill}</h3>`;
skillsContainer.appendChild(div);
});

// ===== LOAD PROJECTS =====
const projectsContainer = document.getElementById("projects-container");

projectsContainer.innerHTML = "";

projects.forEach(project => {
const div = document.createElement("div");
div.classList.add("card");
div.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
`;
projectsContainer.appendChild(div);
});

// ===== MODAL FUNCTION =====
function openModal() {
document.getElementById("contactModal").style.display = "flex";
}

function closeModal() {
document.getElementById("contactModal").style.display = "none";
}
