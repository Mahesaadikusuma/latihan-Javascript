// function expression

// const tampilNama = function (nama) {
//   return `hello ${nama}`;
// };

// console.log(tampilNama("mahesa"));

// arrow function codenya lebih ringkas

// ini dengan parameternya 1
// const tampilNama = (nama) => {
//   return `hello ${nama}`;
// };

// console.log(tampilNama("esa"));

// parameternya 2
// const tampilNama = (nama, waktu) => {
//   return `hello ${nama}, selamat ${waktu}`;
// };

// console.log(tampilNama("mahesa", "malam"));

let mahasiswa = ["esa", "adi", "kusuma"];

// const jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// const jumlahHuruf = mahasiswa.map((nama) => {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// arrow function yang mengembalikasn sebuah object
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(jumlahHuruf);
