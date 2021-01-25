const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

var db;

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    db = data
  })

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.querySelector('.username').value;
  const password = loginForm.querySelector('.password').value;

  var loggedIn = false;

  for (let i = 0; i < db.loginDetails.length; i++) {
    if (db.loginDetails[i].includes("♩")) {
      var splitArr = db.loginDetails[i].split("♩");
      if (username == splitArr[0] && password == splitArr[1]) {
        console.log('Successfully Logged in.');
        loggedIn = true;
        return;
      }
    }
  }

  if (!loggedIn) {
    console.log("KILL ME");
  }
  
  

    
})