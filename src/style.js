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

//dynamic div
const dynamic = $("#dynamic");
dynamic.hide();


function styleDynamicDiv(){
    const dynamicDiv = document.querySelector("#dynamic");
    dynamicDiv.style.display = "grid";
    dynamicDiv.style.gridTemplateColumns = "60% 40%";
}



function styleAllButtons(){
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
        button.style.cursor = "pointer";
    });
};

export {styleAllButtons, styleDynamicDiv};


