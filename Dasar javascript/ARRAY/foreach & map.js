// 6 FOREACH
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["mahesa", "adi", "kusuma"];
/* for (var i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}
 */

/* angka.forEach(function (e) {
  console.log(e);
});
 */

/* nama.forEach(function (e, i) {
  console.log("mahasiswa ke-" + (i + 1) + " adalah : " + e);
}); */

//  7. MAP
/* var angka = [1, 7, 10, 5, 2, 4, 8, 9];
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" - "));
 */

// SORT
var angka = [1, 7, 3, 5, 2, 4, 8, 9, 11, 20, 15];
console.log(angka.join(" - "));

angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
