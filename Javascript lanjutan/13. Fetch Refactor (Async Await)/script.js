// // $(".search-button").on("click", function () {
// //   $.ajax({
// //     url: "http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + $(".input-keyword").val(),

// //     success: (results) => {
// //       // console.log(results);
// //       const movies = results.Search;

// //       let cards = "";

// //       // console.log(movies);

// //       movies.forEach((m) => {
// //         cards += ShowCard(m);
// //       });
// //       $(".movie-container").html(cards);

// //       // ketika tombol details di click

// //       $(".modal-detail-button").on("click", function () {
// //         // console.log($(this).data("imdbid"));

// //         $.ajax({
// //           url: "http://www.omdbapi.com/?apikey=ae8857eb&i=" + $(this).data("imdbid"),

// //           success: (m) => {
// //             const movieDetails = ShowMovieDetails(m);
// //             $(".modal-body").html(movieDetails);
// //           },
// //           error: (e) => {
// //             console.log(e.responseText);
// //           },
// //         });
// //       });
// //     },
// //     error: (e) => {
// //       console.log(e.responseText);
// //     },
// //   });
// // });

// // fetch
// const SeacrhButton = document.querySelector(".search-button");
// // SeacrhButton.addEventListener("click", function () {
// //   const inputKeyword = document.querySelector(".input-keyword");
// //   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + inputKeyword.value).then((response) => console.log(response));
// // });
// SeacrhButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   // console.log(inputKeyword);

//   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = " ";
//       // console.log(movies);

//       movies.forEach((m) => {
//         cards += ShowCard(m);
//       });

//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // ketika tombol details di click
//       const modalDetailsButton = document.querySelectorAll(".modal-detail-button");
//       modalDetailsButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           // console.log(this);
//           const imdb = this.dataset.imdbid;

//           // console.log(imdb);
//           fetch("http://www.omdbapi.com/?apikey=ae8857eb&i=" + imdb)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetails = ShowMovieDetails(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetails;
//             });
//         });
//       });
//     });
// });

const SeacrhButton = document.querySelector(".search-button");
SeacrhButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movie = await getMovie(inputKeyword.value);
  console.log(movie);
  updateUi(movie);
});

function getMovie(keyword) {
  return (
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + keyword)
      .then((response) => response.json())
      // yang dibawah ini hasilnya undifine
      // .then((response) => {
      //   response.Search;
      // });
      // yang ini benar
      .then((response) => response.Search)
  );
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

function updateUi(movie) {
  let cards = " ";
  // console.log(movies);

  movie.forEach((m) => {
    cards += ShowCard(m);
  });

  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
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
