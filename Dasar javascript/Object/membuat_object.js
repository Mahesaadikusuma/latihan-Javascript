// MEMBUAT OBJECT
// OBJECT LITERAL
var mhs1 = {
  nama: "mahesa adi kusuma",
  nrp: "20210801132",
  gmail: "mahesaadikuzuma@gmail.com",
  jurusan: " teknik informatika",
};

var mhs2 = {
  nama: " kusuma",
  nrp: "20210801130",
  gmail: "mahesaadi15@gmail.com",
  jurusan: " teknik informatika",
};

// FUNCTION DECLARATION
function buatObjectMahasiswa(nama, nrpm, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrpm;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("mahesa", "20210801132", "mahesaadikuzuma@gmail.com", "teknik informatika");

// CONSTRUCTOR
function Mahasiswa(nama, nrp, email, jurusan) {
  // var this = {};
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  //   return this;
}

var mhs4 = new Mahasiswa("adi", "20210801132", "mahesaadi15@gmail.com", "teknik informatika");
