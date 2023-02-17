// cara membuat object pada javascript

// 1. object literal
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
// function Mahasiswa(name, energi) {
//   let mahasiswa = {};
//   mahasiswa.name = name;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`hello ${this.name}, Selamat Makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`hello ${this.name} selamat bermain`, jam, "jam");
//     console.log(`hello ${this.name} energi berkurang menjadi`, this.energi);
//   };

//   return mahasiswa;
// }

// let mahesa = Mahasiswa(`Mahesa`, 10);
// let kusuma = Mahasiswa(`kusuma`, 20);

// 3. construktor function
// keyword new
// ini lebih di rekomendasi oleh pak sandhika
function Mahasiswa(name, energi) {
  this.name = name;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`hello ${this.name}, Selamat Makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`hello ${this.name} selamat bermain`, jam, "jam");
    console.log(`hello ${this.name} energi berkurang menjadi`, this.energi);
  };
}

let mahesa = new Mahasiswa("mahesa", 10);
