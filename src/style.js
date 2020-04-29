import * as $ from "jquery";


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






function styleAllButtons(){
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
        button.style.cursor = "pointer";
        button.style.float = "right";
    });
};

export {styleAllButtons};


