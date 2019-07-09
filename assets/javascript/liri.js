require("dotenv").config()
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
//Files not linking?
// var spotify = new Spotify(keys.spotify);
var axios = require('axios');
//Getting moment.js in
var moment = require('moment');
moment().format();

var userInput = process.argv[2];
var command = "";

//Loop for catching input that is longer than 1
if (process.argv.length > 3){

    for(var i = 3; i<process.argv.length; i++){
        command +=process.argv[i];
        
    }
}



//Switch case to check input
switch(userInput.toLowerCase()) {
    case "concert-this":
        concertFunction(command);
        break;

    case "spotify-this-song":
        spotifyFunction(command);
        break;

    case "movie-this":
        movieFunction(command);
        break;

    case "do-what-it-says":
        doFunction();
        break;

    default:
        console.log("Please enter a valid command.");
        break;
  }


//Functions
function concertFunction(artist){
    
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
   

    axios.get(url).then(function(response){
        console.log(artist);
        for(var i =0; i< response.data.length; i++){
            console.log("Name of venue: " +response.data[i].venue.name);
            console.log("Located in " +response.data[i].venue.city + " " + response.data[i].venue.country);
            var date = moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm:ss");
            console.log("Date of concert: " +date + "\n");
        }

    });

}
function spotifyFunction(songName){

    console.log("Artist(s) " + "");
    console.log("Song name ");
    console.log("Link ");
    console.log("Album ");

    

}
function movieFunction(movieName){
    if(movieName == ""){
        movieName = "Mr. Nobody";
    }

    var url = "https://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";


    axios.get(url).then(function(response){
        console.log(response.data);
        console.log("Title: " + response.data.Title);
        console.log("Year of Release: " + response.data.Year);
        console.log("IMBD Rating: " + response.data.Rated);
        console.log("Rotten Tomatoes: " + response.data.Ratings[2].Value);
        console.log("Produced in " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " +response.data.Plot);
        console.log("Actors: " + response.data.Actors);


    });
    

}
function doFunction(){

}