import { Task } from "./Task.js";

export class TaskManager

{
    taskList;
    instance;


    constructor()
    {
        this.loadTaskList()

    }

    loadTaskList()
    {
    }

    createTaskManager()
    {
        if(taskManager === undefined || taskManager === null)
        {
        const instance = new this.constructor(taskManager);
        }
        return instance;
    }

    addTask(name, description, dueDate, priority)
    {
        Task.createTask(name, description, dueDate, priority);
    }

    modifyTask(Task)
    {

    }

    deleteTask(Task)
    {

    }
}

