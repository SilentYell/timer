//Using a variable to replace process.argv and slicing it so that it will start the loop at index 2 which is where the first number argument will be.
const alarm = process.argv.slice(2);

//loop to go through process.argv
for (let time of alarm) {
  let beep = Number(time);

  //if no number then no beep and end.
  //else if number is not a number |or| number is negative ignore/skip but
  if (beep < 0 || isNaN(beep)) {
    continue;
  }

  //setTimout to handle whatever number is [i] * 1000(1 second)
  setTimeout(() => {
    process.stdout.write("\x07");
  }, beep * 1000);
}