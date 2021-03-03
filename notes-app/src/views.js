import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

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
  noteEl.appendChild(textEl)

  // Setup the link to the edit page
  noteEl.href = `/edit.html#${note.id}`
  noteEl.classList.add('list-item')

  // Setup the status message
  statusEl.textContent = getLastEditedString(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDom(note)
      notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMsg = document.createElement('p')
    emptyMsg.textContent = 'No notes to show'
    emptyMsg.classList.add('empty-message')
    notesEl.appendChild(emptyMsg)
  }
}

const initialiseEditPage = (noteId) => {
  const lastEditedText = document.querySelector('#last-edited')
  const titleInput = document.querySelector('#note-title')
  const bodyInput = document.querySelector('#note-body')
  const notes = getNotes()
  const note = notes.find(note => note.id === noteId)

  // return to the home page if node id is invalid
  if (!note) {
    location.assign('/index.html')
  }

  // display initial values from local storage
  titleInput.value = note.title
  bodyInput.value = note.body
  lastEditedText.textContent = getLastEditedString(note.updatedAt)
}

// Generate last edited text
const getLastEditedString = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`

export { generateNoteDom, getLastEditedString, renderNotes, initialiseEditPage }
