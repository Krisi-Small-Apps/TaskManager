import { TaskManager } from "./classes/TaskManager.js";

const taskManager = new TaskManager();

taskManager.addTask("Пазаруване", "pending");
taskManager.addTask("Учене на JavaScript", "pending");
taskManager.addTask("Тренировка", "pending");

taskManager.viewTasks();

taskManager.completeTask(1);

taskManager.viewTasks();

const task = taskManager.findTask("Тренировка");
console.log(task);

taskManager.deleteTask(0);

const tasks = taskManager.viewTasks();

console.log(tasks);