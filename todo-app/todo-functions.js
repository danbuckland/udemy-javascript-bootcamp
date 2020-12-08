// Get saved todos from local storage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return []
  }
}

// Save todos to local storage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos on the page
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    let searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    let hideCompletedMatch = !filters.hideCompleted || !todo.complete
    
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.complete
  });

  if (filters.hideCompleted) { filteredTodos = incompleteTodos };
  document.querySelector('#todos').innerHTML = '';

  // Display todo count summary
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
  // Display each todo based on filters
  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
}

// Returns a DOM element for an individual todo
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div')
  const todoText = document.createElement('span')
  const checkbox = document.createElement('input')
  const removeButton = document.createElement('button')

  // Setup checkbox element
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.complete
  checkbox.addEventListener('change', function(e) {
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
  removeButton.addEventListener('click', function () {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  todoEl.appendChild(removeButton)

  return todoEl
}

// Returns a DOM element for the summary of incomplete todos
const generateSummaryDOM = function (incompleteTodos) {
  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} items left todo`;
  return summary
}

// Remove todo from array
const removeTodo = function (id) {
  let todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })
  if (todoIndex >= -1) {
    todos.splice(todoIndex, 1);
  }
}

// Mark todo as complete
const checkUncheckTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })
  if (todo !== undefined) {
    todo.complete = !todo.complete
  }
}