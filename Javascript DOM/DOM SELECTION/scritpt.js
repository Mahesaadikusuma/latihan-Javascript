// DOM SELECTION part 1
// document getElementByid(); -> element
// const judul = document.getElementById("judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "lightblue";
// judul.innerHTML = "Hello Mahesa";

//
// document.getElementsByTagName(); ->htmlcollection
// const p = document.getElementsByTagName("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// document.getElementsByName(); -> HTMLcollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini diubah dari javascript";

// DOM SELECTION part 2
// document.querySelector();

// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll();
const p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
const sectionb = document.getElementById("b");
const p4 = sectionb.querySelector("p");
p4.style.backgroundColor = "orange";
