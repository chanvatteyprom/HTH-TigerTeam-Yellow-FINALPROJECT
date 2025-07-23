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

