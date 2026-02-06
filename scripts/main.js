import { TaskManager } from "./Modules/TaskManager.js";
import {Task} from "./Modules/Task.js";
import { UIManager } from "./UIManager/UIManager.js";
import { DatabaseManager } from "./Database/DataBaseManager.js";

//Gather lements from the page
const AddTaskButton = document.getElementById("Add_tasks_button");

//add Event Listenersn to buttons
AddTaskButton.addEventListener("click", Task.createTask);

//Create the Task Manager
export const taskManager = new TaskManager();

//create the UIManager
export const uiManager = UIManager.createUIManager();

//Create the Database Manager 
export const databaseManager = DatabaseManager.createDatabaseManager();

