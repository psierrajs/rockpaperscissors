# Step 1: Setup the project structure
1. Create a new Git repository for your project.
2. Create a blank HTML document with a script tag.
3. Check if JavaScript is linked correctly:
  -  Write console.log("Hello World") in JavaScript.
  - Check if “Hello World” is logged in the browser console once you open your webpage.

It’s best practice to link to an external JavaScript file inside this script tag. Using an external JavaScript file keeps your HTML file clean and organized.

You don’t have to write additional code in the HTML file. This game is played entirely via the console.

# Step 2: Write the logic to get the computer choice
Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

1. Create a new function named getComputerChoice.
2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    - Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

