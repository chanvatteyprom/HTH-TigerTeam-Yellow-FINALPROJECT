const nwbbutton = document.querySelector("#nwb");
nwbbutton.addEventListener("click", nwbFunc);
function nwbFunc() {
document.getElementById("NotableWomenHeader").scrollIntoView({behavior: 'smooth'});
}

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", aboutFunc);
function aboutFunc() {
document.getElementById("AboutUsHeader").scrollIntoView({behavior: 'smooth'});
}

const solutionsButton = document.querySelector("#solutions");
solutionsButton.addEventListener("click", solutionsFunc);
function solutionsFunc() {
document.getElementById("SolutionsHeader").scrollIntoView({behavior: 'smooth'});
}

const gpgButton = document.querySelector("#gpg");
gpgButton.addEventListener("click", gpgFunc);
function gpgFunc() {
document.getElementById("GenderPayGapHeader").scrollIntoView({behavior: 'smooth'});
}

const modeButton = document.getElementById("modeButton")
modeButton.addEventListener("click", modeFunc);
function modeFunc() { 
    const bodyColor = document.body;
    if (bodyColor.classList.contains("bodyLight"))
         {bodyColor.classList.remove("bodyLight");
            bodyColor.classList.add("bodyDark");
         }
         else {bodyColor.classList.remove("bodyDark");
            bodyColor.classList.add("bodyLight");}
document.getElementById("modeButton").classList.contains("bodyLight");}