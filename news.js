// Description: This file contains the code for the news page
let accessibilityOptions = document.getElementById("accessibility--options");
let accessibilityOptionsButton = document.getElementById(
  "accessibilityOptionsButton"
);
accessibilityOptionsButton.addEventListener("click", function () {
  accessibilityOptions.classList.toggle("active");
});

let accessibilityOptionsSave = document.getElementById(
  "accessibility--options__save"
);
accessibilityOptionsSave.addEventListener("click", function () {
  accessibilityOptions.classList.toggle("active");
});

let accessibilityOptionsCancel = document.getElementById(
  "accessibility--options__cancel"
);
accessibilityOptionsCancel.addEventListener("click", function () {
  accessibilityOptions.classList.toggle("active");
});
