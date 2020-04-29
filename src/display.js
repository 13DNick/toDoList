import * as $ from "jquery";
import _ from "lodash";

const projectList = document.querySelector("#projectList");
const projectView = document.querySelector("#currentProjectContent");

function displayProjectArray(projectArray){
    projectArray.forEach((project) => {
        projectList.append(formatProjectInProjectList(project));
    });
};
        

function formatProjectInProjectList(project){
    const projectObjectArray = Object.values(project);
    const div = document.createElement("div");
    if(project.details != ""){
        for(let i = 0; i < 3; i++){
            if(i === 0){
                const h3 = document.createElement("h3");
                h3.append(projectObjectArray[i]);
                h3.append(createViewProjectButton(project));
                div.append(h3);
            }else{
                const p = document.createElement("p");
                p.append(projectObjectArray[i]);
                div.append(p);
            }
        }
    }
    return div;
}

function createViewProjectButton(project){
    const button = document.createElement("button");
    button.textContent = "View";
    button.classList = "viewProjectButton";
    button.addEventListener("click", () => {
        console.log(project.title);
        displayProjectInView(project);
    })
    return button;
}

function displayProjectInView(project){
    if(project.title != document.querySelector("#currentProjectHeader").textContent){
        updateToDos(project);
    };
};
        
   

function displayToDos(project) {
        const div = document.createElement("div");
        let i = "0";
        
        project.list.forEach((toDo) => {
            const p = document.createElement("p");
            const delButton = document.createElement("button")
            delButton.id = i.toString();
            
            

            //figure out remove button
            delButton.addEventListener("click", () => {
                //const array = project.list.filter(e => e !== toDo);
                //project.updateArray(delButton.id);
                //console.log(project.list.toString());
                project.updateArray(delButton.id);
                displayProjectInView(project);
            });
            
            delButton.textContent = "Remove";
            p.append(toDo, delButton);
            div.append(p);
            i++; 
        });
        projectView.append(div);
};
    
function updateToDos(project){
    const currentProjectContent = $("#currentProjectContent");
        currentProjectContent.empty();
        const title = document.querySelector("#currentProjectHeader");
        title.textContent = project.title;
        displayToDos(project);
;}
        
        
        
        
    
            

export {displayProjectArray};