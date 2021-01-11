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

// sort notes by 1 of 3 ways
const sortNotes = function (notes, sortBy) {
  debugger
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }

}

// Render application notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy)
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

// Generate last edited text
const getLastEditedString = function (timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`
}