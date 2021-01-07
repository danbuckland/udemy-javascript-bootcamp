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
  const textElement = document.createElement('a')
  const button = document.createElement('button')

  // Setup remove note button
  button.textContent = 'x'
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textElement.textContent = note.title
  } else {
    textElement.textContent = 'Empty note'
  }
  // Setup the link to the edit page
  textElement.href = `/edit.html#${note.id}`
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

const removeNote = function (id) {
  let noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}