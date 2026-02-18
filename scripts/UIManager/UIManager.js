import { Task } from "../Modules/Task.js";
import {taskManagerInstance} from "../main.js"


export class UIManager
{
    static instance;

    addTaskButton;
    confirmAddTasskButton;
    closeTaskDialogButton;
    dialog;

    removeTaskbutton;
    removeTaskConfirmButton;
    removeTaskCloseButton;
    removeTaskDiaalog;


    constructor()
    {
        this.addElements();
        this.addEventListeners();
    }
    
    static createUIManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new UIManager();
        }
        return this.instance;
    }

    addElements()
    {
        this.AddTaskButton = document.getElementById("Add_tasks_button");
        this.confirmAddTasskButton = document.getElementById("confirmAddTaskButton");
        this.closeTaskDialogButton = document.getElementById("closeDialogButton");
        this.dialog = document.getElementById("AddTaskDialog");
        this.removeTaskbutton = document.getElementById("Remove_TaskButton");
        this.removeTaskConfirmButton = document.getElementById("confirmDeleteTasksButton");
        this.removeTaskCloseButton = document.getElementById("closeRemoveDialogButton");
        this.removeTaskDiaalog = document.getElementById("removeTaskDialog");
    }

    addEventListeners()
    {
        this.AddTaskButton.addEventListener("click", () => {
            this.dialog.showModal();
        });

        this.removeTaskbutton.addEventListener('click', () => {
            this.removeTaskDiaalog.showModal();
        });

        this.closeTaskDialogButton.addEventListener("click", () => {
            this.dialog.close();
        });

        this.confirmAddTasskButton.addEventListener("click", () => {
            Task.createTask();
            this.dialog.close();
        });

        this.removeTaskCloseButton.addEventListener('click', () => {
            this.removeTaskDiaalog.close();
        });

        this.removeTaskConfirmButton.addEventListener('click', () => {
            taskManagerInstance.deleteTasks();
            this.removeTaskDiaalog.close();
        });
    }

    displayAddedTask(task)
    {
        let tasksContainer = document.getElementById(task.getDayofWeek);

        let newTaskContainer = document.createElement("div");

        newTaskContainer.classList.add("taskContainer");
        newTaskContainer.id = task.id;

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


        if(task.getPriority  == "3")
        {
            newTaskContainer.classList.add("highPriority")
        }
        else if(task.getPriority  == "2")
        {
            newTaskContainer.classList.add("mediumPriority")
        }
        else
        {
            newTaskContainer.classList.add("lowPriority")
        }

        newTaskContainer.addEventListener("click", () => {
            task.selectTask(newTaskContainer.id)
        });

        tasksContainer.appendChild(newTaskContainer);
    }

    removeTaskContainer(selectedTaskId)
    {
        let taskElementToRemove = document.getElementById(selectedTaskId);

        if(taskElementToRemove)
        {
            taskElementToRemove.remove();
        }
    }

    static addClickedClass(elementID)
    {
        let selectedTask = document.getElementById(elementID);

        if(!selectedTask.classList.contains('clicked'))
        {
            selectedTask.classList.add("clicked");
        }
        else
        {
            selectedTask.classList.remove("clicked")
        }
    }
}