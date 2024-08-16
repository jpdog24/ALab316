const app = document.getElementById('app')
// const gamebox = document.createElement('table')

const randomNumber =Math.trunc(Math.random()*100+1)
console.log(randomNumber);


//create prompt for user to guess
let guess
console.log(guess);
let output = ''
// setTimeout(() => {
//     console.log("This is a throwaway message");
    
// },2000)

window.alert('Welcome! Please guess a number between 1-100')

do{
    guess =parseInt(window.prompt("Pick a number between 1-100"))
    if(randomNumber===guess){
        output= `Super Smart!`

    } else {
        output= `Sorry number was ${randomNumber} please try again`

    }

    window.alert(output)


} while (randomNumber !== guess); 
    
