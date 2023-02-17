// this
/* var a = 10;
console.log(this.a);
 */

//  MEMBUAT OBJECT

// CARA 1 - function declaration
// /* function hallo() {
//   console.log("hallo");
//   console.log(this);
// }
// this.hallo();
// this ini contoh bisa dihapus
// this mengembalikan object global

// cara 2 - object literal
/* var obj = { 
  a: 10, 
  nama: "mahesa",
};
obj.hallo = function () {
  console.log("hallo");
  console.log(this);
};
obj.hallo(); */

// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Hallo() {
  console.log("hallo");
  console.log(this);
}
var obj1 = new Hallo();
var obj2 = new Hallo();
// this mengembalikan object yang baru dibuat
new Hallo();
