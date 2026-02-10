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


  
const link = document.getElementById('delayedLink');

  link.addEventListener('click', function (e) {
    e.preventDefault();

    setTimeout(() => {
      window.location.href = this.href;
    }, 1500);
  });

window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      // Page was restored from bfcache
      window.location.reload();
    }
  });