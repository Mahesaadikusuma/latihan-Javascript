const SeacrhButton = document.querySelector(".search-button");
SeacrhButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movie = await getMovie(inputKeyword.value);
    // console.log(movie);
    updateUi(movie);
  } catch (error) {
    // console.log(error);
    alert("not Found");
  }
});

function getMovie(keyword) {
  return (
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + keyword)
      .then((response) => {
        // console.log(response);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      // yang dibawah ini hasilnya undifine
      // .then((response) => {
      //   response.Search;
      // });
      // yang ini benar
      .then((response) => {
        // console.log(response);

        if (response.Response === "false") {
          throw new Error(response.Error);
        }
        // console.log(response);

        return response.Search;
      })
  );
}

function updateUi(movie) {
  let cards = " ";
  // console.log(movies);

  movie.forEach((m) => {
    cards += ShowCard(m);
  });

  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event bindling
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    console.log("ok");
    const imdbId = e.target.dataset.imdbid;
    console.log(imdbId);

    const movieDetails = await getMovieDetails(imdbId);
    updateUIDetail(movieDetails);
  }
  // console.log(e.target);
});

function getMovieDetails(imdbId) {
  return fetch("http://www.omdbapi.com/?apikey=ae8857eb&i=" + imdbId)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetails = ShowMovieDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetails;
}

function ShowCard(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
               <img src="${m.Poster}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>

                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>

                  <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#MovieIndexModal" data-imdbid="${m.imdbID}">Show Detais</a>
               </div>
            </div>
         </div>`;
}

function ShowMovieDetails(m) {
  return `<div class="container-fluid">
            <div class="col-md-4">
              <img src="${m.Poster}" alt="" class="img-fluid
              ">
            </div>

            <div class="col-md-">
              <ul class="list-group">
                  <li class="list-group-item">
                    <h4>${m.Title} ${m.Title}</h4>
                  </li>
                  <li class="list-group-item"><strong>Director : </strong> ${m.Director} </li>
                  <li class="list-group-item"><strong>Actor : </strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
              </ul>
            </div>
        </div>`;
}
