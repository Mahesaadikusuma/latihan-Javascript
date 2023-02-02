// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }

// function ubahWarnap2() {
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnap2;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");

//   const li = document.createElement("li");
//   const textli = document.createTextNode("Item 4");
//   li.appendChild(textli);

//   ul.appendChild(li);
// });

const p3 = document.querySelector(".p3");
//  ini menggunakan  .addEventHandler
// ini tidak bisa digunakan keduanya jadi akan di eksekusi pada code onclick terakhir
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };

// click bisa diganti
// dblclick
// mouseenter
// mouseleave
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "lightgreen";
});
