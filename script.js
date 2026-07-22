let audio = document.getElementById("music");

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function volume(value) {
    audio.volume = value;
}

// DJ style effects
function increaseBass() {
    alert("Bass effect activated 🎚️");
}

function nextSong() {
    alert("Next song loading 🎵");
}
