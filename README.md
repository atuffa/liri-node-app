# liri-node-app


### Overview
A Node.js LIRI (Language Interpretation and Recognition Interface) app. It's a back end program in which users input on the editor command terminal to request information from spotify Web API, Twitter Web API and Omdp(movie) Web API.

### How to use this app

1. Download / clone to your desktop.
2. Install the node module (npm init)
3. you need your own spotify and twitter Api keys
4. Create a .env file to set what are known as environment variables
5 Then use the commands below to use the api prefered.




### Commands for each API 

    - For Spotify API node liri.js spotify-this-song '<song name here>'
    - For OMDBI Movies API "node liri.js movie-this" "movie name"
    - For Twitter API "node liri.js "my-tweets".
    - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
    
### Functionality 

1. node liri.js my-tweets

    This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. node liri.js spotify-this-song '<song name here>'
    
    This will show the following information about the song in your terminal/bash window
        
        - Artist(s)
        - The song's name
        - A preview link of the song from Spotify
        - The album that the song is from
        
3. node liri.js movie-this '<movie name here>'
    
    This will output the following information to your terminal/bash window:

       - Title of the movie.
       - Year the movie came out.
       - IMDB Rating of the movie.
       - Rotten Tomatoes Rating of the movie.
       - Country where the movie was produced.
       - Language of the movie.
       - Plot of the movie.
       - Actors in the movie.

4. node liri.js do-what-it-says
    
   Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
   It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
   
 ### Screenshots
 
 
 
   


