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

 