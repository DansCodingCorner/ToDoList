import { Task } from "../Modules/Task.js";

export class UIManager
{
    static instance;
    addTaskButton;
    confirmAddTasskButton;
    closeTaskDialogButton;
    dialog;

    constructor()
    {
        this.AddTaskButton = document.getElementById("Add_tasks_button");
        this.confirmAddTasskButton = document.getElementById("confirmAddTaskButton");
        this.closeTaskDialogButton = document.getElementById("closeDialogButton");
        this.dialog = document.getElementById("AddTaskDialog");

        
        this.AddTaskButton.addEventListener("click", () => {
            this.dialog.showModal();
        });

        this.closeTaskDialogButton.addEventListener("click", () => {
            this.dialog.close();
        });

        this.confirmAddTasskButton.addEventListener("click", () => {
            Task.createTask();
            this.dialog.close();
        });


        
    }
    
    static createUIManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new UIManager();
        }
        return this.instance;
    }

    displayAddedTask(task)
    {
        let tasksContainer = document.getElementById("tasks");

        let newTaskContainer = document.createElement("div");

        let newTaskName = document.createElement("p");
        newTaskName.innerHTML = "Task Name: " + task.getName;;
        newTaskContainer.appendChild(newTaskName);

        let newTaskDescription = document.createElement("p");
        newTaskDescription.innerHTML = "Task Description: " + task.getDescription;
        newTaskContainer.appendChild(newTaskDescription);

        let newTaskDueDate = document.createElement("p");
        newTaskDueDate.innerHTML = "Due Date: " + task.getDayofWeek;
        newTaskContainer.appendChild(newTaskDueDate);

        let newTaskPriority = document.createElement("p");
        newTaskPriority.innerHTML = "Priority: " + task.getPriority;
        newTaskContainer.appendChild(newTaskPriority);

        tasksContainer.appendChild(newTaskContainer);
    }
}