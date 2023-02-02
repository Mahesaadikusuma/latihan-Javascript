// DOM MANIPULATION

// buat element baru
const pBaru = document.createElement("p");
const Pnew = document.createTextNode("paragraf baru");

// simpan tulisan ke paragraf
pBaru.appendChild(Pnew);

// simpan  pbaru diakhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// materu baru
const liBaru = document.createElement("li");
const litextBaru = document.createTextNode("item baru");
liBaru.appendChild(litextBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

// simpan sebelum element apa
ul.insertBefore(liBaru, li2);

// remove
const link = document.getElementsByTagName("a")[0];
// menghapus link yang ada di sectionA
sectionA.removeChild(link);

// materi baru
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const texth2 = document.createTextNode("judul baru");

h2Baru.appendChild(texth2);
sectionB.replaceChild(h2Baru, p4);

// yang diganti
pBaru.style.backgroundColor = "lightgreen";
li2.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
