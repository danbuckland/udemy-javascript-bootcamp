'use strict'

const filters = {
  searchText: '',
  hideCompleted: false
}

const todos = getSavedTodos();

const incompleteTodos = (todos) => todos.filter((todo) => !todo.complete)
const getRemainingTodosCount = (todos) => incompleteTodos(todos).length

renderTodos(todos, filters);

// Add a todo and render it
document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.newTodo.value,
    complete: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = '';
});

// Listen for search text input change
document.querySelector('#search-text-input').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Listener for hide completed checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
