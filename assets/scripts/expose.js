// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();


  //select horn
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    hornImage.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });


  //adjust volume
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;

    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });


  //play sound
  playButton.addEventListener('click', () => {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}