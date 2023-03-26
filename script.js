console.log('hello')

fetch(`https://api.spotify.com/v1`)
  .then(response => response.json())
  .then(data => {
    // data will be an array of song objects
    // you can loop through the array and add each song to your app
    data.forEach(song => {
      // add the song to your app
      // e.g. addSong(song.title, song.artist, song.duration)
    })
  })
  .catch(error => {
    console.error('Error retrieving songs:', error)
  })
console.log(data)