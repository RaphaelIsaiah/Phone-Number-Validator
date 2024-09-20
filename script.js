// HTML DOM SELECTION
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");

// Check user input functionality
const checkUserInput = () => {
  const inputValue = userInput.value;
  const validUsRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

  if (inputValue === "") {
    // Empty entries
    alert("Please provide a phone number");
    return;
  }

  const resultMsg = `${
    validUsRegex.test(inputValue) ? "Valid" : "Invalid"
  } US number: ${inputValue}`;

  // Clear previous results
  resultDiv.innerHTML = "";

  // Create a new p element
  const pTag = document.createElement("p");

  validUsRegex.test(inputValue)
    ? pTag.classList.add("text-success")
    : pTag.classList.add("text-danger");

  // Add the result message to the p element
  pTag.appendChild(document.createTextNode(resultMsg));

  // Append it to the results div
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
};

// Clear results functionality
const clearResults = () => {
  resultDiv.innerHTML = "";
  resultDiv.classList.add("hidden");
};

// EVENTS
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkUserInput();
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
    userInput.value = "";
  }
});

userInput.addEventListener("input", (e) => {
  // Removes any non-numeric characters
  userInput.value = userInput.value.replace(/[^0-9\s\-\(\)]/g, "");
});

clearBtn.addEventListener("click", (e) => {
  clearResults();
});
