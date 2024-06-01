let max = prompt("Enter the maximum range")
let guess = prompt("Guess the number");
guess = guess.trim().toLowerCase();
let randNum = Math.floor((Math.random() *max)+1);

while (true) {
    if(guess == "quit") {
        break;
    } else if(guess > randNum) {
        console.log(`You guess ${guess}`);
        console.log("Enter less");
        guess = prompt("Guess the number");
    } else if(guess < randNum) {
        console.log(`You guess ${guess}`);
        console.log("Enter more");
        guess = prompt("Guess the number");
    } else if(guess == randNum) {
        console.log("Number is correct.");
        break;
    } else {
        console.log("Enter between 1 to 100");
        guess = prompt("Guess the number");
    }
}