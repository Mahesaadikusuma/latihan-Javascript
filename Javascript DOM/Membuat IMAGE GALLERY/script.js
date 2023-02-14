const container = document.querySelector(".container");

const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
  // cek apakah yang di click thumb

  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");

    setTimeout((e) => {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach((thumb) => {
      //  if (thumb.classList.contains("active")) {
      //    thumb.classList.remove("active");
      //  }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
