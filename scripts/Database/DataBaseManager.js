export class DatabaseManager 
{

    static instance; 
    

    static createDatabaseManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new DatabaseManager();
        }
        return this.instance;
    }
}