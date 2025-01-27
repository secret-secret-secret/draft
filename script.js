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
   if (document.getElementById(column).style.visibility === "collapse") {
      document.getElementById(column).style.visibility = "visible";
   } else {
      document.getElementById(column).style.visibility = "collapse";
   }
}
// https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing
// And it extracts the file ID, the part between /d/ and /view, and puts it into a new URL which looks like this:
// https://drive.google.com/uc?export=download&id=1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT