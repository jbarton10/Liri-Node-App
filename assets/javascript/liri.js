//Spotify Stuff
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Getting Axios
var axios = require('axios');

//Getting moment.js
var moment = require('moment');
moment().format();

//Getting File systems
var fs = require('fs');


var userInput = process.argv[2];
var command = "";

//Loop for catching input that is longer than 1
if (process.argv.length > 3){

    for(var i = 3; i<process.argv.length; i++){
        command += " " + process.argv[i];
        
    }
    command = command.trim();
}
console.log()
liri(userInput, command);


function liri(userInput, command){
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
    if(songName == ""){
        songName = "Ace of Base";
    }

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        

      console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
      console.log("Song name: " + data.tracks.items[0].name);
      console.log("Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);
  
      });

}
function movieFunction(movieName){
    if(movieName == ""){
        movieName = "Mr. Nobody";
    }

    var url = "https://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";


    axios.get(url).then(function(response){
        
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
    fs.readFile("./../../random.txt", "UTF8", function(err, data){
        if (err) {
            return console.log(err);
          }
          var output = data.split(",");
          

          if(output[0] == "spotify-this-song"){
              liri(output[0], output[1]);
          }
          else if(output[0] == "movie-this"){
            liri(output[0], output[1]);
          }
          else if(output[0] == "concert-this"){
            liri(output[0], output[1]);
          }
          
         

    });



}