function readFile(file) {
   filetype;
   source;
   sendToReader(filetype, source)
}

function sendToReader(filetype, source) {
   viewer = document.getElementById(viewer);
   // clear class, src, and dimesnion value
   viewer.innerHTML = null;
   // find a way to assign and pass values through if statement
   viewer.innerHTML = 'class="' + filetype + ' src="' + source + '"';
}

function download(link) {
   // https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing
   // And it extracts the file ID, the part between /d/ and /view, and puts it into a new URL which looks like this:
   // https://drive.google.com/uc?export=download&id=1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT

}

function message() {
   alert("Welcome. Keep your prints, faces, and IPs outside of the vehicle");
}

function nav(file) {
   document.getElementById(file).hidden = false;
   document.getElementsByClassName(div).getElementById(!file).hidden = false;
}