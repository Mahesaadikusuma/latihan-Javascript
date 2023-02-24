// const perkenalan = ["hallo", "nama", "saya", "mahesa"];

// UNTUK PARAMETER DIBWAH INI BEBAS DIISI TIDAK HARUS SAMA DENGAN Destructuring ARRAY
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// const perkenalan = ["hallo", "nama", "saya", "mahesa"];

// // UNTUK PARAMETER SALAM DLL BISA DISKIP ITEM DENGAN CONTOH SEPERTI DIBAWAH
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// SWAP ITEM / menukar item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// rest variabel
// const [a, ...value] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(value);

// Destructuring Objek
// const mhs = {
//   nama: "mahesa",
//   umur: 19,
// };

// // UNTUK PARAMETER DIBAWAH INI HARUS SAMA SEPERTI YANG ADA DI OBJECT MHS
// const { nama, umur } = mhs;
// console.log(nama);

// ASSIGNMENT TANPA DEKLARASI OBJECT
// ({ nama, umur } = mhs = {
//   nama: "mahesa",
//   umur: 19,
// });
// console.log(nama);

// ASSIGN KE VARIABEL BARU
// const mhs = {
//   nama: "mahesa",
//   umur: 19,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

//  Memberikan default value

// const mhs = {
//   nama: "mahesa",
//   umur: 19,
// };

// const { nama, umur, email = "mahesa@gmail.com" } = mhs;
// console.log(email);

// memberikan nilai default = assign ke variabel baru
// const mhs = {
//   nama: "mahesa",
//   umur: 19,
// };

// const { nama: n, umur: u, email: e = "mahesa@gmail.com" } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//   nama: "mahesa",
//   umur: 19,
//   email: "esa@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada object setelah dikirim sebagai parameter untuk function

const mhs = {
  id: 123,
  nama: "mahesa",
  umur: 19,
  email: "esa@gmail.com",
};

function getIdMhs({ id, nama }) {
  return {
    id,
    nama,
  };
}
console.log(getIdMhs(mhs));
