// Callback technique
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 1500)
}

// This is called 'Callback hell'!
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})

// Promise technique
const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 1500)
})

getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log(`Promise data: ${data}`)
  }, (err) => {
    throw new Error(err)
  })
}, (err) => {
  throw new Error(err)
})

// Promise chaining with catch for reject handling
getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return 'This is some test data'
}).then((data) => {
  console.log(data)
}).catch((err) => {
  throw new Error(err)
})