export class DatabaseManager 
{

    instance; 
    
    constructor() 
    {
    }

    static createDatabaseManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new this.constructor();
        }
        return this.instance;
    }
}