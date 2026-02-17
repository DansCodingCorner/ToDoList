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
        this.taskList.push(task);
    }

    modifyTask(Task)
    {

    }

    deleteTasks()
    {
        //Get all the lements with the clicked class
        let selectedTasks = document.getElementsByClassName('clicked'); 
        for(let taskElementIndex = 0 ; taskElementIndex < selectedTasks.length ; taskElementIndex ++)
        {
            let selectedTaskId = selectedTasks[taskElementIndex].id;

            for(let taskIDIndex = 0 ; taskIDIndex < this.taskList.length ; taskIDIndex ++)
            {
                if(this.taskList[taskIDIndex].id == selectedTaskId)
                {
                    alert("deleted selected task");
                }
            }
        }
    }
}


