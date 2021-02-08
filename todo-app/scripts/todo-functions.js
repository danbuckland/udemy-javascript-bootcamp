"use strict";

// Get saved todos from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render todos on the page
const renderTodos = (todos, filters) => {

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

// Returns a DOM element for an individual todo
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
    saveTodos(todos);
    renderTodos(todos, filters);
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
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(removeButton);

  return todoEl;
};

// Returns a DOM element for the summary of incomplete todos
const generateSummaryDOM = (incompleteTodos) => {
  let summary = document.createElement("h2")
  const plural = incompleteTodos.length === 1 ? "" : "s"
  summary.textContent = `You have ${incompleteTodos.length} item${plural} left todo`
  summary.classList.add("list-title");

  return summary;
};

// Remove todo from array
const removeTodo = (id) => {
  let todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex >= -1) {
    todos.splice(todoIndex, 1);
  }
};

// Mark todo as complete
const checkUncheckTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.complete = !todo.complete;
  }
};
