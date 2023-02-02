// DOM SELCTION
// 1. document.getElementById() --> mengembalikan element

const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "#cccc";
judul.innerHTML = "mahesa adi kusuma";

// 2. document.getElementsByTagName()
// --> mengembalikan  HTMLCollections

const p = document.getElementsByTagName("p");
// p ini ada didalam array jadi tidak bisa seperti yang pertama
// jadi harus memamnggil array tersebut dengan [] ini

// disini bisa mengunakan looping kalo yang mau di ganti banyak jadi tidak usah membuat
// copyan yang banyak

// contohnya

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// kalo terdapat  HTMLCollections harus dikasi [0]
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// --> mengembalikan  HTMLCollections

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari javascript";
