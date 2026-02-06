import { Task } from "./Task.js";
import {taskManager} from "../main.js";

export class TaskManager

{
    taskList = [];

    constructor()
    {
        this.loadTaskList()

    }

    loadTaskList()
    {
    }


    addTaskToList(task)
    {
        this.taskList.push(task);
        alert(this.taskList.length);
    }

    modifyTask(Task)
    {

    }

    deleteTask(Task)
    {

    }
}

