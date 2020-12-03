// const p = document.querySelector('p');
// p.remove();
let notes = [{
  title: 'My next trip',
  body: 'Planning to go to Iceland'
}, {
  title: 'Things I need to do',
  body: 'Book restaurants for my stay'
}, {
  title: 'Habits to work on',
  body: 'Need to do personal work during daylight'
}]

const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title
    document.querySelector('#notes').appendChild(noteEl);
  })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
  console.log('Did this work?');
  e.target.textContent = 'Yep!';
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
  console.log(e.target.value);
})