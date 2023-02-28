// Spread Operator
// memecah iterables

// const mhs = ["mahesa", "adi", "kusuma"];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ["mahesa", "adi", "kusuma"];
// const dosen = ["ade", "hendra", "wanda"];
// const orang = [...mhs, "aji", ...dosen];

// const orang = [mhs, dosen];
// console.log(orang);

// meng-copy array

// const mhs = ["mahesa", "adi", "kusuma"];
// const mhs1 = [...mhs];
// mhs1[0] = "fajar";

// console.log(mhs1);

// const liMhs = document.querySelectorAll(".nama");
// liMhs.forEach((mhs) => {
//   console.log(mhs.innerHTML);
// });

// console.log(liMhs[0].innerHTML);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".h1");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);

nama.innerHTML = huruf;
