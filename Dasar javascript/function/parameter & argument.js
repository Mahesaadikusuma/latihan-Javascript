function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[1];
  }
  return hasil;
}

var coba = tambah(1, 2, 3, 4, 5, 6);
console.log(coba);

/* function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}
var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);
 */

/* function tambah() {
  return arguments;
}

var coba = tambah(9, 10, "sebelas", true);
console.log(coba); */

/* var a = parseInt(prompt("masukan nilai 1 : "));
var b = parseInt(prompt("masukan nilai 2 : "));
var hasil = tambah(a * 2, b * 2); */
