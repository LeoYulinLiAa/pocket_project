class TodoItem {

  /**
   * @param {string} id
   * @param {string} item
   * @param {boolean} status
   */
  constructor(id, item, status) {
    this.id = id;
    this.item = item;
    this.status = status;
  }
}

export default class TodoList {

  constructor() {
    document.getElementById("add-todo-form").addEventListener("submit", event => {
      event.preventDefault();
      const input = /** @type HTMLInputElement */ document.getElementById("new-todo");
      this.add(input.value);
      input.value = "";
      this.render();
    });
    this.render();
  }

  /**
   * @param {string} item
   */
  add(item) {
    const todoJson = localStorage.getItem("todos");
    if (todoJson) {
      this.modifyTodo(todos => {
        todos.push(new TodoItem(todos.length.toString(), item, false));
      })
    } else {
      localStorage.setItem("todos", JSON.stringify([new TodoItem("0", item, false)]));
    }
  }

  /**
   * @param {string} id
   * @param {TodoItem} item
   */
  set(id, item) {
    this.modifyTodo(todos => {
      const targetItem = todos.find(i => i.id === id);
      if (targetItem) {
        targetItem.status = item.status;
      }
    })
  }

  /**
   *
   * @param {function(TodoItem[]):void} callback
   */
  modifyTodo(callback) {
    const todoJson = localStorage.getItem("todos");
    const todos = /** @type TodoItem[] */ JSON.parse(todoJson);
    callback(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  render() {
    const $todoList = document.getElementById("todo-list");
    Array.from($todoList.children).forEach(e => e.remove());
    const todoJson = localStorage.getItem("todos");
    const todos = /** @type TodoItem[] */ JSON.parse(todoJson);
    todos.forEach(({ id, item, status }) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = status;
      checkbox.addEventListener("change", event => {
        this.set(id, { id, item, status: checkbox.checked });
        this.render();
      })
      li.append(checkbox);
      li.append(item);
      $todoList.append(li);
    });
  }


}