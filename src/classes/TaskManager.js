export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, status) {
    const newTask = { name, status };
    this.tasks.push(newTask);
  }

  viewTasks() {
    return this.tasks;
  }

  completeTask(index) {
    this.tasks[index].status = "completed";
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  findTask(name) {
    return this.tasks.find(task => task.name === name) || null;
  }
}
