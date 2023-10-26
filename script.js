window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';


const words = document.querySelector('.words');
let p = document.createElement('p');
words.append(p);

recognition.addEventListener('result', e => {
    console.log(e);
});

recognition.start();