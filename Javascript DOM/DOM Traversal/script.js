// event handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// ini menggunakan dom traversal
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     //     close[i].parentElement.style.display = "none";
//     //     console.log(e.target);

//     e.target.parentElement.style.display = "none";
//   });
// }

// ini yang utama versi lebih praktis
// close.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // ini untuk mencegah aksi defaul dari tag a href kosong yang nantinya akan mereload halaman
//     e.stopPropagation(); //Event Bubbling
//   });
// });

const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     alert("ok");
//   });
// });

// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
