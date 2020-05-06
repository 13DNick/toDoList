import * as $ from "jquery";
import _ from "lodash";
import  "./style";
import {passProject} from "./logic";

const projectList = document.querySelector("#projectList");
const projectListJ = $("#projectList");
const projectView = document.querySelector("#currentProjectContent");
const currentProjectContentJ = $("#currentProjectContent");


const save = (array) => {
    
    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj));
    };
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key));
    };
    
    if(localStorage.projectArray){
            localStorage.clear();
            localStorage.setObj("projectArray", array);
            console.log("overwrite");
    } else{
            localStorage.setObj("projectArray", array);
            console.log("new save");
    };
};




function displayProjectArray(projectArray){
    projectListJ.empty();
    projectArray.forEach((project) => {
        projectList.append(formatProjectInProjectList(project, projectArray));
    });
    save(projectArray);
    console.log("right side save successful");
};
        

function formatProjectInProjectList(project, projectArray){
    const projectObjectArray = Object.values(project);
    const div = document.createElement("div");
    const projectInfoDiv = document.createElement("div");
    const buttonDiv = document.createElement("div");
    if(project.details != ""){
        for(let i = 0; i < 3; i++){
            if(i === 0){
                const h3 = document.createElement("h3");
                h3.append(projectObjectArray[i]);
                projectInfoDiv.append(h3);
            }else{
                const p = document.createElement("p");
                p.append(projectObjectArray[i]);
                projectInfoDiv.append(p);
            }
        }
        const button = document.createElement("button");
        button.textContent = "Remove";

        //remove project button click
        button.addEventListener("click", () => {
            //update Project array and refresh display
            _.pull(projectArray, project);
            displayProjectArray(projectArray);

            //if project is currently displayed in view, clear view & update header
            if(project.title === document.querySelector("#currentProjectHeader").textContent){
                currentProjectContentJ.empty();
                document.querySelector("#currentProjectHeader").textContent = "Choose Project";
                if(_.isEmpty(projectArray)){
                    document.querySelector("#currentProjectHeader").textContent = "No Projects to view";
                };
            };
        });


        buttonDiv.style.border = "solid";
        buttonDiv.append(createViewProjectButton(project, projectArray), button);
    }
    div.style.display = "grid";
    div.style.gridTemplateColumns = "75% 25%";
    div.append(projectInfoDiv, buttonDiv);
    
    return div;
};

function createViewProjectButton(project, projectArray){
    const button = document.createElement("button");
    button.textContent = "View";
    button.classList = "viewProjectButton";
    button.style.marginTop = "15px";
    button.style.marginBottom = "20px";
    button.addEventListener("click", () => {
        passProject(project);
        displayProjectInView(project, projectArray);
    })
    return button;
};

function displayProjectInView(project, projectArray){
    if(project.title != document.querySelector("#currentProjectHeader").textContent){
        updateToDos(project, projectArray);
    };
};
        
   

function displayToDos(project, projectArray) {
        const div = document.createElement("div");
        let i = "0";
        

        project.list.forEach((toDo) => {
            const p = document.createElement("p");
            const delButton = document.createElement("button")
            delButton.id = i.toString();
            
            

            
            delButton.addEventListener("click", () => {
                project.updateArray(delButton.id, project);
                updateToDos(project, projectArray);
            });
            
            delButton.textContent = "Remove";
            p.append(toDo, delButton);
            div.append(p);
            i++; 
        });
        projectView.append(div);
};
    
function updateToDos(project, projectArray){
        const currentProjectContent = $("#currentProjectContent");
        currentProjectContent.empty();
        const title = document.querySelector("#currentProjectHeader");
        title.textContent = project.title;
        displayToDos(project, projectArray);
        save(projectArray);
};
        
        
        
        
    
            

export {displayProjectArray, updateToDos, displayProjectInView};