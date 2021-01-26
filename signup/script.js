const signupForm = document.getElementById("sign-up-form");
const signupButton = document.getElementById("sign-up-form-submit");

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
  e.preventDefault();
  const username = signupForm.querySelector('.username').value;
  const password = signupForm.querySelector('.password').value;
  

  // loggedIn = true;
  localStorage.setItem("username", username.toString());
  localStorage.setItem("password", password.toString());
  // localStorage.setItem("loggedIn", loggedIn);

  window.location.replace('../profile');

})