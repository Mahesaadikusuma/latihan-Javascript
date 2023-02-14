// part 1
// const judul = document.getElementById("judul");
// judul.innerHTML = "mahesa";

// const sectionA = document.querySelector("section#a");

// sectionA.innerHTML = "hello world";

// const judul = document.querySelector("#judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "#eaea";

// judul.setAttribute("name", "mahesa");

// const p2 = document.querySelector(".p2");
// p2.classList.toggle("label"); // ni domnya sangat penting untuk membuat toggle navbar
// p2.classList.toggle("label");

// Part 2

const pBaru = document.createElement("p");
const textPbaru = document.createTextNode("paragraf baru");
// simpan tulisan baru ke dalam paragraf
pBaru.appendChild(textPbaru);
// simpan paragraf baru di akhir section a
const sectionA = document.getElementById("a");
sectionA.append(pBaru);
pBaru.style.background = "yellow";

// baris baru
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Li Baru");

liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul ");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

liBaru.style.backgroundColor = "lightGreen";

// mengahapus
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2baru = document.createElement("h2");
const texth2Baru = document.createTextNode("Judul Baru");
h2baru.appendChild(texth2Baru);

sectionB.replaceChild(h2baru, p4);
h2baru.style.backgroundColor = "green";
h2baru.style.color = "#fff";

// testting esa
const news = document.createElement("p");
const textpNews = document.createTextNode("hello Mahesa");
news.append(textpNews);
sectionA.append(news);
