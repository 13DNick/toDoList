import * as $ from "jquery";
import "./logic";
import {displayProjectArray} from  "./display";
import {styleAllButtons} from "./style";



const projectArray = [];


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

const quickList = projectFactory("Quick List", "add ur shit", "tomorrow");
//quickList.list = ["make money", "fuck bitches"];
const toDo1 = toDoFactory("wash dishes", "2020-05-19");
const toDo2 = toDoFactory("wash toilet", "2020-05-19");
const toDo3 = toDoFactory("wash car", "2020-05-19");
quickList.addToDo(toDo1);
quickList.addToDo(toDo2);
quickList.addToDo(toDo3);

const anotha1 = projectFactory("test", "add it", "ASAP BITCH");
projectArray.push(quickList);
projectArray.push(anotha1);
displayProjectArray(projectArray);
styleAllButtons();


export{toDoFactory, projectFactory, projectArray, displayProjectArray}