 import { Task } from "./Task.js";
 import {uiManager} from"../main.js";

export class TaskManager
{
    taskList = [];
    instance;

    constructor()
    {
        this.loadTaskList();
    }

    static createTaskManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new TaskManager();
        }
        return this.instance;
    }
    
    loadTaskList()
    {
    }

    addTaskToList(task)
    {
        this.taskList.push(task);
    }

    removeTaskFromTaskList(taskID)
    {
        for(let taskIndex = 0 ; taskIndex < this.taskList.length ; taskIndex ++)
        {
            if(this.taskList[taskIndex].id == taskID)
            {
                this.taskList.splice(taskIndex, 1);
            }
        }
    }

    modifyTask(Task)
    {

    }

    deleteTasks()
    {

    const selectedTasks = document.getElementsByClassName('clicked');

    const idsToDelete = Array.from(selectedTasks).map(el => el.id);

    const tm = TaskManager.createTaskManager();

    for (const taskId of idsToDelete)
    {
        tm.removeTaskFromTaskList(taskId);

        uiManager.removeTaskContainer(taskId);
    }


    for (const el of selectedTasks) 
    {
        el.classList.remove('clicked');
    }
    
    }
}


