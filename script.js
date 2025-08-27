const { animate, text, stagger } = anime;

const nwbbutton = document.querySelector("#nwb");
nwbbutton.addEventListener("click", nwbFunc);
function nwbFunc() {
  document
    .getElementById("NotableWomenHeader")
    .scrollIntoView({ behavior: "smooth" });
}

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", aboutFunc);
function aboutFunc() {
  document
    .getElementById("AboutUsHeader")
    .scrollIntoView({ behavior: "smooth" });
}

const solutionsButton = document.querySelector("#solutions");
solutionsButton.addEventListener("click", solutionsFunc);
function solutionsFunc() {
  document
    .getElementById("SolutionsHeader")
    .scrollIntoView({ behavior: "smooth" });
}

const gpgButton = document.querySelector("#gpg");
gpgButton.addEventListener("click", gpgFunc);
function gpgFunc() {
  document
    .getElementById("GenderPayGapHeader")
    .scrollIntoView({ behavior: "smooth" });
}

const modeButton = document.getElementById("modeButton");
modeButton.addEventListener("click", modeFunc);
function modeFunc() {
  const bodyColor = document.body;
  if (bodyColor.classList.contains("bodyLight")) {
    bodyColor.classList.remove("bodyLight");
    bodyColor.classList.add("bodyDark");
    modeButton.textContent = "Dark Mode";
  } else {
    bodyColor.classList.remove("bodyDark");
    bodyColor.classList.add("bodyLight");
    modeButton.textContent = "Light Mode";
  }
  document.getElementById("modeButton").classList.contains("bodyLight");
}

const headers = document.querySelectorAll(".animation-word");

headers.forEach((header) => {
  // BELOW IS CODE FROM ANIME.JS OFFICIAL DOCUMENTATION - https://animejs.com/documentation/text/split/textsplitter-settings/chars
  const { chars } = text.split(header, {
    chars: { wrap: "clip" },
  });
  animate(chars, {
    y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
    duration: 750,
    ease: "out(3)",
    delay: stagger(50),
    loop: true,
  });
});
