// cara membuat object pada javascript

// 1. object literal
// problemnya tidak efektif untuk membuat object yang banyak
// let mahasiswa = {
//   name: "mahesa adi kusuma",
//   energi: 10,
//   makan: function (porsi) {
//     // function itu adalah method
//     this.energi = this.energi + porsi;
//     console.log(`hello ${this.name}, Selamat Makan`);
//   },
// };

// function declaration

const MethodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hello ${this.name}, Selamat Makan`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`hello ${this.name} selamat bermain`, jam, "jam");
    console.log(`hello ${this.name} energi berkurang menjadi`, this.energi);
  },

  tidur: function (jam) {
    this.energi += jam * 2;

    console.log(`Hello ${this.name}, Selamat tidur`, jam, "jam");
    console.log(`Hello ${this.name}, energi bertambah menjadi`, this.energi);
  },
};

function Mahasiswa(name, energi) {
  let mahasiswa = Object.create(MethodMahasiswa);
  mahasiswa.name = name;
  mahasiswa.energi = energi;
  // cara lama
  // mahasiswa.makan = MethodMahasiswa.makan;
  // mahasiswa.main = MethodMahasiswa.main;
  // mahasiswa.tidur = MethodMahasiswa.tidur;

  return mahasiswa;
}

let mahesa = Mahasiswa(`mahesa`, 10);
let kusuma = Mahasiswa(`kusuma`, 20);

// 3. construktor function
// keyword new
// ini lebih di rekomendasi oleh pak sandhika
// function Mahasiswa(name, energi) {
//   this.name = name;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`hello ${this.name}, Selamat Makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`hello ${this.name} selamat bermain`, jam, "jam");
//     console.log(`hello ${this.name} energi berkurang menjadi`, this.energi);
//   };
// }

// let mahesa = new Mahasiswa("mahesa", 10);
