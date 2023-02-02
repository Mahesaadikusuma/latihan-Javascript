// 9. filter
var angka = [11, 2, 10, 5, 20, 6, 3, 8, 4];
var angka2 = angka.filter(function (x) {
  return x > 5;
});

console.log(angka2.join(" - "));
console.log(angka2.length);
