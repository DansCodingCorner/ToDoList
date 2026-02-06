import { TaskManager } from "./Modules/TaskManager.js";
import {Task} from "./Modules/Task.js";

//Gather lements from the page
const AddTaskButton = document.getElementById("Add_tasks_button");

//add Event Listenersn to buttons
AddTaskButton.addEventListener("click", Task.createTask);

//Create the Task Manager
const taskManager = new TaskManager();
