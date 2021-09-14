function watchTutorialCallback(cal, errorCallback) {
   
    let userLeft = true                 // trying doing this true and false and watch the console
    let userWatchingCatMeme = false    // similar with this one also
    
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      cal('Thumbs up and Subscribe')
    }
  }

  watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })

  function watchTutorialPromise() {
   
    let userLeft = false
    let userWatchingCatMeme = false

    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }

  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })

 