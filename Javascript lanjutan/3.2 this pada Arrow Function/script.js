// Konsep this pada arrow function
// lanjutan dari playlist 3.2

// construktor function

// const Mahasiswa = function () {
//   this.nama = "mahesa";
//   this.umur = 19;

//   this.sayHello = function () {
//     console.log(`hello nama saya ${this.nama}, dan umur ${this.umur} tahun`);
//   };
//   // console.log(this);
// };

// const mahesa = new Mahasiswa();
// console.log(mahesa);

// arrow function
// const Mahasiswa = function () {
//   this.nama = "mahesa";
//   this.umur = 19;

//   this.sayHello = () => {
//     console.log(`hello nama saya ${this.nama}, dan umur ${this.umur} tahun`);
//   };
//   // console.log(this);
// };

// const mahesa = new Mahasiswa();

// OBJECT LITERAL
// const mhs1 = {
//   nama: "mahesa",
//   umur: 19,

//   sayHello: function () {
//     console.log(`hello nama saya ${this.nama}, dan umur ${this.umur} tahun`);
//   },
// };

// arrow function
// const Mahasiswa = function () {
//   this.nama = "mahesa";
//   this.umur = 19;

//   this.sayHello = function () {
//     console.log(`hello nama saya ${this.nama}, dan umur ${this.umur} tahun`);
//   };
//   console.log(this);

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 5000);
// };

// const mahesa = new Mahasiswa();

//
const box = document.querySelector(".box");

box.addEventListener("click", function () {
  // console.log(this);
  let satu = "size";
  let dua = "caption";

  // if (this.classList.contains(satu)) {
  //   [satu, dua] = [dua, satu];
  // }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);

  // console.log(dua);
});
