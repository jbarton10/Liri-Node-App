require("dotenv").config()
var keys = require("./keys.js");
//Spotify is undefined?
//var spotify = new Spotify(keys.spotify);
var axios = require('axios');
//Getting moment.js in
var moment = require('moment');
moment().format();

var userInput = process.argv[2];


//Switch case to check input
switch(userInput.toLowerCase()) {
    case "concert-this":
        concertFunction();
        break;

    case "spotify-this-song":
        spotifyFunction();
        break;

    case "movie-this":
        movieFunction();
        break;

    case "do-what-it-says":
        doFunction();
        break;

    default:
        console.log("Please enter a valid command.");
        break;
  }


//Functions
function concertFunction(){
    var artist = process.argv[3];
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
   
    console.log(url);

    axios.get(url).then(function(response){
        console.log(response.data);
        for(var i =0; i< response.data.length; i++){
            console.log("Name of venue: " +response.data[i].venue.name);
            console.log("Located in " +response.data[i].venue.city + " " + response.data[i].venue.country);
            var date = moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm:ss");
            console.log("Date of concert: " +date + "\n");
        }

    });

}
function spotifyFunction(){
    var songName = process.argv[3];

}
function movieFunction(){
    var movieName = process.argv[3];

}
function doFunction(){

}