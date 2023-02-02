var jumlahangkot = 10;
var angkotberoperasi = 6;

for (var noAngkot = 1; noAngkot <= jumlahangkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("angkot no." + noAngkot + " " + "beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("angkot no. " + noAngkot + " " + "sedang lembur");
  } else {
    console.log("angkot no. " + noAngkot + " " + "sedang tidak beroperasi");
  }
}
