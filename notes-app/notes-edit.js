'use strict'

const lastEditedText = document.querySelector('#last-edited')
const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const removeBtn = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
  return note.id === noteId
})

// return to the home page if node id is invalid
if (!note) {
  location.assign('/index.html')
}

// display initial values from local storage
titleInput.value = note.title
bodyInput.value = note.body
lastEditedText.textContent = getLastEditedString(note.updatedAt)

titleInput.addEventListener('input', function(e) {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  lastEditedText.textContent = getLastEditedString(note.updatedAt)
  saveNotes(notes)
})

bodyInput.addEventListener('input', function(e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  lastEditedText.textContent = getLastEditedString(note.updatedAt)
  saveNotes(notes)
})

removeBtn.addEventListener('click', () => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)

    note = notes.find((note) => note.id === noteId)
    
    if (!note) {
      location.assign('/index.html')
    }

    titleInput.value = note.title
    bodyInput.value = note.body
    lastEditedText.textContent = getLastEditedString(note.updatedAt)
  }
})