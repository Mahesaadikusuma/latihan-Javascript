// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");

// p2.onclick = ubahWarna;

// const p4 = document.querySelector(".p4");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");

//   const li = document.createElement("li");
//   const text = document.createTextNode("li baru");

//   li.append(text);
//   ul.append(li);
// });

const p3 = document.querySelector(".p3");
// ini event handler
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
//   p3.style.color = "red";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };

// event listener

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("mouseleave", function () {
  p3.style.color = "#000";
  p3.style.backgroundColor = "white";
});
