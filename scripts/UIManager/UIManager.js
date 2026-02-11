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
        let tasksContainer = document.getElementById(task.getDayofWeek);

        let newTaskContainer = document.createElement("div");

        newTaskContainer.classList.add("taskContainer");
        newTaskContainer.id = task.getName;

        let newTaskName = document.createElement("p");
        newTaskName.innerHTML = task.getName;
        newTaskContainer.appendChild(newTaskName);


        let newTaskDescription = document.createElement("p");
        newTaskDescription.innerHTML = task.getDescription;
        newTaskContainer.appendChild(newTaskDescription);


        let newTaskDueDate = document.createElement("p");
        newTaskDueDate.innerHTML = task.getDayofWeek;
        newTaskContainer.appendChild(newTaskDueDate);


        let newTaskPriority = document.createElement("p");
        newTaskPriority.innerHTML = task.getPriority;
        newTaskContainer.appendChild(newTaskPriority);


        tasksContainer.appendChild(newTaskContainer);
        tasksContainer.addEventListener("click", () => {
            task.selectTask(task);
        });
    }

    addClickedClass(task)
    {
        let selectedTask = document.getElementById(task.getName)
        selectedTask.classList.add("clicked");
    }
}