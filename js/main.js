//Goal: Use data returned from one api to make a request to another api and display the data returned

document.querySelector('button').addEventListener('click', getRandomGenre)

function getRandomGenre(){


    fetch('https://musicbrainz.org/ws/2/genre/all?limit=0&offset=0&fmt=json')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    
        let randomIndexOnlyFirstTwentyFive = Math.round(Math.random() * data.genres.length) - 1

        let randomIndexAllList = Math.round(Math.random() * data['genre-count']) - 1

        let randomGenre = data.genres[randomIndexOnlyFirstTwentyFive].name
        let randomGenresId = data.genres[randomIndexOnlyFirstTwentyFive].id


        console.log('Genre count: ' + data['genre-count'])

        console.log('Random Index: ' + randomIndexOnlyFirstTwentyFive)
        console.log('Random Genre: ' + randomGenre)

        document.querySelector('#genreName').innerText = randomGenre + ", " + randomGenresId




        fetch(`https://musicbrainz.org/ws/2/genre/all?limit=0&offset=${randomIndexAllList}&fmt=json`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            let randomIndexOnlyFirstTwentyFivePrime = Math.round(Math.random() * data.genres.length) - 1
            let randomGenrePrime = data.genres[randomIndexOnlyFirstTwentyFivePrime].name
            let randomGenrePrimeId = data.genres[randomIndexOnlyFirstTwentyFivePrime].id

            console.log('Random Index: ' + randomIndexOnlyFirstTwentyFivePrime)
            console.log('Random Genre: ' + randomGenrePrime)

            document.querySelector('#genreNamePrime').innerText = randomGenrePrime + ", " + randomGenrePrimeId





            fetch('https://api.napster.com/v2.2/genres?apikey=NWRlNTYzNGEtOGM0NS00MDk1LWIxOWItMmQ4YTE5ZGRlMWI2')
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data.genres)
                let randomIndexForNapster = Math.round(data.genres.length * Math.random()) - 1
                console.log(data.genres[randomIndexForNapster])
                console.log('Genre Name: ' + data.genres[randomIndexForNapster].name)
                console.log('Genre Description: ' + data.genres[randomIndexForNapster].description)
                console.log('Hello space man!')

                console.log('Genre Id: ' + data.genres[randomIndexForNapster].id)



                document.querySelector('#genre').innerText = 'Genre Name: ' + data.genres[randomIndexForNapster].name
                document.querySelector('#genreDescription').innerText = 'Genre Description: ' + data.genres[randomIndexForNapster].description
                document.querySelector('#genreShortcut').innerText = 'Genre Shortcut: ' + data.genres[randomIndexForNapster].shortcut
                document.querySelector('#genreId').innerText = 'Genre Id: ' + data.genres[randomIndexForNapster].id


                fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${randomGenre}&key=AIzaSyC1gX2sqjNqKVaDNi4shmU8GhH1VQS8zRQ`)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    let randomIndexForYouTube = Math.round(Math.random() * 25) - 1
                    console.log(data)
                    console.log(data.items)
                    console.log(data.items[randomIndexForYouTube])
                    console.log('Video Id: ' + data.items[randomIndexForYouTube].id.videoId)
                    console.log('Channel Title: ' + data.items[randomIndexForYouTube].snippet.channelTitle)
                    console.log('Description: ' + data.items[randomIndexForYouTube].snippet.description)
                    console.log('Title: ' + data.items[randomIndexForYouTube].snippet.title)
                    console.log('Thumbnail url: ' + data.items[randomIndexForYouTube].snippet.thumbnails.medium.url)

                    console.log(`https://www.youtube.com/watch?v=${data.items[randomIndexForYouTube].id.videoId}`)

                    document.querySelector('#thumbnail').src = data.items[randomIndexForYouTube].snippet.thumbnails.medium.url

                    document.querySelector('#videoLink').innerText = `https://www.youtube.com/watch?v=${data.items[randomIndexForYouTube].id.videoId}`

                    document.querySelector('#videoLink').href = `https://www.youtube.com/watch?v=${data.items[randomIndexForYouTube].id.videoId}`



                    
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });





            })
            .catch(err => {
                console.log(`error ${err}`)
            });







        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    






    })

    .catch(err => {
        console.log(`error ${err}`)
    });


}
