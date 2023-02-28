// $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=naruto",

//   success: (movie) => console.log(movie),
// });

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=naruto");
// xhr.send();

// const movies = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ae8857eb&s=naruto")
// .then((response) => response.json())
// .then((response) => console.log(response));
// console.log(movies);

// Promise
// object yang mempresentasikan keberhasilan /kegagalan sebuah event asychronous di masa yang akan datang
// janji (terpenhi / ingkar)
// state (fullfilled / rejected / pending)
// callback (resolve / reject / finally)

// aksi (then / catch)

// CONTOH 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji telah ditepati");
//   } else {
//     reject("ingkar janji...");
//   }
// });

// janji1.then((response) => console.log("ok : " + response)).catch((response) => console.log("Not Ok" + response));

// CONTOH 2
// let ditepati = false;

// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("janji telah ditepati");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       reject("ingkar janji");
//     }, 5000);
//   }
// });

// console.log("mulai");
// console.log(
//   janji2.then(() => {
//     console.log(janji2);
//   })
// );

// janji2
//   .finally(() => console.log("selasai menunggu "))
//   .then((response) => console.log("ok : " + response))
//   .catch((response) => console.log("Not Ok " + response));

// console.log("selesai");

// promise all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "naruto",
        sutradara: "esa",
        pemeran: "esa, kenzie",
      },
    ]);
  }, 2000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bekasi",
        temp: 25,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Promise.all([film, cuaca])
// .then((response) => {
//   console.log(response);
// });

Promise.all([film, cuaca]).then((response) => {
  // console.log(response); // in menampilkan 2 array sedangkan yang bawah arraynya sendiri-sendiri

  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
