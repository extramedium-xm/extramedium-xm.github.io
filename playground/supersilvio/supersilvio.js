// script.js
const buttons = document.querySelectorAll('.sound-button');
const audioPlayer = document.getElementById('audio-player');
let currentlyPlaying = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');

        if (currentlyPlaying) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0;
        }

        audioPlayer.src = soundFile;
        audioPlayer.play();
        currentlyPlaying = audioPlayer;
    });
});


document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('touchstart', function() {
      this.classList.add('touched');
    });
  
    button.addEventListener('touchend', function() {
      this.classList.remove('touched');
    });
  
    // Rimuove la classe anche se il tocco viene interrotto fuori dal bottone
    button.addEventListener('touchcancel', function() {
      this.classList.remove('touched');
    });
  });
  