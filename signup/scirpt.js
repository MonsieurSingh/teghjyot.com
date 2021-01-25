const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");

var loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn){
  loggedIn = false;
} else if (loggedIn) {
  loggedIn = true;
  window.location.replace('../profile/');
}

var db;

fetch('../login/data.json')
  .then(res => res.json())
  .then(data => {
    db = data;
  })

signupButton.addEventListener('click', (e) => {
  const username = signupForm.querySelector('.username').value;
  const password = signupForm.querySelector('.password').value;
  var json = `"${username}": {
    "username": "${username}",
    "password": "${password}"
  },`

  writeFile('../login/data.json', JSON.parse(json), err => {
    if (err)
      return console.log(err);
  })

})