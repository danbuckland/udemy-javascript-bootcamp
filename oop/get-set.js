const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.trim()
    this.locations.push(this._location)
  }
}


// code that uses the data object
data.location = '  London   '
data.location = '  Battersea '
console.log(data.location)
console.log(data)