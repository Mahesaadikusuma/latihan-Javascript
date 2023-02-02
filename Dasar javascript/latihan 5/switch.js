var item = prompt("masukan makanan / minuman \n (cth: nasi, daging, susu, hamburger, softdrink) ");

switch (item) {
  case "nasi":
    alert("makanan / miniman sehat");
    break;
  case "daging":
    alert("makanan / minumna sehat");
    break;
  case "susu":
    alert("makanan / minuman sehat");
    break;
  case "hamburger":
    alert("makanan / minuman tidak sehat");
    break;
  case "softfrink":
    alert("makanan / minuman tidak sehat");
    break;
  default:
    alert("anda memasukan nama makanan / minuman yang salah");
    break;
}
