const randomNum= Math.floor(Math.random()*100 + 1)

console.log(randomNum);


window.alert(guessNumber(randomNum))



function guessNumber(randomNum){
    let guess = parseInt(window.prompt(`Please guess a number between 1-100`))
    console.log(guess);

    let attempt=1

    let returnmessage
    
    if(! isNaN(guess)){
        while(guess !== randomNum && attempt < 10){
            if(guess < randomNum) {
                returnmessage = `Number is higher than your Number. Please try again`
            } else{
                returnmessage= `Number is lower than your guess. Please try again`
            }
            attempt++
            guess = parseInt(window.prompt(`${returnmessage}, please pick a number between 1-100`))
            console.log(returnmessage);
            console.log(attempt);
            
            
        }
    } else{
        returnmessage=`Please enter a valid number, Restart the game`
    }


if(guess=== randomNum){
    returnmessage= `YOU WIN!`
} else if(attempt=== 10){
    returnmessage= `GameOver`
} else {
    returnmessage = `Please enter a valid number`
}

return returnmessage
    
    
}

console.log(returnmessage);


