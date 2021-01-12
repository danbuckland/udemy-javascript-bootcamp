// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  return notesJSON !== null ? JSON.parse(notesJSON) : []
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
  const noteEl = document.createElement('div')
  const textElement = document.createElement('a')
  const button = document.createElement('button')

  // Setup remove note button
  button.textContent = 'x'
  button.addEventListener('click', () => {
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
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
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
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDom(note);
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// Save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id) => {
  let noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate last edited text
const getLastEditedString = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
