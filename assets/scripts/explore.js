// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const textArea = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const button = document.querySelector('button');
  const face = document.querySelector('#explore img');

  speechSynthesis.getVoices();

  let voices = [];

  //loading voices into dropdown
  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.onvoiceschanged = loadVoices;

  //play voice on click and changes images
  button.addEventListener('click', () => {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedIndex = voiceSelect.value;
    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}