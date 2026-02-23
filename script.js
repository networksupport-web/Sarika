const skillsContainer = document.getElementById("skills-container");

skillsContainer.innerHTML = ""; // Clear first

const skills = [
"HTML",
"CSS",
"JavaScript",
"Responsive Design"
];

skills.forEach(skill => {
let div = document.createElement("div");
div.classList.add("card");
div.innerHTML = `<h3>${skill}</h3>`;
skillsContainer.appendChild(div);
});
