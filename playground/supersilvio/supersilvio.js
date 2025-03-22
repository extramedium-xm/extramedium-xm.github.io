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
