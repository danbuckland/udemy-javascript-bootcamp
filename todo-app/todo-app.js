let todos = [];

const filters = {
  searchText: '',
  hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const incompleteTodos = function(todos) {
  let incompleteTodos = todos.filter(function (todo) {
    return !todo.complete
  });
  return incompleteTodos
};

const getRemainingTodosCount = function (todos) {
  return incompleteTodos(todos).length;
};

const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.complete
  });

  if (filters.hideCompleted) { filteredTodos = incompleteTodos };

  document.querySelector('#todos').innerHTML = '';

  // Display todo count summary
  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} items left todo`;
  document.querySelector('#todos').appendChild(summary)
    
  // Display each todo based on filters
  filteredTodos.forEach(function (todo) {
    const todoText = document.createElement('p')
    todoText.textContent = todo.text
    document.querySelector('#todos').appendChild(todoText)
  });
}

renderTodos(todos, filters);

// Add a todo and render it
document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.newTodo.value,
    complete: false
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = '';
});

// Listen for search text input change
document.querySelector('#search-text-input').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Listener for hide completed checkbox
document.querySelector('#hide-completed').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

