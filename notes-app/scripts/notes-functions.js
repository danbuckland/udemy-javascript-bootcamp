'use strict'

// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Setup the note title text
  if (note.title) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Empty note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl);
  
  // Setup the link to the edit page
  noteEl.href = `/edit.html#${note.id}`
  noteEl.classList.add('list-item')
  
  // Setup the status message
  statusEl.textContent = getLastEditedString(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  
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
  const notesEl = document.querySelector('#notes');
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDom(note)
      notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMsg = document.createElement('p')
    emptyMsg.textContent = "No notes to show"
    emptyMsg.classList.add('empty-message')
    notesEl.appendChild(emptyMsg)
  }

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
