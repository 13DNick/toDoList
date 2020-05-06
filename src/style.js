import * as $ from "jquery";


//title
const pageTitle = document.querySelector("#pageTitle");
pageTitle.style.textAlign = "center";
pageTitle.style.backgroundColor = "#ccffff";


//split header divs
const headers = document.querySelector("#headers");
headers.style.display = "grid";
headers.style.gridTemplateColumns = "50% 50%";

//make two main displays
const contentDiv = document.querySelector('#content');
contentDiv.style.display = "grid";
contentDiv.style.gridTemplateColumns = "50% 50%";


//format current project header
const currentProjectHeaderDiv = document.querySelector("#currentProjectHeaderDiv");
currentProjectHeaderDiv.style.display = "grid";
currentProjectHeaderDiv.style.gridTemplateColumns = "75% 25%"
const newToDoButton = document.querySelector("#newToDo");
newToDoButton.style.marginRight = "20px";
newToDoButton.style.marginTop = "25px";
newToDoButton.style.height = "50px";

//dynamic div
const dynamic = $("#dynamic");
dynamic.hide();


function styleDynamicDiv(){
    const dynamicDiv = document.querySelector("#dynamic");
    const leftSide = document.querySelector("#leftSide");
    const rightSide = document.querySelector("#rightSide");
    leftSide.style.border = 'solid';

    dynamicDiv.style.display = "grid";
    dynamicDiv.style.gridTemplateColumns = "60% 40%";
};

function styleToDoWindowElements(){
    const titleInput = document.querySelector("#toDoTitleInput");
    const dateInput = document.querySelector("#toDoDateInput");
    dateInput.style.float = "left";
    titleInput.style.width = "95%";
};

function styleNewProjectWindowElements() {
    const titleInput = document.querySelector("#newProjectTitleInput");
    const detailsInput = document.querySelector("#newProjectDetailsInput");
    const dateInput = document.querySelector("#newProjectDateInput");
    detailsInput.style.float = "left";
    detailsInput.style.width = "98%";
    titleInput.style.width = "95%";
};


function styleAllButtons(){
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
        button.style.cursor = "pointer";
    });
};

export {styleAllButtons, styleDynamicDiv, 
        styleToDoWindowElements, styleNewProjectWindowElements};


