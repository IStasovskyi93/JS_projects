let maxDigit = 100;
let randomDigit = Math.floor(Math.random() * (maxDigit + 1));
let userDigit = Number(
  prompt(
    `WELCOME to game "Guess MAGIC digit"\nComputer create digit from 0 to 100.\nGuess it\nInput digit from 0 to ${maxDigit}`
  )
);
let userAnswers = [""];
let guess = false;
while (!guess && userDigit != "q") {
  if (
    userDigit > randomDigit &&
    userDigit >= 0 &&
    userDigit <= maxDigit &&
    userDigit != ""
  ) {
    userAnswers.push(userDigit);
    userDigit = prompt(
      `Atempt ${userAnswers.length}. \nTry else. Your choice ${userDigit} bigger then MAGIC digit. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  } else if (
    userDigit < randomDigit &&
    userDigit >= 0 &&
    userDigit <= maxDigit &&
    userDigit != ""
  ) {
    userAnswers.push(userDigit);
    userDigit = prompt(
      `Atempt ${userAnswers.length}. \nTry else. Your digit ${userDigit} less then MAGIC digit. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  } else if (userDigit == randomDigit) {
    userAnswers.splice(0, 1);
    userAnswers.push(userDigit);
    alert(
      `Gratulation, You are find MAGIC digit ---${randomDigit}--- \nYour attempts score ${userAnswers.length} and you inputed ${userAnswers}.`
    );
    guess = true;
  } else {
    userDigit = prompt(
      `Your last choice ${userDigit} isn\`t correct. \nInput digit from 0 to ${maxDigit} or press q to exit.`
    );
  }
}
