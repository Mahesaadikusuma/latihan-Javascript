// function init() {
//   // let name = "mahesa";

//   // function tampilkanNama(nama) {
//   //   console.log(nama);
//   // }
//   return function (nama) {
//     console.log(nama);
//   };
//   // tampilkanNama();
//   // return tampilkanNama;
// }

// // init();
// let panggilNama = init();
// panggilNama("mahesa");
// panggilNama("esa");

// function UcapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = UcapkanSalam("pagi");
// let selamatsiang = UcapkanSalam("siang");
// let selamatmalam = UcapkanSalam("malam");

// selamatPagi("mahesa");
// selamatsiang("esa");
// selamatmalam("kusuma");

let counter = 0;
let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
