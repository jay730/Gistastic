var topics = ["Russia","USA","Canada", "China"];
var deleteEnabled = false;

    alert($(this).attr("data-name"));
    
    var country = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    country + "&api_key=dc6zaTOxFJmzC&limit=10";

    function makeApiCall() {
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });

        //var gifDiv = $("<div class='gif'>");
        //var rating = response.Rated;
    }


    // This function handles events where a movie button is clicked
    $("#add-country").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#country-input").val().trim();
    // Adding movie from the textbox to our array
    countries.push(movie);
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    });
    
    // Adding a click event listener to all elements with a class of "movie-btn"
    $(document).on("click", ".country-btn", makeApiCall);
    // Calling the renderButtons function to display the intial buttons
    renderButtons();
;
