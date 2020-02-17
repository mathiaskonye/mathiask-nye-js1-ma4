const baseUrl = "https://api.rawg.io/api/games/4200";

fetch(baseUrl)
.then(function(response) {
    return response.json()
})
.then(function(json) {
    createGameDetails(json);
    console.dir(json);
})
.catch(function(error) {
    console.log(error);
});


function createGameDetails(json) {
    console.dir(json);

    const image = document.querySelector(".image");
    image.alt = json.image;

    // set the img.src property depending on what properties are available in the JSON
    if (json.image) {
        image.src = json.background_image;
    } else if (json.background_image_additional) {
        image.src = json.background_image_additional;
    } else {
        image.src = "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg";
    }

    const name = document.querySelector(".image");
    image.innerHTML = json.background_image;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;

    const description = document.querySelector(".h1");
    description.innerHTML = json.name;
}