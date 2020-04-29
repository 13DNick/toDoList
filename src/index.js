import * as $ from "jquery";
import "./logic";
import {displayProjectArray} from  "./display";
import {styleAllButtons} from "./style";



const projectArray = [];


const toDoFactory = (title, details, due) => {
    
    
    return {title, details, due};
};

const projectFactory = (title, details, due) => {
    const list = [];
    
    const addToDo = (toDo) => {
        list.push(toDo);
    };
    
    const toString = () => {
       return title + " " + details + " " + due;
    };

    //here
    const updateArray = (index) => {
        console.log(index);
        list.splice(index,1);
        console.log(list);
    };
    
    return {title, details, due, toString, addToDo, list, updateArray};
};

const quickList = projectFactory("Quick List", "add ur shit", "tomorrow");
quickList.list = ["make money", "fuck bitches"];
const anotha1 = projectFactory("test", "add it", "ASAP BITCH");
projectArray.push(quickList);
projectArray.push(anotha1);
displayProjectArray(projectArray);
styleAllButtons();


export{toDoFactory, projectFactory}