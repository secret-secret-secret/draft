// file viewer and downloader functions
function select(source) {
   document.getElementById("viewer").setAttribute("src", source);
   document.getElementById("downloader").setAttribute("href", source)
}

// showing file tables and file columns
function vis(element) {
   chosenElement = document.getElementById(element)
   if (chosenElement.style.visibility === "visible") {
      chosenElement.style.visibility = "collapse";
      chosenElement.style.height = "0"
    } else {
      chosenElement.style.visibility = "visible";
      chosenElement.style.height = "20em";
    }
}