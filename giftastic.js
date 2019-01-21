$(document).ready(function(){

var countries = ["Russia","USA","Canada", "China"];

            $("#buttons-view").empty();
            
            for(var i=0;i<countries.length;i++){
                var btn = $("<button>");
                btn.addClass("country-name");
                btn.attr("data-name", countries[i]);
                btn.text(countries[i]);
                $("#buttons-view").append(btn);
            }

            $("#add-button").on("click", function(){
                var c_value = $("#country-input").val();
                $("#country-input").val("");

                countries.push(c_value);
                $("#buttons-view").empty();
            
            for(var i=0;i<countries.length;i++){
                var btn = $("<button>");
                btn.addClass("country-name");
                btn.attr("data-name", countries[i]);
                btn.text(countries[i]);
                $("#buttons-view").append(btn);
            }
            });

            $(document).on("click", "button", function(){
                $("#gifArea").empty();

                var country_temp = $(this).attr("data-name");

                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                country_temp + "&api_key=dc6zaTOxFJmzC&limit=10";
        
              
              $.ajax({
                url: queryURL,
                method: "GET"
              })
                
                .then(function(response) {
                  console.log(queryURL);
        
                  console.log(response);
                  var results = response.data;

                  for(var i=0;i<results.length;i++){
                        var countryDiv = $("<div>");
                        var p = $("<p>").text("Ratings: "+results[i].rating);
                        var countryGif = $("<img>");                     
                        countryGif.attr("src", results[i].images.downsized_still.url);  
                        countryGif.attr("data-still", results[i].images.downsized_still.url);                   
                        countryGif.attr("data-animate", results[i].images.downsized.url);   
                        countryGif.attr("data-state", "still"); 
                        countryGif.addClass("gifStyles");                  
                        countryDiv.append(p);
                        countryDiv.append(countryGif);                        
                        $("#gifArea").prepend(countryDiv);
                    }
            });
        });

        $(document).on("click", ".gifStyles", function(){
            var state = $(this).attr("data-state");
            if(state === "animate"){
                $(this).attr("src", $(this).data("still")); $(this).attr("data-state","still");
            }
            else{
                $(this).attr("src", $(this).data("animate")); $(this).attr("data-state","animate");
            }
        })
        })
