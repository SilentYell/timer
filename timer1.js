//Using a variable to replace process.argv and slicing it so that it will start the loop at index 2 which is where the first number argument will be.
const alarm = process.argv.slice(2);

//loop to go through process.argv

//if no number then no beep and end.

//else if number is not a number |or| number is negative ignore/skip but

//setTimout to handle whatever number is [i] * 1000(1 second)