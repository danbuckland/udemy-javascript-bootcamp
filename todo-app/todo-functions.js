'use strict'

// Get saved todos from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

// Save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos on the page
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    let searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let hideCompletedMatch = !filters.hideCompleted || !todo.complete
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.complete);

  if (filters.hideCompleted) { filteredTodos = incompleteTodos };
  document.querySelector('#todos').innerHTML = '';

  // Display todo count summary
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
  // Display each todo based on filters
  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
}

// Returns a DOM element for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div')
  const todoText = document.createElement('span')
  const checkbox = document.createElement('input')
  const removeButton = document.createElement('button')

  // Setup checkbox element
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.complete
  checkbox.addEventListener('change', (e) => {
    checkUncheckTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  todoEl.appendChild(checkbox)
  

  // Setup todo text element
  todoText.textContent = todo.text
  todoEl.appendChild(todoText)

  // Setup remove button element
  removeButton.textContent = 'x'
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  todoEl.appendChild(removeButton)

  return todoEl
}

// Returns a DOM element for the summary of incomplete todos
const generateSummaryDOM = (incompleteTodos) => {
  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} items left todo`;
  return summary
}

// Remove todo from array
const removeTodo = (id) => {
  let todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex >= -1) {
    todos.splice(todoIndex, 1);
  }
}

// Mark todo as complete
const checkUncheckTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)
  if (todo) {
    todo.complete = !todo.complete
  }
}