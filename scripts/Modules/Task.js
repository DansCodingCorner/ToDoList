import { TaskManager } from "./TaskManager.js";
import { taskManagerInstance } from "../main.js"; 
import { uiManager } from "../main.js";
import { UIManager } from "../UIManager/UIManager.js";

export class Task
    {
        name;
        description;
        dueDate;
        priority;


        constructor(name, description, dueDate, priority)
        {
            this.name = name;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }


        static createTask()
        {
            //Gathers the user's inputs from the dialog box
            let nameInput = document.getElementById('TaskNameInput');
            let descriptionInput = document.getElementById('TaskDescInput');
            let dueDateInput = document.getElementById('DueDate');
            let priorityInput = document.getElementById('TaskPriority');
            
            //Creates a new task object
            let task = new Task(nameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);

            //Adds the task to the task manager's list  
            taskManagerInstance.addTaskToList(task);

            //Displays the added task in the UI
            uiManager.displayAddedTask(task);
        }

        get getName()
        {
            return this.name;
        }

        get getDescription()
        {
            return this.description;
        }

        get getDueDate()
        {
            return this.dueDate;
        }

        get getPriority()
        {
            return this.priority;
        }

        set setName(name)
        {
            this.name = name;
        }

        get getDayofWeek()
        {
            let  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

            let date = new Date(this.dueDate);
            let dayOfWeek = daysOfWeek[date.getDay()];

            return dayOfWeek;
        }


        set setDescription(description)
        {
            this.description = description;
        }

        set setDueDate(dueDate)
        {
            this.dueDate = dueDate;
        }

        set setPriority(priority)
        {
            this.priority = priority;
        }

        selectTask(task)
        {
        }

        getDetails() 
        {
        return `Task: ${this.name}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nPriority: ${this.priority}`;
        }
    }
