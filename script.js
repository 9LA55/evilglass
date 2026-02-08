const img = document.getElementById("myImage");
const screen = document.getElementById("screen");
const smashSound = document.getElementById("smashSound");

let cracked = false;

img.addEventListener("click", () => {
  if (cracked) return;

  cracked = true;

  // Change image first
  img.src = "images/bright.png";

  smashSound.currentTime = 0; // rewind in case of replay
  smashSound.play();


   screen.classList.remove("shake-screen");
  void screen.offsetWidth; // force browser reflow
  screen.classList.add("shake-screen");
});