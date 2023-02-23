// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// pilih hanya javascript lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // ubah durasi menjadi integer, ubah menit menjadi detik
  .map((item) => item.dataset.duration)
  // jumlahkan semua detiknya
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);
// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di dom

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlhVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJumlahVideo = document.querySelector(".jumlah-video");
// pJumlahVideo.textContent = `${jam} video`;
pJumlahVideo.textContent = `${jmlhVideo} video`;

console.log(jmlhVideo);
