let isMuted = true;

function toggleAudio() {
    const audioEntity = document.getElementById('ambientAudio');
    const audioBtn = document.getElementById('audioBtn');

    if (!audioEntity) return;

    isMuted = !isMuted;

    if (isMuted) {
        audioEntity.components.sound.pauseSound();
        audioBtn.innerHTML = '🔇'; //String.fromCodePoint(0x1F621);
    } else {
        audioEntity.components.sound.playSound();
        audioBtn.innerHTML = '🔊';
    }
}