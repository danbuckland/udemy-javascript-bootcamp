const todos = [{
  text: 'Clean bathroom',
  complete: false
}, {
  text: 'Check JIRA for stagnant issues',
  complete: true
}, {
  text: 'Drink water',
  complete: true
}, {
  text: 'Write review',
  complete: true
}, {
  text: 'Learn JavaScript',
  complete: false
}]

const deleteTodo = function (todos, text) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === text.toLowerCase();
  })
  if (index > -1) {
    todos.splice(index, 1);
  }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.complete;
  });
};

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    return a.complete - b.complete
  });
}

// console.log(getThingsToDo(todos));
sortTodos(todos);
console.log(todos);