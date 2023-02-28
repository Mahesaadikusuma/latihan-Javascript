// for..of

// ARRAY
// const mhs = ["mahesa", "adi", "kusuma"];

// mhs.forEach((n) => {
//   console.log(n);
// });

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "mahesa";

// for (const m of nama) {
//   console.log(m);
// }

// const mhs = ["mahesa", "adi", "kusuma"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// ini jika ingin menggunakan forOf
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
const liNama = document.querySelectorAll(".nama");

// innerHTML dan textContent itu memunculkan nama yang ada di html di variabel liNama
// liNama.forEach((n) => {
//   console.log(n.textContent);
// });

// ini forOf
// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments

// function JumlahkanAngka() {
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach((a) => {
//   //   jumlah += a;
//   // });
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }

//   return jumlah;
// }
// console.log(JumlahkanAngka(1, 2, 3, 4, 5));

// forIN
const mhs = {
  nama: "mahesa",
  umur: 19,
  jurusan: "Teknik Informatika",
};

for (const m in mhs) {
  console.log(m); // ini indexnya seperti nama, umur dll
  console.log(mhs[m]); // ini isinya dari index object
}
