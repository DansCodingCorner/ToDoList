export class Task

    {
        #name;
        #description;
        #dueDate;
        #priority;


        constructor(name, description, dueDate, priority)
        {
            this.name = name;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }


        static createTask()
        {
            alert("Creating task...");
            // const Task = new this.constructor(name, description, dueDate, priority);
            // return Task;

        }

        get getName()
        {
            return this.#name;
        }

        get getDescription()
        {
            return this.#description;
        }

        get getDueDate()
        {
            return this.#dueDate;
        }

        get getPriority()
        {
            return this.#priority;
        }

        set setName(name)
        {
            this.#name = name;
        }

        set setDescription(description)
        {
            this.#description = description;
        }

        set setDueDate(dueDate)
        {
            this.#dueDate = dueDate;
        }

        set setPriority(priority)
        {
            this.#priority = priority;
        }

        getDetails()
        {
            return `Task: ${this.#name}\nDescription: ${this.#description}\nDue Date: ${this.#dueDate}\nPriority: ${this.#priority}`;
        }
    }
