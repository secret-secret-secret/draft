function welcome() {
   alert("Welcome. Keep your prints, faces, and IPs outside of the vehicle");
}

// file viewer and downloader functions
function selectFile(source) {
   // TODO: go to the last character in the file, traverse backwards,
   // find the file extension, copy it to the variable "extension"
   for (let periodFinder = source.length; periodFinder > source.length; periodFinder--) {
      if (source[index] = ".") {
       for (let extensionFinder = 0; extensionFinder < periodFinder; extensionFinder++) {
         extension = extension + array[index];
       }  
      break;
      }
   }
   extension;
   sendToViewer(source)
   sendToDownloader(sourcee)
}

function sendToViewer(extension, source) {
   viewer = document.getElementById(viewer);
   // clear class, src, and dimesnion value
   viewer.innerHTML = null;
   viewer.innerHTML = 'type="' + extension + ' href="' + source + '" height="500em" width="100%"';
}

function sendToDownloader(source){
   downloader = document.getElementById("downloader");
   downloader.innerHTML = null;
   downloader.innerHTML = 'id="downloader" href="' + source + '" download';
}

// https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing
// And it extracts the file ID, the part between /d/ and /view, and puts it into a new URL which looks like this:
// https://drive.google.com/uc?export=download&id=1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT


function nav(file) {
   document.getElementById(file).hidden = false;
   document.getElementsByClassName(div).getElementById(!file).hidden = false;
}