const container = document.getElementsByClassName('container');
const qouteText = document.getElementById('qoute');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQouteBtn = document.getElementById('newQoute');
let qoutes = [];

//Get random new Qoute
function newQoute() {
    const qoute = qoutes[Math.floor(Math.random()*qoutes.length)];
    if (!qoute.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = qoute.author;
    }
    qouteText.textContent = qoute.text;
};

// Get qoutes with API
async function getQoutes() {
    const apiURL = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiURL);
        qoutes = await response.json();
        newQoute();
    } catch (error) {
        alert('Something went awrey try again.');
    }
};

//Qoute twiting
function tweetQoute() {
    const twitterURL = `https://twitter.com/intent/tweet?text="${qouteText.textContent}" - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

newQouteBtn.addEventListener('click', newQoute);
twitterBtn.addEventListener('click', tweetQoute);

getQoutes();