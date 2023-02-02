const TombolUbahWarna = document.getElementById("TombolUbahWarna");
TombolUbahWarna.onclick = function () {
  //   alert("ok");
  //   document.body.style.backgroundColor = "lightblue";

  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const TombolAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("acak warna");
TombolAcakWarna.appendChild(textTombol);
TombolAcakWarna.setAttribute("type", "button");

TombolUbahWarna.after(TombolAcakWarna);
TombolAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  console.log(r);

  const g = Math.round(Math.random() * 255 + 1);
  console.log(g);

  const b = Math.round(Math.random() * 255 + 1);
  console.log(b);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// input range
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  //   alert("ok");
  //   console.log(sMerah.value);
  const r = sMerah.value;
  document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
});

// change ini diganti input
sHijau.addEventListener("input", function () {
  //   alert("ok");
  //   console.log(sMerah.value);
  const r = sHijau.value;
  const g = sHijau.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});

sBiru.addEventListener("input", function () {
  //   alert("ok");
  //   console.log(sMerah.value);
  const r = sBiru.value;
  const g = sBiru.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  //   console.log(event.clientX);
  // ukuran browser
  //   console.log(window.innerWidth);

  const xPos = Math.round((event.clintX / window.innerWidth) * 255);
  const yPos = Math.round((event.clintY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
  //   console.log(xPos);
});
