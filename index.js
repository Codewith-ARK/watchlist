function renderCard(movie) {
  const html = `
    <div class="card">
      <img src="${movie.poster}" loading="lazy">
      <div class="txt-container">
        <h2>${movie.name}</h2>
        <div class="row">
          <p class="year">${movie.year || 'N/A'}</p>
          <span class="genre">${movie.genre || 'N/A'}</span>
        </div>
      </div>
    </div>
  `;
  return html;
}

fetch('./src/movieDB.json')
  .then(response => response.json())
  .then(data => {
    data.map((movie) => {
      const movieCard = renderCard(movie);
      document.getElementById("cards-container").innerHTML += movieCard;
    })
  })
  .catch(error => console.error('Error fetching data:', error));
