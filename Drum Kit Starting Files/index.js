
const notes = [`w`, `a`, `s`, `d`, `j`, `k`, `l`];

function playSound(note) {

    const soundMap = {
        'w': `sounds/crash.mp3`,
        'a': `sounds/kick-bass.mp3`,
        's': `sounds/snare.mp3`,
        'd': `sounds/tom-1.mp3`,
        'j': `sounds/tom-2.mp3`,
        'k': `sounds/tom-3.mp3`,
        'l': `sounds/tom-4.mp3`
    };
    const audio = new Audio(soundMap[note]);
    audio.play();
    buttonAnimation(note);
}

function buttonAnimation(note) {

    const button = document.querySelector(`.${note}`);
    button.classList.add('pressed');
    setTimeout(function() {
        button.classList.remove('pressed');
    }, 100);
}

for (let note of notes) {
    document.querySelector(`.${note}`).addEventListener(`click`, function() {
        playSound(note);
    });
}

document.addEventListener(`keydown`, function(e) {
    console.log(e);
    if (notes.includes(e.key)) {
        playSound(e.key);
    }
});





