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

const findNote = function (notes, noteTitle) {
  return notes.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.title.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

const sortNotes = function (notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0
    }
  })
}

console.log(notes);
sortNotes(notes);
console.log(notes);
