class Task {
    constructor (name, deadline) {
        this.name = name;
        this.deadline = deadline;
    }
    toString () {
        return `${this.name} ${this.deadline}`;

    }
}
class TaskManager {
    constructor () {
        this.tasks = [];
    }
    addTask (task) {
        this.tasks.push(task);
        console.log(`Task ${task.name} has been added`);
    }
    removeTask (task) {
        this.tasks = this.tasks.filter(t => t.name !== task.name);
        console.log(`Task ${task.name} has been removed`);
    }
    listTasks () {
        return(this.tasks)
    }
}
class Notification {
    send(message) {
        throw new Error("Method 'send()' must be implemented.");
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Sending email notification: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(`Sending SMS notification: ${message}`);
    }
}

class SlackNotification extends Notification {
    send(message) {
        console.log(`Sending Slack notification: ${message}`);
    }
    
}

const task1 = new Task("Complente it", "01.02.2023");
const task2 = new Task("Dont complete it", "01.02.2025");
const taskManager = new TaskManager();

taskManager.addTask(task1);
taskManager.addTask(task2);


console.log ("List all tasks: ")
taskManager.listTasks().forEach(task => console.log(task.toString()))
const emailNotifier = new EmailNotification();
const smsNotifier = new SMSNotification();
const slackNotifier = new SlackNotification();

emailNotifier.send("Task due soon: Complete report");
smsNotifier.send("Task due soon: Update project documentation");
slackNotifier.send("Reminder: Daily stand-up meeting");