const ubahWarna = document.getElementById("ubahWarna");

ubahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");

  document.body.classList.toggle("biru-muda");
};

const randWarna = document.createElement("button");
const textTombol = document.createTextNode("acak warna");
randWarna.appendChild(textTombol);
randWarna.setAttribute("type", "button");
randWarna.style.marginLeft = "20px";
ubahWarna.after(randWarna);

randWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  console.log(r);

  const g = Math.round(Math.random() * 255 + 1);
  console.log(g);

  const b = Math.round(Math.random() * 255 + 1);
  console.log(b);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ini yang slider
const sMerah = document.querySelector("input[name=sMerah]");

sMerah.addEventListener("input", function () {
  console.log(sMerah.value);

  const r = sMerah.value;
  //   document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
  document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
});

const sHijau = document.querySelector("input[name=sHijau");

sHijau.addEventListener("input", function () {
  console.log(sHijau.value);

  const r = sMerah.value;
  const g = sHijau.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});

const sBiru = document.querySelector("input[name=sBiru");

sBiru.addEventListener("input", function () {
  console.log(sBiru.value);

  const r = sMerah.value;
  const g = sHijau.value;
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
