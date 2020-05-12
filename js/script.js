function keySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running all together
    audio.currentTime = 0; //reset sample
    audio.play();
    key.classList.add('playing');
}

function clickSound(e) {
    const audioClick = $(`audio[data-key='${this.getAttribute('data-key')}`).get(0);
    const keyClick = $(`.key[data-key='${this.getAttribute('data-key')}`).get(0);
    if (!audioClick) return; //stop function from running all together
    audioClick.currentTime = 0; //reset sample
    audioClick.play();
    keyClick.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skit it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', keySound);
$('.key').on('click', clickSound);