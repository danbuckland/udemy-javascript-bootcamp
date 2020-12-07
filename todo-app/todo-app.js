const filters = {
  searchText: '',
  hideCompleted: false
}

const todos = getSavedTodos();

const incompleteTodos = function(todos) {
  let incompleteTodos = todos.filter(function (todo) {
    return !todo.complete
  });
  return incompleteTodos
};

const getRemainingTodosCount = function (todos) {
  return incompleteTodos(todos).length;
};

renderTodos(todos, filters);

// Add a todo and render it
document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.newTodo.value,
    complete: false
  });
  saveTodos(todos);
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

