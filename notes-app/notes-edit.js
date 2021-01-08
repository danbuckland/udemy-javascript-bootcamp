const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const removeBtn = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
  return note.id === noteId
})

// return to the home page if node id is invalid
if (!note) {
  location.assign('/index.html')
}

// display initial values from local storage
titleInput.value = note.title
bodyInput.value = note.body

titleInput.addEventListener('input', function(e) {
  note.title = e.target.value
  saveNotes(notes)
})

bodyInput.addEventListener('input', function(e) {
  note.body = e.target.value
  saveNotes(notes)
})

removeBtn.addEventListener('click', function () {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})