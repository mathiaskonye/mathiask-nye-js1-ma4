const baseUrl = "https://api.rawg.io/api/games";

fetch(baseUrl)
.then(function(response) {
    return response.json()
})
.then(function(json) {
    createGames(json);
})
.catch(function(error) {
    console.log(error);
});

function createGames(json) {
    const resultsContainer = document.querySelector(".results");
    const results = json.results;

    let html = "";

    results.forEach(function(results) {
        html += `<div class="game">
        <h2>${results.name}</h2>
        <img src=${results.background_image} alt="Name of game">
        </div>`
    });
    resultsContainer.innerHTML = html;
}
