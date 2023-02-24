// Destructuring

// STUDI CASE INI MENGGUNAKAN ARRAY

// function perjumlahanPerkalian(a, b) {
//   return [a + b, a * b, a / b];
// }

// ini versi 1
// const jumlah = perjumlahanPerkalian(2, 3)[0];
// const kali = perjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

// versi simple
// const [jumlah, kali, bagi = "null"] = perjumlahanPerkalian(2, 3);
// console.log(bagi);

// YANG INI MENGGUNAKAN OBJECT

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(tambah);

// Destructuring function arguments
const mhs = {
  nama: "mahesa",
  umur: 19,
  jurusan: "teknik informatika",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(mhs) {
//   return `hallo nama saya ${mhs.nama} saya berumur ${mhs.umur}tahun`;
// }

// console.log(cetakMhs());
// console.log(cetakMhs(mhs));

// pakai Destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `hallo nama saya ${nama}, saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs));
