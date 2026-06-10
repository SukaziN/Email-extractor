let button = document.getElementById("button");
let output = document.getElementById("output");

function getEmails() {
  let input = document.getElementById("input").value;
  console.log(input);
}
button.addEventListener("click", getEmails);
