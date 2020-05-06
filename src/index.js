import * as $ from "jquery";
import {getProjectFromView, passProject} from "./logic";
import {displayProjectArray, displayProjectInView} from  "./display";
import {styleAllButtons} from "./style";


Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key));
};


let projectArray = [];
let tempArray = [];


const toDoFactory = (title, due) => {
    let status = false;

    const complete = () => {
        status = true;
    };

    const toString = () => {
        return title + " " + due;
    };
    
    return {title, status, due, toString};
};

const projectFactory = (title, details, due) => {
    const list = [];
    
    const addToDo = (toDo) => {
        list.push(toDo);
    };
    
    const toString = () => {
       return title + " " + due;
    };

    const updateArray = (index, project) => {
        project.list.splice(index,1);
    };
    
    return {title, details, due, toString, addToDo, list, updateArray};
};

const populate = () => {
    const quickList = projectFactory("Quick List", "add ur shit", "ASAP");
    const toDo1 = toDoFactory("wash dishes", "2020-05-19");
    const toDo2 = toDoFactory("choke the chicken", "2020-05-19");
    const toDo3 = toDoFactory("wash car", "2020-05-19");
    quickList.addToDo(toDo1);
    quickList.addToDo(toDo2);
    quickList.addToDo(toDo3);
    projectArray.push(quickList, quickList2);
    passProject(quickList);
};

const rebuild = (projectArray) => {
    projectArray.forEach((project) => {
        const newProject = projectFactory(project.title, project.details, project.due);
        project.list.forEach((toDo) => {
            const newToDo = toDoFactory(toDo.title, toDo.due);
            newProject.addToDo(newToDo);
        });
        tempArray.push(newProject);
    });
    projectArray = tempArray;
    return projectArray;
};

const startPage = (() => {
    document.querySelector("#clearStorage").addEventListener("click", () => {
        localStorage.clear();
    });

    
    
    if(localStorage.projectArray){
        console.log("loaded from save");
        projectArray = localStorage.getObj("projectArray");
        projectArray = rebuild(projectArray);
        displayProjectArray(projectArray);
        displayProjectInView(projectArray[0], projectArray);
        passProject(projectArray[0]);
        styleAllButtons();
    } else{
        console.log("fresh Start");
        populate();
        displayProjectArray(projectArray);
        displayProjectInView(projectArray[0], projectArray);
        styleAllButtons();
    };
    
    
})();


export{toDoFactory, projectFactory, projectArray, displayProjectArray}