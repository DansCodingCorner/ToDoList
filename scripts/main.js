import { TaskManager } from "./Modules/TaskManager.js";
import {Task} from "./Modules/Task.js";
import { UIManager } from "./UIManager/UIManager.js";
import { DatabaseManager } from "./Database/DataBaseManager.js";

//Gather lements from the page

//add Event Listenersn to buttons

//Create the Task Manager
export const taskManagerInstance = TaskManager.createTaskManager()
//create the UIManager
export const uiManager = UIManager.createUIManager();


//Create the Database Manager 
export const databaseManager = DatabaseManager.createDatabaseManager();
