var jumlahangkot = 10;
var angkotberoperasi = 6;
var noAngkot = 1;
while (noAngkot <= angkotberoperasi) {
  console.log("angkot no." + noAngkot + " " + "beroperasi dengan baik");
  noAngkot++;
}

for (noAngkot = angkotberoperasi + 1; noAngkot <= jumlahangkot; noAngkot++) {
  console.log("angkot no. " + noAngkot + " " + "tidak sedang beroperasi");
}
