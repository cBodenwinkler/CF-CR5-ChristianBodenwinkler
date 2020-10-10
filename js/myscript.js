// JSON import and test-console-table:
var movieData = JSON.parse(movies);
    // console.table(movieData);


// For Loop to implement the data from JSON - WITH ATTACHED BOOTSTRAP COMMANDS:
for (let i = 0; i < movieData.length; i++) {
    //Creation of the divs, img, p, likebox - Parent div with BOOTSTRAP:
    $("#movieContent").append(`<div id="movie${i}" class="imgPlusText col-lg-6 col-md-12 col-sm-12"></div>`);
        $(`#movie${i}`).html(`
        <div class="borderME">
            <img id="img${i}" class="movieImg" src="${movieData[i].image}">
            <div class="movieSide">
                <h3 class="movieName"> ${movieData[i].movieName} </h>
                <p class="movieDesc"> ${movieData[i].description} </p>
                <span id="${i}" class="likeBox"><button class="plus" type="plus">Like &#x1F44D; </button> <span id="givenLikes${i}" class="likes">${movieData[i].likes}</span> </span>
            </div>
        </div>
        `)
};


// Incrementing the Likes when clicking the Like button:
$(document).ready(function () {
    $(".plus").on("click", function() {
        var index = $(this).parent().attr("id");
        movieData[index].likes += 1;
        $(this).parent().find(".likes").html(movieData[index].likes);
    });
});


// Code to sort the Movies based on their current likes:
// Neutral val to compare to:
var counter = 0;

for (let i = 0; i < movieData.length; i++) {
    // Fetching current likes from page:
    $("#sortButton").on("click", function() {
        var currentLikes = $(`#givenLikes${i}`).html();
        // console.log(currentLikes);
        
        // Comparison to other Like Values:
        if (currentLikes > counter) {
            var orderNr = currentLikes * (-1);
            // Set order for objects based on current likes:
            $(`#movie${i}`).css("order", orderNr);
        }
    });
};