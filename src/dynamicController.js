import * as $ from "jquery";
import {styleToDoWindowElements, styleNewProjectWindowElements} from "./style";
import {updateToDos} from "./display";

const dynamic = $("#dynamic");
const leftSideJ = $("#leftSide");
const rightSideJ = $("#rightSide");
const dynamicDiv = document.querySelector("#dynamic");
const rightSide = document.querySelector("#rightSide");
const leftSide = document.querySelector("#leftSide");


function createNewToDoWindow() {
    createToDoWindowLeft();
    createToDoWindowRight();
    styleToDoWindowElements();
};

function createToDoWindowLeft() {
    const titleInput = document.createElement("input");
    titleInput.id = "toDoTitleInput";
    titleInput.placeholder = "What do you need to do?";
    const dueDateInput = document.createElement("input");
    dueDateInput.id = "toDoDateInput";
    dueDateInput.setAttribute("type", "date");
    leftSide.append(titleInput, dueDateInput);
};

function createToDoWindowRight() {
    const addToDoButton = document.createElement("button");
    addToDoButton.id = "addToDoButton";
    addToDoButton.textContent = "Add to list";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    addEventListenerToCancel(cancelButton);
    rightSide.append(addToDoButton, cancelButton);
};

function addEventListenerToCancel(cancelButton) {
    cancelButton.addEventListener("click", () => {
        leftSideJ.empty();
        rightSideJ.empty();
        dynamic.hide();
    });
};

function createNewProjectWindow() {
    createProjectWindowLeft();
    createProjectWindowRight();
    styleNewProjectWindowElements();
};

function createProjectWindowLeft() {
    const titleInput = document.createElement("input");
    titleInput.id = "newProjectTitleInput";
    titleInput.placeholder = "Project Title...";
    const detailsInput = document.createElement("textarea");
    detailsInput.id = "newProjectDetailsInput";
    detailsInput.placeholder = "details...";
    const dueDateInput = document.createElement("input");
    dueDateInput.id = "newProjectDateInput";
    dueDateInput.setAttribute("type", "date");
    leftSide.append(titleInput, detailsInput, dueDateInput);
};

function createProjectWindowRight() {
    const addToDoButton = document.createElement("button");
    addToDoButton.id = "addProjectButton";
    addToDoButton.textContent = "Add Project";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    addEventListenerToCancel(cancelButton);
    rightSide.append(addToDoButton, cancelButton);
};














export {createNewToDoWindow, updateToDos, createNewProjectWindow};
