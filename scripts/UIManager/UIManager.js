export class UIManager
{
    instance;

    constructor()
    {

    }
    static createUIManager()
    {
        if(this.instance === undefined || this.instance === null)
        {
            this.instance = new this.constructor();
        }
        return this.instance;
    }
}