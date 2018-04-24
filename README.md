# liri-node-app

Language Interpretation and Recognition Interface app

Project for Spotify, Twitter, Omdb Api's 

-------------------------------------------------------------------------------------------------


Project built by JavaScript(ES6), API and npm.

This project will help students or anyone new or familiar with the above listed programs. 

It's a back end program in which users input on the editor command terminal.  

Commands for each API 

    - For Spotify API node liri.js spotify-this-song '<song name here>'
    - For OMDBI Movies API "node liri.js movie-this" "movie name"
    - For Twitter API "node liri.js "my-tweets".
    - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
    
What Each Commands do 

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
   Feel free to change the text in that document to test out the feature for other commands.
   It is useful to understand or use as a reference the followings

            - NPM 
            - NPM API requests
            - File System 
              - fs Write
              - fs Append
            - dotenv - to set what are known as environment variables
            - JS (ES6)
            - JS String methods
           


Note: You Should get your own Spotify, twitter and OMDB key so that it can work in your pc. 

I think this will be a good backend project that covers most node js topics
