import { updateNote, removeNote } from './notes'
import { initialiseEditPage, getLastEditedString } from './views'

const noteId = location.hash.substring(1)
const lastEditedText = document.querySelector('#last-edited')
const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const removeBtn = document.querySelector('#remove-note')

initialiseEditPage(noteId)

titleInput.addEventListener('input', function (e) {
  const note = updateNote(noteId, {
    title: e.target.value,
  })
  lastEditedText.textContent = getLastEditedString(note.updatedAt)
})

bodyInput.addEventListener('input', function (e) {
  const note = updateNote(noteId, {
    body: e.target.value,
  })
  lastEditedText.textContent = getLastEditedString(note.updatedAt)
})

removeBtn.addEventListener('click', () => {
  removeNote(noteId)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    initialiseEditPage(noteId)
  }
})
