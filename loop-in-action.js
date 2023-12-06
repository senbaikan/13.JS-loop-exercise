// First Example: Sum numbers
const calculateSumButton =
  document.getElementById("calculated-sum").previousElementSibling;

function calculateSum() {
  const userInputNumber = document.getElementById("user-number").value;
  sumUpTONumber = 0;

  for (i = 0; i <= userInputNumber; i++) {
    sumUpTONumber = sumUpTONumber + i;
  }
  const sumResultElement = document.getElementById("calculated-sum");
  sumResultElement.textContent = sumUpTONumber;
  sumResultElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

// Second Example: Highlight Links
const highlightLinksButtonElement =
  document.getElementById("highlight-links").children[1];

// add 'highlight' class in all 'a' in #highlight-links section
function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    // call all anchor elements each
    anchorElement.classList.add("highlight"); // add highlight class on each anchor elements
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third Example: Display use data
const dummyUserData = {
  firstName: "Mark",
  lastName: "Hong",
  age: 42,
};

const displayUserDataElement = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataElement.addEventListener("click", displayUserData);

// Last Example: Statistics Roll Dice
const rollTheDiceButtonElement = document.querySelector("#statistics button");

function diceRoller() {
  return Math.floor(Math.random() * 6) + 1; // generate 0~1 number excluding 1, drop decimal numbers
}

function diceRollCounter() {
  const userTargetNumberElement = document.getElementById("user-target-number");
  const diceRollsOutputListElement = document.getElementById("dice-rolls");
  diceRollsOutputListElement.innerHTML = "";

  let loopStopper = false;
  let loopCounter = 0;

  while (!loopStopper) {
    const diceNumber = diceRoller();
    // if (diceNumber == userTargetNumberElement.value) {
    //   loopStopper = true;
    // }
    loopStopper = diceNumber == userTargetNumberElement.value; // == makes 'true' or 'false'
    loopCounter++;

    const newRollListItemElement = document.createElement("li");
    newRollListItemElement.textContent =
      "Roll " + loopCounter + ": " + diceNumber;
    diceRollsOutputListElement.append(newRollListItemElement);
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  outputTotalRollsElement.innerHTML = "";
  outputTotalRollsElement.append(loopCounter);

  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );
  outputTargetNumberElement.innerHTML = "";
  outputTargetNumberElement.append(userTargetNumberElement.value);
}

rollTheDiceButtonElement.addEventListener("click", diceRollCounter);
