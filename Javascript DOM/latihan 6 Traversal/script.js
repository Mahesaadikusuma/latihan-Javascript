// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM TRAVERSAL
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
// console.log(close);

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     card[i].style.display = "none";
// cara yang benar

//     close[i].parentElement.style.display = "none";
//     console.log(e.target);
//     e.target.parentElement.style.display = "none";
//   });
// }

// cara yang paling benar dan clean code untuk saat ini
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);
