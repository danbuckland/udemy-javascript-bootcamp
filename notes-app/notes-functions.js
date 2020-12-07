// Read existing notes from local storage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return []
  }
}

// Generate the DOM structure for a note
const generateNoteDom = function (note) {
  const noteEl = document.createElement('div')
  const textElement = document.createElement('span')
  const button = document.createElement('button')

  // Setup remove note button
  button.textContent = 'x'
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textElement.textContent = note.title
  } else {
    textElement.textContent = 'Empty note'
  }
  noteEl.appendChild(textElement);

  return noteEl;
}

// Render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = generateNoteDom(note);
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// Save notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}