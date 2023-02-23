const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     //     console.log(i);
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// FILTER
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// const newAngka = angka.filter((a) => {
//   return a >= 3;
// });

// console.log(newAngka);

// MAP
// const newAngka = angka.map((a) => {
//   //
//   return a * 2;
// });

// console.log(newAngka);

// REDUCE
// -1, + 8, + 9,  +1, + 4,  +-5,  +-4, + 3, + 2, + 9;
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 5); // yang ini hasilnya 31 tapi
// // yang ini hasilnya 5

// const newAngka2 = angka.reduce((accumulator, currentvalu) => {
//   return accumulator + currentvalu, 5;
// });

// console.log(newAngka);
// console.log(newAngka2);

// METHOD CHAINING
// CARI ANGKA > 5
// KALIKAN 3
// JUMLAHKAN

const hasil = angka
  .filter((a) => a > 5) //8 9 9
  .map((a) => a * 3) // 24 27 27
  .reduce((acc, curr) => acc + curr);

console.log(hasil);
