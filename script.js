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

/* Load Projects */
fetch("./projects.json")
.then(res=>{
    if(!res.ok){
        throw new Error("Projects file not found");
    }
    return res.json();
})
.then(data=>{
    if(!Array.isArray(data)){
        throw new Error("JSON format incorrect");
    }

    const container=document.getElementById("projectsContainer");
    container.innerHTML="";

    data.forEach(project=>{
        const div=document.createElement("div");
        div.className="project";
        div.textContent=project;
        container.appendChild(div);
    });
})
.catch(err=>{
    console.log("Project loading error:",err);
});
