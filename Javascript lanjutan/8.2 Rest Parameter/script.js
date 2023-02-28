// Callback
// synchronous Callback

// function hallo(nama) {
//   alert(`hallo, ${nama}`);
// }

// function tampilkanPesan(Callback) {
//   const nama = prompt("masukan nama");
//   Callback(nama);
// }

// tampilkanPesan((nama) => {
//   alert(`hallo ${nama}`);
// });

// const mhs = [
//   {
//     nama: "mahesa adi kusuma",
//     NIM: "20210801132",
//     email: "mahesa@gmail.com",
//     jurusan: "Teknik Informatika",
//     IdDosenWali: 3,
//   },

//   {
//     nama: "kusuma",
//     NIM: "20210801133",
//     email: "mahesa@gmail.com",
//     jurusan: "Teknik Informatika",
//     IdDosenWali: 2,
//   },

//   {
//     nama: "mahesa kusuma",
//     NIM: "20210801134",
//     email: "mahesa@gmail.com",
//     jurusan: "Teknik Informatika",
//     IdDosenWali: 3,
//   },
// ];

// mhs.forEach((mhs) => {
//   console.log(mhs.nama);
// });

// ini vanila js / js murni
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");

// getDataMahasiswa(
//   "mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     // console.log(JSON.parse(result));

//     mhs.forEach((m) => {
//       console.log(m.nama);
//     });
//   },
//   (error) => {
//     error(404);
//   }
// );

// console.log("selesai");

// JQuery

console.log("mulai");

$.ajax({
  url: "mahasiswa.json",

  success: (mhs) => {
    // console.log(mhs);
    mhs.forEach((m) => {
      console.log(m);
    });
  },
  error: (err) => {
    console.log(err.responseText);
  },
});

console.log("selesai");
