require("dotenv").config();

// local Storage
const keys= require("./keys.js");

// Node package
const Spotify = require('node-spotify-api');
const Twitter= require("twitter");
const request = require("request");
const fs = require("fs")

// Authentication 
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

// User Inputs
let action = process.argv[2];
let rawInput = process.argv.slice(3);

// Adjusted Input
let capitalizedInput = [];
let input = "";
let fsAppend = "";


console.log(action)
// Conditions for input variables

// If input is provided

    // Spotify
    if (action === 'spotify-this-song' && rawInput.length > 0){

        // Capitalize the first letter
        for (let i in rawInput){
            let x = rawInput[i].charAt(0).toUpperCase() + rawInput[i].slice(1);
            capitalizedInput.push(x);
            input = capitalizedInput.join(" ");
        } // End of for loop
    }

    // Movie imdb
    if (action === 'movie-this' && rawInput.length > 0){
        input =rawInput.join("+")
    }

// If input is not provided

    // Spotify
    if (action === 'spotify-this-song' && rawInput.length === 0){
        input ="The Sign"
    }

    // Movie imdb
    if (action === 'movie-this' && rawInput.length === 0){
        input ="mr+nobody"
    }

    // fs write data
    fsAppend = action + ", " + rawInput.join(" ");
  

// Invokes the switch function
userInput (action, input);




// =================================== Functions ==========================================================

function userInput (action, input){
    switch(action){

        // Twitter
        case "my-tweets":
        twitter();
        break;

        // Spotify
        case "spotify-this-song":
        spotif(input);
        break;

        // Movie database
        case "movie-this":
        movie(input);
        break;

        // File system
        case "do-what-it-says":
        doWhatISay();
        break;
    }
}

// Twiiter Function
function twitter(){
    let allTweets = [];
    // Twiiter Api
    client.get('statuses/user_timeline', function(error, tweets, response) {
        
        // Error
        if(error) throw error;

        const filteredTweets = tweets.filter((elem)=> {
            allTweets.push(elem.text);
        })
        
        // Output
        for (let i in allTweets){
            console.log(`Tweet ${+i + 1}: ${allTweets[i]}`)
        }
 
      });// End of Twitter 

}// End of Twitter Function

// Spotify Function
function spotif(input){
    console.log("hey")
    // Spotify Api
    spotify.search({ type: 'track', query: input, limit: 20 }, function(err, data) {
        
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        
        // Filtered Response
        const responseFiltered = data.tracks.items.filter((elem)=>{
            if (elem.name === input){
                return elem
            }
        });
        
        // Mapped Response
        const responseMapped= responseFiltered.map(elem =>{

            // Artist name
            const artists = elem.artists.map(elem => {
                return elem.name;
           });

           //Song name
           const track = elem.name

           //Preview link of the song
           const url = elem.external_urls.spotify

           // Album name
           const album = elem.album.name
           
           // Final Api call output
           console.log(`\n
                Song Name: ${track}\n 
                Artist: ${artists}\n
                Album: ${album}\n
                Link: ${url}`)

           })// End of mapped Response

      });// End of spotify API

};// End of Spotfiy function


// Movie Function
function movie(input){
    // Query Url
    let query= "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"
  
    // OMDi Api
    request(query, (error, response, body)=>{

        if(error){
            console.log(err);
        }
        if (!error && response.statusCode === 200) {
            const reply = JSON.parse(body)
            console.log(`
                \n Title of the movie: ${reply.Title}
                \n Year the movie came out: ${reply.Year}
                \n IMDB Rating of the movie:  ${reply.imdbRating}
                \n Rotten Tomatoes Rating of the movie: ${reply.Ratings[1].Value}
                \n Country where the movie was produced: ${reply.Country}
                \n Language of the movie: ${reply.Language}
                \n Plot of the movie: ${reply.Plot}
                \n Actors in the movie: ${reply.Actors}
                `);
        }

    });// End of Movie API

}// End of Movie Function


// File System(fs) Function

function doWhatISay(){

    // Read File system (fs)
    fs.readFile("random.txt", "utf8", (error, data) =>{
        if (error){
            console.log(error);
        }

        let argument = ""
        argument = data.split(",");

        userInput (argument[0], argument[1])
    })// End of fs Read

}// End of doWhatISay Function


// Write File system (fs)

fs.appendFile("log.txt", `, "${fsAppend}"`, (err)=> {
    if (err) {
        return console.log(err);
      };

      console.log("log.txt is successfully Updated!")
})