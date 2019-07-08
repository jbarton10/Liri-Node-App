require("dotenv").config()
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var userInput = process.argv[2];


//Maybe switch these to switch cases
if (userInput.toLowerCase() == "concert-this"){
    concertFunction();
}
else if(userInput.toLowerCase() == "spotify-this-song"){
    spotifyFunction();

}
else if(userInput.toLowerCase() == "movie-this"){
    movieFunction();

}
else if(userInput.toLowerCase() == "do-what-it-says"){
    doFunction();
}
else{
    console.log("Please enter a valid command.")
}


//Functions
function concertFunction(){
    var artist = process.argv[3];

}
function spotifyFunction(){
    var songName = process.argv[3];

}
function movieFunction(){
    var movieName = process.argv[3];

}
function doFunction(){

}