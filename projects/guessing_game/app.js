//create counters that count how many times they won and lost. 

//global constant variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const tries = document.querySelector('#scoreboard ol');
const hearts = document.querySelectorAll('#scoreboard li');
const winLoss = document.querySelector('.winLossCounter');
const $heart = $('.tries img');
const $overlay = $('#overlay');

//global let variables
let won = 0;
let lost = 0;
let missed = 0;
let overlayMessage = document.querySelector('.title');

//global constant arrays
const phrases = [
    'Ctrl Shift I',
    'Developer Tools',
    'Handshaking Error',
    'Internal Server Error', 
    'Gateway Timeout',
    'Service Unavailable',
    'File Not Found',
    'Access Denied',
    'Not Enough Memory',
    'Low Disk Space',
    'Invalid Password',
    'Device Not Ready',
    'Bad File Type',
    'File Too Large'
];

function clearOverlay() {
    //not completely sure what the syntax is for putting them together outside of Jquery. This isn't DRY but I will make an exception to save time. 
    overlay.classList.remove('start');
    overlay.classList.remove('win');
    overlay.classList.remove('lose');
}

// checks both if you met the winning and losing conditions and changes the DOM to reflect the right condition.
function checkWin() {
    let letters = document.getElementsByClassName('letter').length;
    let showing = document.getElementsByClassName('show').length;
    if (letters === showing) {
        won += 1;
        winLoss.textContent = "Rounds you won: " + won + ", Rounds you lost: " + lost;
        clearOverlay();
        overlay.classList.add('win');
        overlayMessage.textContent = 'Yes!, You won!';
        startButton.textContent = 'Play Again';
        $overlay.delay(1000).show('clip');
    }   
    else if (missed === 5) {
        lost += 1;  
        winLoss.textContent = "Rounds you won: " + won + ", Rounds you lost: " + lost;
        clearOverlay();
        overlay.classList.add('lose');
        overlayMessage.textContent = 'Oh no! You lost'
        startButton.textContent = 'Try Again';
        $overlay.delay(1000).show('clip');
    }
}

//event listener to the “Start Game” button to hide the start screen overlay
startButton.addEventListener('click', () => {
    let phraseArray = getRandomPhraseAsArray(phrases);
    if (startButton.textContent === 'Start Game') {
        $overlay.hide('clip');
        addPhraseToDisplay(phraseArray);
    } 

    //play again button that resets the necessary elements in the DOM.
    else if (startButton.textContent === 'Play Again' || startButton.textContent === 'Try Again') {
        while(phrase.firstElementChild != null) {
            phrase.removeChild(phrase.firstElementChild);
        }
        $overlay.hide('clip');
        addPhraseToDisplay(phraseArray);
        const keyButtons = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < keyButtons.length; i += 1) {
            keyButtons[i].classList.remove('chosen');
            keyButtons[i].disabled = false;
        }
        missed = 0;
        $heart.attr('src', 'images/liveHeart.png');
    }
});


//randomly choose a phrase from the phrases array and split that phrase into a new array of characters. then return the new character array.
function getRandomPhraseAsArray(arr) {
    let pLength = arr.length;
    let randomP = Math.floor(Math.random() *  pLength);
    let thisP = arr[randomP];
    let characterArr= thisP.split('');
    return characterArr;
} 

//function that loops through an array of characters. Inside the loop, for each character in the array, reate a list item, put the character inside of the list item, and append that list item to the #phrase ul in the HTML. If the character in the array is a letter and not a space, the function will add the class “letter” to the list item.
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('li');
        const char = arr[i];
        li.textContent = char;
    
        // adds classes according to character type for css styling
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        // puts characters in the DOM
        phrase.append(li);
    };
}

//function that checks the clicked letter against the phrase displayed in the DOM.
function checkLetter(key) {
    let response = null;
    //querySelector specifically for li with .letter class
    let letterArr = phrase.querySelectorAll('li.letter');
    for (i = 0; i < letterArr.length; i += 1) {
        const letter = letterArr[i].textContent.toLowerCase();
        if (letter === key.textContent) {
            //shows the clicked letter in the phrase
            letterArr[i].classList.add('show'); 
            response = letter;
        }
    }
    return response; 
}

// adds event listener to keyboard buttons and uses the checkletter function. 
qwerty.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        //adds chosen CSS styling to button and disables button
        e.target.classList.add('chosen');
        e.target.disabled = true;

        const letterFound = checkLetter(e.target);
        
        // keeps track of wrong guesses and removes one heart for each wrong guess
        if (letterFound === null) {
            $heart.eq(missed).attr('src', 'images/lostHeart.png');
            missed += 1;
        }
    }
    checkWin();
});



