import * as $ from "jquery";
import * as dateFns from "date-fns";
import {toDoFactory,
        projectFactory,
        projectArray,
        displayProjectArray} from "./index";
import {styleDynamicDiv} from "./style";
import {createNewToDoWindow, updateToDos, createNewProjectWindow} from "./dynamicController";

let currentProject = "Quick List";
const dynamic = $("#dynamic");
const rightSideJ = $("#rightSide");
const leftSideJ = $("#leftSide");        





function passProject(project){
        currentProject = project;
};

function getProjectFromView() {
        return currentProject.title;
};



//new ToDO button clicked
const newToDoButton = document.querySelector("#newToDo");
newToDoButton.addEventListener("click", () => {
        projectArray.forEach((project) => {
                if(project.title === getProjectFromView()){
                        rightSideJ.empty();
                        leftSideJ.empty();
                        dynamic.show();
                        createNewToDoWindow();
                        styleDynamicDiv();
                        addToDoButtonListener(project);
                };     
        });
});

function addToDoButtonListener(project) {
        const addToDoButton = document.querySelector("#addToDoButton");
        addToDoButton.addEventListener("click", () => {
                checkToDoInputs(project);
        });
};

function checkToDoInputs(project) {
        const titleInput = document.querySelector("#toDoTitleInput");
        const dateInput = document.querySelector("#toDoDateInput");

        if(titleInput.value === ""){
                alert("Enter something you need to do...");
        } else if(!(dateFns.isValid(dateFns.parseISO(dateInput.value)))){
                alert("Enter a due date...");
        } else {
                const toDo = toDoFactory(titleInput.value, dateInput.value);
                project.addToDo(toDo);
                updateToDos(project);
                dynamic.hide();
                alert("todo added");
        };
};

//new project button clicked
const newProjectButton = document.querySelector("#newProject");
newProjectButton.addEventListener("click", () => {
        rightSideJ.empty();
        leftSideJ.empty();
        dynamic.show();
        createNewProjectWindow();
        styleDynamicDiv();
        addProjectButtonListener();
});

function addProjectButtonListener() {
        const addProjectButton = document.querySelector("#addProjectButton");
        addProjectButton.addEventListener("click", () => {
                checkProjectInputs();
        });
};

function checkProjectInputs() {
        const titleInput = document.querySelector("#newProjectTitleInput");
        const detailsInput = document.querySelector("#newProjectDetailsInput");
        const dateInput = document.querySelector("#newProjectDateInput");

        if(titleInput.value === ""){
                alert("Project needs a title...");
        }else if(detailsInput.value === ""){
                alert("Add some details silly!")
        }else if(!(dateFns.isValid(dateFns.parseISO(dateInput.value)))){
                alert("I've had enough of your shit. Add a due date.");
        } else {
                const project = projectFactory(titleInput.value, detailsInput.value, dateInput.value);
                projectArray.push(project);
                displayProjectArray(projectArray);
                dynamic.hide();
                alert("New Project created!");
        };
};





export {passProject, getProjectFromView};






