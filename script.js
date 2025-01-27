function welcome() {
   alert("Welcome. Keep your prints, faces, and IPs outside of the vehicle");
}

// file viewer and downloader functions
function select(source) {
   document.getElementById("viewer").setAttribute("src", source);
   document.getElementById("downloader").setAttribute("href", source)
}

// https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing
// And it extracts the file ID, the part between /d/ and /view, and puts it into a new URL which looks like this:
// https://drive.google.com/uc?export=download&id=1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT


function showTable(table) {
   document.getElementById(table).hidden = false;
   document.getElementsByClassName("div").getElementById(!table).hidden = false;
}

function showFolder(folder) {
   document.getElementById(folder).hidden = false;
   document.getElementsByClassName("div").getElementById(!folder).hidden = false;
}