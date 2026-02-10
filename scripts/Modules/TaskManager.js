import { Task } from "./Task.js";

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
        // this.taskList.push(task);
        alert("Task Added");
    }

    modifyTask(Task)
    {

    }

    deleteTask(Task)
    {

    }
}


