alert("Welcome TO Trailer Tube");
// Project - Trailer Tube
//TODO Movie OMDb API
// TODO Youtube API Working 


//Api Information -
//Youtube KEY = AIzaSyCb3e79c57_B7L6m214mksu6V3b_k_xEtA
//OMDb Key - 388edf5a


//Get the input from id="movieSearch" input type and feed into t and store the input value to searchMovie Variable 

var searchMovie = "The Rock"//$("#movieSearch").val().trim();


//When id="searchButton" is clicked, It will take value from id=moviesearch and append to queryURL 

function movieinfo() {
        
        var queryURL = "http://www.omdbapi.com/?t=rock&apikey=388edf5a";
        // Creating an AJAX call for the specific movie 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        console.log(response);
        }
)};
movieinfo();

function youtube(){

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=The+Rock+Trailer&type=video&key=AIzaSyCb3e79c57_B7L6m214mksu6V3b_k_xEtA";
    //Creating an Ajax call for the specific trailer 

    $.ajax({

        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    }
)};

youtube(); 