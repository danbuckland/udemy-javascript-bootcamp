const getPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has occurred', undefined)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
  request.send()

}

const getCountry = (countryCode, callback) => {
  const coutriesReq = new XMLHttpRequest()

  coutriesReq.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countriesData = JSON.parse(e.target.responseText)
      const country = countriesData.find(country => country.alpha2Code === countryCode)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      console.log('An error has occurred')
    }
  })

  coutriesReq.open('GET', 'http://restcountries.eu/rest/v2/all')
  coutriesReq.send()
}