$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=" + $(".input-keyword").val(),

    success: (results) => {
      // console.log(results);
      const movies = results.Search;

      let cards = "";

      // console.log(movies);

      movies.forEach((m) => {
        cards += ShowCard(m);
      });
      $(".movie-container").html(cards);

      // ketika tombol details di click

      $(".modal-detail-button").on("click", function () {
        // console.log($(this).data("imdbid"));

        $.ajax({
          url: "http://www.omdbapi.com/?apikey=ae8857eb&i=" + $(this).data("imdbid"),

          success: (m) => {
            const movieDetails = ShowMovieDetails(m);
            $(".modal-body").html(movieDetails);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
