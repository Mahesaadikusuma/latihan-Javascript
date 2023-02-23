// const mhs = {
//   name: "Mahesa Adi Kusuma",
//   umur: 19,
//   NIM: 20210801132,
//   jurusan: "Teknik Informatika",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.name}</h2>
//   <span class="NIM">
//     ${mhs.NIM}
//   </span>
// </div>`;

// const mhs = [
//   {
//     name: "mahesa",
//     jurusan: "Teknik Informatika",
//   },

//   {
//     name: "esa",
//     jurusan: "UI UX",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>

// <li>
// ${m.name}
// ${m.jurusan}
// </li>

// </ul>`
//   )
//   .join("")}
// </div>`;

// Condisional
// const lagu = {
//   judul: "Sepatu",
//   penyanyi: "tulus",
//   feat: "tau dah",
// };

// const el = `<div class="lagu">
// <ul>
//   <li>${lagu.judul}</li>
//   <li>${lagu.penyanyi} ${lagu.feat ? `(feat ${lagu.feat})` : ""}</li>
// </ul>

// </div>`;

// Nested / bersarang
const mhs = {
  name: "Mahesa Adi Kusuma",
  umur: 19,
  NIM: 20210801132,
  jurusan: "Teknik Informatika",
  semester: 5,
  MataKuliah: ["Big Data", "machine learning", "Rekayasa Web", "Perancangan sistem orientasi Object"],
};

function cetakMataKuliah(matakuliah) {
  return `
  <ol start="50">
    ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el = `
<div class="mhs">
  <h2>${mhs.name}</h2>
  <span class="semester">${mhs.semester}</span>
  <h4>${mhs.MataKuliah}</h4>
  ${cetakMataKuliah(mhs.MataKuliah)}
</div>`;

console.log(el);
document.body.innerHTML = el;
