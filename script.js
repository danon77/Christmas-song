let song = document.getElementById("song");
let sound = new Audio();
sound.src = "christmas_song.mp3";
let k = 0;

song.addEventListener("click", function() {
  k++;
  k % 2 !== 0 ? sound.play() : sound.pause();
});