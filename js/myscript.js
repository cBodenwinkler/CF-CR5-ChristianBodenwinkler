// JSON import and test:
var movieData = JSON.parse(movies);
    // console.table(movieData);

// For Loop to implement the data from JSON:
for (let i = 0; i < movieData.length; i++) {
    $("#movieContent").append(`<div id="movie${i}" class="imgPlusText col-lg-6 col-sm-12"></div>`);
        $(`#movie${i}`).html(`
        <div class="borderME">
            <img id="img${i}" class="movieImg" src="${movieData[i].image}">
            <div class="movieSide">
                <h3 class="movieName"> ${movieData[i].movieName} </h>
                <p class="movieDesc"> ${movieData[i].description} </p>
                <span class="likeBox"><button class="plus" type="plus">Like &#x1F44D; </button> <span>${movieData[i].likes}</span> </span>
            </div>
        </div>
        `)

};