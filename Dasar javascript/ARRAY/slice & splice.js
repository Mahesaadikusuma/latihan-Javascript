// splice adalah menyambung atau menambal menyisipkan sebuah elemen dengan splice

// 4. splice
// splice(indexAwal, mauDihapuBerapa, elemenBaru1, elemenBaru2,.....)

/* var arr = ["mahesa", " adi", "kusuma"];
arr.splice(0, 2, "kenzie", "adi");
console.log(arr.join(" - "));
 */

// slice adalah mengiris arraynya digunakan untuk mengambil beberapa bagian pada array dan menjadikannya array baru

// 5. slice
// slide(indexAwal, indexAkhrinya)
var arr = ["mahesa", "adi", "kusuma", "kenzie", "adi", "ramadhan"];
var arr2 = arr.slice(3, 7);

console.log(arr2.join(" - "));
