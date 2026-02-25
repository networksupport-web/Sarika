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

/* PROJECTS DIRECT ADD */
document.addEventListener("DOMContentLoaded", function(){

    const projects = [
        "Portfolio Website (HTML, CSS)",
        "Simple Calculator (JavaScript)",
        "To-Do List App",
        "Login Form UI",
        "Landing Page Design",
        "Responsive Navbar",
        "Image Gallery",
        "Weather App",
        "Basic Blog Website",
        "Business Website UI"
    ];

    const container = document.getElementById("projectsContainer");

    projects.forEach(project=>{
        const div = document.createElement("div");
        div.className = "project";
        div.textContent = project;
        container.appendChild(div);
    });

});
