// 2.1 Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = "mahesa";

// creation phase pada global context
// nama var = undifine
// nama function = fn()
// hoisting
// window = global project
// this = window

// Execution phase

// var nama = "mahesa";
// var umur = 33;

// console.log(sayHello());
// function sayHello() {
//   return `hello nama saya ${nama}, saya umur ${umur} tahun`;
// }
// sayHello();

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// hoisting
// arguments

// var nama = "Mahesa Adi Kusuma";
// var username = "@mahesaadikuusuma";

// function cetakURL(username) {
//   var instagramURL = "https://www.instagram.com/mahesakuusuma/?hl=de";

//   return instagramURL + username;
// }

// console.log(cetakURL(username));

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }

    c();
  }

  b();
}
a();
