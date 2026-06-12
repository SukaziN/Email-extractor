let button = document.getElementById("button");
let output = document.getElementById("output");
let validEmail = /([a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.+[a-zA-Z0-9-_.]+)/g;

function getEmails() {
  let input = document.getElementById("input").value;
  let mailingList = [];
  mailingList.push(input.match(validEmail));
  console.log(mailingList);

  for (let i = 0; i < mailingList.length; i++) {
    let list = mailingList.toString().split(",");
    console.log(list);

    //looping through the array
    // let i= mailingList.indexOf(mailingList); thought the conditional wasn't working because i was defined as 0 in the for loop
    if (list.contains(`${input}`)) {
      //in search of duplicate emails (unsuccessfully)
      console.log("found a duplicate!");
    } else {
      console.log("new email!");
    }
  }
  output.innerHTML = input.match(validEmail);
  console.log("Email found!");
}
button.addEventListener("click", getEmails);
