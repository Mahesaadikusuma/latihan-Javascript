// MANIPULASI ARRAY

// 1. MENAMBAH ISI ARRAY

/* var arr = [];
arr[0] = "mahesa";
arr[1] = "adi";
arr[2] = 12;
arr[6] = true;

console.log(arr);
 */

// 2. MENGHAPUS ISI ARRAY
/* 
var arr = ["mahesa", "adi", "kusuma"];
arr[1] = undefined;
console.log(arr);
 */

// MENAMPILKAN ISI ARRAY
/* var arr = ["mahesa", "adi", "kusuma", "kenzie", "ee", "bagas", "esa", "kusuma1", "esa22", "333"];
for (var i = 0; i < arr.length; i++) {
  console.log("mahasiswa ke-" + i + " : " + arr[i]);
}
 */

/* ARRAY METHOD */
// LEGHTH ITU UNTUK MENGETAHUI JUMLAH PADA ARRAY
// JOIN ITU UNTUK MENGGABUNGKAN SELURUH ISI ARRAY DAN MENGUBAHNYA MENJADI SEBUAH STRING
// push
// pop
// shift
// unshift

// METHOD PADA ARRAY
//  1. JOIN

/* var arr = ["mahesa", "adi", "kusuma"];
console.log(arr.join(" - "));
 */

// 2. push & pop
/* var arr = ["mahesa", "adi", "kusuma"];
arr.push("dody", "kenzie");
console.log(arr.join(" - ")); */

// pop
var arr = ["mahesa", "esa", "kusuma", "adi"];
arr.pop();
arr.pop();
arr.pop();
console.log(arr.join(" - "));

// POP MENGHILANGKAN ELEMEN TERAKHIR

// 3. Unshift & shift
// UNSHOFT
var arr = ["mahesa", "esa", "kusuma", "adi"];
arr.unshift("kenxi");
console.log(arr.join(" - "));

// UNSHIFT MENAMBAKAN ELEMEN BARU DIAWAL ARRAY

// SHIFT
var arr = ["mahesa", "esa", "kusuma", "adi"];
arr.shift();
console.log(arr.join(" - "));

// SHIFT MENGHILANGKAN ELEMEN PERTAMA
