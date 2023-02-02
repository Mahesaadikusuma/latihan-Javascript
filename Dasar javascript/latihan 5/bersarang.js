// pola segitiga

/* function segitiga3(panjang) {
  let hasil = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= panjang; j++) {
      if (j >= i) {
        hasil += "* ";
      } else {
        hasil += " ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga3(10)); */

// pola segitiga

/* function segitiga2(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = panjang; j > i; j--) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga2(10)); */

// pola segitiga

/* function segitiga1(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga1(10)); */

// POLA KOTAK

/* function kotak(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j < panjang; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(kotak(10)); */

// dari wpu

/* var s = " ";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }

  s += "\n";
}
console.log(s); */
