import * as $ from "jquery";
import {toDoFactory,
        projectFactory,
        projectArray} from "./index";
import {styleDynamicDiv} from "./style";
import {createNewToDoWindow} from "./dynamicController";

let currentProject = "";
const dynamic = $("#dynamic");        

function passProject(project){
        currentProject = project;
};

function getProjectFromView() {
        return currentProject.title;
};



//new ToDO button clicked
const newToDoButton = document.querySelector("#newToDo");
newToDoButton.addEventListener("click", () => {
        dynamic.show();
        projectArray.forEach((project) => {
                if(project.title === getProjectFromView()){
                        //create newToDo object
                        createNewToDoWindow();
                        styleDynamicDiv();
                };     
        });
});





export {passProject};






