
# Laboratory Work #0 Report

## Project Title: Task Management System Implementing SOLID Principles

**Author:** Maxim Comarov

---

## Objective

The objective of this laboratory work is to implement a simple task management system while applying two principles from the SOLID design principles:  
1. **Single Responsibility Principle (SRP)**  
2. **Open/Closed Principle (OCP)**

---

## Requirements

1. Implement a `Task` class that holds the information about individual tasks.
2. Implement a `TaskManager` class that manages a collection of tasks (add, remove, list).
3. Implement a `Notification` system using a base `Notification` class and extend it for different notification types (Email, SMS, Slack).
4. Ensure the implementation adheres to the Single Responsibility Principle (SRP) and Open/Closed Principle (OCP).

---

## Implementation

### 1. Task Class

The `Task` class holds the responsibility of storing task data. Each task has a name and a deadline. This class is only responsible for task-related information, ensuring it adheres to the **Single Responsibility Principle (SRP)**.

```javascript
class Task {
    constructor (name, deadline) {
        this.name = name;
        this.deadline = deadline;
    }
    toString () {
        return \`\${this.name} \${this.deadline}\`;
    }
}
```

### 2. TaskManager Class

The `TaskManager` class handles task-related operations such as adding, removing, and listing tasks. The `TaskManager` class manages the collection of tasks and does not perform unrelated actions like sending notifications. This aligns with the **Single Responsibility Principle (SRP)**.

```javascript
class TaskManager {
    constructor () {
        this.tasks = [];
    }
    addTask (task) {
        this.tasks.push(task);
        console.log(\`Task \${task.name} has been added\`);
    }

    removeTask (task) {
        this.tasks = this.tasks.filter(t => t.name !== task.name);
        console.log(\`Task \${task.name} has been removed\`);
    }

    listTasks () {
        return this.tasks;
    }
}
```

### 3. Notification Class

The `Notification` class and its subclasses (e.g., `EmailNotification`, `SMSNotification`, `SlackNotification`) are responsible for sending notifications to users. This class is designed to be extended by other classes to accommodate different types of notifications. This allows us to add new notification types without modifying the existing code, following the **Open/Closed Principle (OCP)**.

```javascript
class Notification {
    send(message) {
        throw new Error("Method 'send()' must be implemented.");
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(\`Sending email notification: \${message}\`);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(\`Sending SMS notification: \${message}\`);
    }
}

class SlackNotification extends Notification {
    send(message) {
        console.log(\`Sending Slack notification: \${message}\`);
    }
}
```

### 4. Example Usage

```javascript
const task1 = new Task("Complete it", "01.02.2023");
const task2 = new Task("Don't complete it", "01.02.2025");
const taskManager = new TaskManager();

taskManager.addTask(task1);
taskManager.addTask(task2);

console.log("List all tasks: ");
taskManager.listTasks().forEach(task => console.log(task.toString()));

const emailNotifier = new EmailNotification();
const smsNotifier = new SMSNotification();
const slackNotifier = new SlackNotification();

emailNotifier.send("Task due soon: Complete report");
smsNotifier.send("Task due soon: Update project documentation");
slackNotifier.send("Reminder: Daily stand-up meeting");
```

---

## SOLID Principles Demonstrated

### 1. **Single Responsibility Principle (SRP)**

- The `Task` class only manages task-related information.
- The `TaskManager` class handles operations related to task management (adding, removing, listing tasks).
- The `Notification` system is separated from the task management logic.

### 2. **Open/Closed Principle (OCP)**

- The `Notification` class is designed to be extended for different notification types without modifying the base class. New types of notifications can be added without changing existing code (e.g., `EmailNotification`, `SMSNotification`, `SlackNotification`).

---

## Conclusion

This project successfully implements two SOLID principles:  
1. **Single Responsibility Principle (SRP)**: Each class has a clear, single responsibility.
2. **Open/Closed Principle (OCP)**: The notification system is designed for extension without modification.

By adhering to these principles, the system is modular, easy to extend, and maintainable.
