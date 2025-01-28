function welcome() {
   alert("Welcome. Keep your prints, faces, and IPs outside of the vehicle");
}

// file viewer and downloader functions
function select(source) {
   document.getElementById("viewer").setAttribute("src", source);
   document.getElementById("downloader").setAttribute("href", source)
}

// showing file tables and file columns
function vis(column) {
   if (document.getElementById(column).style.height === "25%") {
      document.getElementById(column).style.height = "0";
   } else {
      document.getElementById(column).style.height = "25%";
   }
}