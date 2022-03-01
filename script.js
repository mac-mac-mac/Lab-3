//From Professor Fleenor's Examples
//Runs when page loads
window.onload = init;
function init() {
  addLastUpdate();
}

//From Professor Fleenor's Examples
//Updates the HTML with the lastModified property of document
//We call it above so it runs when the page loads (window.onload)
function addLastUpdate() {
  var modDate = document.lastModified;
  document.getElementById("update_date").innerHTML = modDate;
}

function makeArticleBlue() {
  document.getElementById("article").style.backgroundColor = "#05B2DC";
  document.getElementById("article").style.borderColor = "#004385";
}

function makeArticleOrange() {
  document.getElementById("article").style.backgroundColor = "#D89D6A";
  document.getElementById("article").style.borderColor = "#BB0A21";
}

function makeArticleGreen() {
  document.getElementById("article").style.backgroundColor = "#C7D59F";
  document.getElementById("article").style.borderColor = "#8FB339";
}