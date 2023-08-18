import { TaskManager } from "../src/classes/TaskManager.js";

describe("TaskManager", () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  it("should add a task", () => {
    taskManager.addTask("Shopping", "not completed");
    expect(taskManager.viewTasks()).toHaveLength(1);
  });

  it("should complete a task", () => {
    taskManager.addTask("Study JavaScript", "not completed");
    taskManager.completeTask(0);
    expect(taskManager.viewTasks()[0].status).toBe("completed");
  });

  it("should delete a task", () => {
    taskManager.addTask("Cleaning", "not completed");
    taskManager.deleteTask(0);
    expect(taskManager.viewTasks()).toHaveLength(0);
  });

  it('should find a task by name', () => {
    taskManager.addTask('Shopping', 'not completed');
    taskManager.addTask('Study JavaScript', 'not completed');
    taskManager.addTask('Exercise', 'not completed');

    const foundTask = taskManager.findTask('Study JavaScript');

    expect(foundTask).toEqual({ name: 'Study JavaScript', status: 'not completed' });
  });

  it('should return null if task is not found', () => {
    taskManager.addTask('Shopping', 'not completed');
    taskManager.addTask('Study JavaScript', 'not completed');
    taskManager.addTask('Exercise', 'not completed');

    const foundTask = taskManager.findTask('Cooking');

    expect(foundTask).toBeNull();
  });
});
