let button = document.getElementById("button");
let output = document.getElementById("output");
let validEmail = /([a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.+[a-zA-Z0-9-_.]+)/g;

function getEmails() {
  let input = document.getElementById("input").value;
  let mailingList = [];
  mailingList.push(input.match(validEmail));
  console.log(mailingList);
  output.innerHTML = input.match(validEmail);
  console.log("Email found!");
}
button.addEventListener("click", getEmails);
