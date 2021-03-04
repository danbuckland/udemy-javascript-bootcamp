import { checkUncheckTodo, saveTodos, loadTodos, getTodos, removeTodo } from './todos'
import { getFilters } from './filters'
// renderTodos
// Arguments: none
// Return value: none
// Render todos on the page
const renderTodos = () => {
  loadTodos()
  const todos = getTodos()
  const filters = getFilters()
  const todosEl = document.querySelector("#todos")

  let filteredTodos = todos.filter((todo) => {
    let searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    let hideCompletedMatch = !filters.hideCompleted || !todo.complete;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.complete);

  if (filters.hideCompleted) {
    filteredTodos = incompleteTodos;
  }

  todosEl.innerHTML = "";
  
  // Display todo count summary
  if (filteredTodos.length > 0) {
    todosEl.appendChild(generateSummaryDOM(incompleteTodos))
    
    // Display each todo based on filters
    filteredTodos.forEach((todo) => {
      todosEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.classList.add('empty-message')
    emptyMessage.textContent = "No todos to show"
    todosEl.appendChild(emptyMessage)
  }
};

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");
  const checkbox = document.createElement("input");
  const removeButton = document.createElement("button");

  // Setup checkbox element
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.complete;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", (e) => {
    checkUncheckTodo(todo.id);
    renderTodos();
  });

  // Setup todo text element
  todoText.textContent = todo.text;
  containerEl.appendChild(todoText);

  // Setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // Setup remove button element
  removeButton.textContent = "x";
  removeButton.classList.add("button", "button--text");
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    renderTodos();
  });
  todoEl.appendChild(removeButton);

  return todoEl;
};

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompleteTodos) => {
  let summary = document.createElement("h2")
  const plural = incompleteTodos.length === 1 ? "" : "s"
  summary.textContent = `You have ${incompleteTodos.length} item${plural} left todo`
  summary.classList.add("list-title");

  return summary;
};

// Make sure to set up the exports
export { renderTodos }