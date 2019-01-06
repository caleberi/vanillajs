/*
GAME FUNCTION:
    - Player must guess a number between a min and max
    - Player gets a certain  amount of guesses
    - Notify  player of guesses remaining 
    - Notify the player of the correct answer if loose
    - Let player choose to play again

*/
let $ = document;

// game values
    let min =  1,
        max =  10,
        winningNum =  getWinningNum(min,max),
        guessesLeft = 3;



// UI Element
const game = $.querySelector('#game'),
      minNum =  $.querySelector('.min-num')
      maxNum =  $.querySelector('.max-num')
      guessBtn =  $.querySelector('#guess-btn')
      guessInput =  $.querySelector('#guess-input'),
      message =  $.querySelector('.message');

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Listen for  guess
guessBtn.addEventListener('click',function () {
    let guess =  parseInt(guessInput.value); 
    //validate
    if (isNaN(guess) ||  guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }
    if (guess === winningNum) {
       
        gameOver(true,`${winningNum} is correct, YOU WIN!`)
       
    }else{
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(true,`Game Over ,you lost .  The correct number was ${winningNum}`)

        }else{
            //Game continues - answer wrong

             // Change border color
             guessInput.style.borderColorb = 'green';

             // clear input
             guessInput.value = '';

            // Tell user it the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }
    }
    
})

// Play again event listener
game.addEventListener('mousedown',(e)=>{
    if (e.target.clasName == 'play-again') {
        window.location.reload()
    }

})


// Game over
function gameOver(won,msg) {
    let color;
     won === true ?  color='green':color='red'
     // Disable input
     guessInput.disabled = true;
     // Change border color
     guessInput.style.borderColor= color;
     // Set text color
     message.style.color = color;
     // Set message
     setMessage(msg)

     // play again 
     guessBtn.value = 'Play Again';
     guessBtn.clasName +=  'play-again';

}

// get winning number
function getWinningNum(min,max){
  return  Math.random()*(max-min+1)+ min
}

// Set message
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}