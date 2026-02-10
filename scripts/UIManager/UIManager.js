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
        this.dialog = document.getElementById("myDialog");

        
        this.AddTaskButton.addEventListener("click", () => {
            this.dialog.showModal();
        });

        this.closeTaskDialogButton.addEventListener("click", () => {
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

    displayAddTask()
    {

    }
}