$(Document).ready(function () {

    //hiding movieinfo
    $("#trailerInfo").hide();
    //hiding Trailer
    $("#trailer").hide();



    //alert("Welcome TO Trailer Tube");
    // Project - Trailer Tube
    //TODO Movie OMDb API
    //TODO Youtube API Working 


    //Api Information -
    //Youtube KEY = AIzaSyCb3e79c57_B7L6m214mksu6V3b_k_xEtA
    //OMDb Key - 388edf5a

    //Get the input from id="movieSearch" input type and feed into t and store the input value to searchMovie Variable 

    //var movieSearchArr = ["The Rock"];//$("#movieSearch").val().trim();
    //console.log(movieSearchArr);

    //When id="searchButton" is clicked, It will take value from id=moviesearch and append to queryURL 
    //var movieSearch = "";
    function movieinfo() {
        
        var movieSearch = $("#movieSearch").val().trim();
        var movRating = 10;

        var queryURL = "http://www.omdbapi.com/?t=" + movieSearch + "&apikey=388edf5a";
        console.log(queryURL);
        // Creating an AJAX call for the specific movie 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //console.log(response);

            //var movie Plot 
            var moviePlot = response.Plot;
            //console.log(moviePlot);  

            //var moviePoster
            var moviePoster = response.Poster;

            if (moviePoster === "N/A") {
                alert("Movie Poster not found!");
            }

            // var noimagePoster = "./assets/images/link.png"
            // var imgMovie = $(".mvImg").attr("src", noimagePoster);
            // movieInfo.append(imgMovie);

            //console.log(moviePoster);

            //var movieTitle 
            var movieTitle = response.Title;
            //console.log(movieTitle);

            // var movieDirector 
            var movieDirector = response.Director;
            //console.log(movieDirector);

            //var Actors 
            var movieActors = response.Actors;
            //console.log(movieActors);

            //var Ratings 
            var movieRating = response.imdbRating;

            console.log(movieRating);
            if (movieRating === undefined) {
                alert("Movie not found!");
                return false
            }

            //var movieReleased 
            var movieReleased = response.Released;
            console.log(movieReleased);

            //Div trailerInfo

            //var movieInfo = $("<div id='movieInfo'>");
            var movieInfo = $("#trailerInfo");
            //Title Information 
            var Title = $(".title").text("Movie: " + movieTitle);

            // Img 
            var imgMovie = $(".mvImg").attr("src", moviePoster);
            movieInfo.append(imgMovie);

            //Plot information 
            movieInfo.append(Title);

            //Movie Name
            var Plot = $(".overview").text("Overview: " + moviePlot);
            movieInfo.append(Plot);

            // Rating information
            var Rating = $(".rating").text("Movie Rating: " + movieRating + "/" + movRating);
            //console.log(Rating);
            movieInfo.append(Rating);

            // Actors Information 
            var Actors = $(".actors").text("Actors: " + movieActors);
            movieInfo.append(Actors);

            // Director 
            var director = $(".director").text("Director: " + movieDirector);
            movieInfo.append(director);

            // Released 

            var realeased = $(".release").text("Released: " + movieReleased);
            movieInfo.append(realeased);

            var trailerBtn = $(".button1");
            movieInfo.append(trailerBtn);

            $("#trailerInfo").append(movieInfo);
            //$("#trailer").append(movieTrailer);

        }
        )
    };
    //movieinfo();

    function youtube() {

        var movieSearch = $("#movieSearch").val().trim();
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + movieSearch + "Official" + "Trailer" + "&type=video&key=AIzaSyCb3e79c57_B7L6m214mksu6V3b_k_xEtA";
        console.log(queryURL);
        //Creating an Ajax call for the specific trailer 

        $.ajax({

            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var videoID = response.items[0].id.videoId;
            console.log("Video Id :" + videoID);

            var movieTrailer = $("<iframe id=ytplayer type=text/html width=100% height=405 src=https://www.youtube.com/embed/" + videoID + " frameborder=0 allowfullscreen>");
            console.log(movieTrailer);

            $("#trailer").append(movieTrailer);

            //$(trailer).append(movieTrailer);
        }
        )
    };

    //youtube(); 

    // id="searchButton" is click and take input value from id="movieSearch" input type
    // Creating function
    
    //user can search through input 
    var input = document.getElementById("movieSearch");
    input.addEventListener("keyup", function(event){

        event.preventDefault();

        if (event.keyCode === 13){
            //alert("Hello Enter")
            document.getElementById("searchButton").click();
        }


    })


    // When Button Click Functionality 
    $("#searchButton").on("click", function (event) {

        var queryURL = "http://www.omdbapi.com/?t=" + movieSearch + "&apikey=388edf5a";
        console.log(queryURL);
        // Creating an AJAX call for the specific movie 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //console.log(response);

            //var movieTitle 
            var movieRating = response.Rating;
            console.log(movieRating);

            //$("#trailerInfo").empty();
            //$("#trailer").empty();

            //Below code prevents to refresh when pressed enter 
            event.preventDefault();

            if (document.getElementById("movieSearch").value == "") {
                alert("Please Enter your movie name!");
                return false;
            } else if (movieRating === "undefined") {
                alert("Movie not found!");

            } else {

                // add above movieSearch value into array 
                // movieSearchArr.push(movieSearch);
                var movieSearch = $("#movieSearch").val().trim();
                console.log(movieSearch);


            }

            movieinfo();
            $("#trailerInfo").show();
            //$("#trailer").show();

            //hiding Trailer
            $("#trailer").hide();

            youtube();
            $("#trailer").empty();
        });

        //Watch Tailer Code 

        $(".button1").on("click", function (event) {

            //alert("Hello I am clicked !")
            $("#trailer").show();
            //   $("#trailer").append(movieTrailer);

        })

    })
})