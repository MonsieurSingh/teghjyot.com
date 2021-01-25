const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");
var loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn){
  loggedIn = false;
  console.log("LOGFALSE");
} else if (loggedIn) {
  loggedIn = true;
  console.log("LOGTRUE");
  window.location.replace('../profile/');
} else {
  console.log(localStorage.getItem("loggedIn"))
}
var db;

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    db = data;
  })

loginButton.addEventListener("click", (e) => {
  const username = loginForm.querySelector('.username').value;
  const password = loginForm.querySelector('.password').value;


  
  var DUsername = db[username.toString()];

  checkUser = (username) => {
    return (username ? username : false);
  }

  checkPssd = (password, username) => {
    return (password == username[0]["password"]) ? true: false;
  }

  var usr = checkUser(DUsername);
  if (usr) {
    var pssd = checkPssd(password, usr);
    if (pssd) {
      console.log(pssd);
      loggedIn = true;
      localStorage.setItem("loggedIn", loggedIn);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.replace('../profile/');
    } else {
      loggedIn = false;
    }
  } else {
    loggedIn = false;
  }


})