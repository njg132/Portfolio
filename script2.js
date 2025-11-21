// ==============================
// Live-coding Exercise 1: JavaScript Basics
// ==============================
// GOAL: Practice arrays and loops by logging multiple messages to the console.
// Scenario: We have a list of positive coding reminders to print one by one.
// Steps:
// 1. Create an array of messages (strings).
// 2. Use a for loop to log each message in the console.

// const messages = ["This Is Javascript in action", "My name is Nick", "This is so much fun"];
// for(let i = 0; i < messages.length; i++){
//     console.log(messages[i]);
// }



// ==============================
// Live-coding Exercise 2: Interacting with the DOM
// ==============================
// GOAL: Add interactivity to the webpage by responding to a button click.
// Scenario: When the user clicks the "Say Hello" button, display a message below it.
// Steps:
// 1. Set the button and paragraph elements using document.getElementById() into variables.
// 2. Add an event listener for the "click" event.
// 3. Inside the function, update the paragraph’s textContent.

// const greetBtn = document.getElementById("greetBtn");
// const greetOutput = document.getElementById("greetOutput");

// greetBtn.addEventListener("click", () => {
//     greetOutput.textContent = "'Ello Govna. Welcome to my website";
// });


// ==============================
// Live-coding Exercise 3: Async / Promises
// ==============================
// GOAL: Reveal a hidden message after a short delay using setTimeout().
// Steps:
// 1. Select the button and paragraph and set it to variables
// 2. Add an event listener for "click"
// 3. Show temporary text like “Thinking...”
// 4. After 2 seconds, change it to the final message

// const revealBtn = document.getElementById("revealButton");
// const revealOutput = document.getElementById("revealOutput");

// revealBtn.addEventListener("click", () => {
//     revealOutput.textContent = "Thinking...";
//     setTimeout(() => {
//         revealOutput.textContent = "SURPRISE!";
//     }, 5000);
// });

const header = document.getElementById("wavy-text");
const letters = header.textContent.split('');
header.textContent(' ');

letters.forEach((letter,index) =>{
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = '${index * 01}s';
    header.appendChild(span);
});