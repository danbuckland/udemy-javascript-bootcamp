import { setFilters } from './filters'
import { createTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text-input').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos();
});

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos();
});

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo(e.target.elements.newTodo.value.trim())
  e.target.elements.newTodo.value = '';
  renderTodos();
});

// Bonus: Add a watcher for local storage