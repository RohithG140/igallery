 var gallery = [
    { src: "ben.png.jpeg" },
    { src: "diamond.jpeg" },
    { src: "alien x.png.jpeg" },
    { src: "atomix.png.jpeg" },
    { src: "bloxx.png.jpeg" },
    { src: "ghost.jpeg" },
    { src: "way big.png.jpeg" },
    { src: "gravattack.png.jpeg" },
    { src: "hopper.jpeg" },
    { src: "rath.jpeg" },
    { src:"shocksquatch.jpeg"},
    { src:"malware.jpeg"},
    { src:"vilgax.jpeg"}

];

var index = 0;
var imgElement = document.getElementById("gallery-img");

var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

function updateGallery() {
    imgElement.src = gallery[index].src;
}

nextBtn.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

prevBtn.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();