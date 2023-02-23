// LOGIN VALIDATION
function login() {
  if (
    !document.forms["loginForm"]["email"].value == "" &&
    !document.forms["loginForm"]["password"].value == ""
  ) {
    alert("Login Successful!");
    document.forms["loginForm"]["email"]["password"].focus();
    return false;
  }
}
// SIGN UP VALIDATION
function signup() {
  if (
    !document.forms["signupForm"]["email"].value == "" &&
    !document.forms["signupForm"]["password"].value == "" &&
    !document.forms["signupForm"]["confirmpass"].value == ""
  ) {
    alert("Your Account Registration Was Successful!");
    document.forms["signup"]["email"]["password"].focus();
    return false;
  }
}
function sendMessage() {
  if (
    !document.forms["messageForm"]["userName"].value == "" &&
    !document.forms["messageForm"]["userEmail"].value == "" &&
    !document.forms["messageForm"]["userMessage"].value == ""
  ) {
    alert("Thank You For Your Feedback!");
    document.forms["messageForm"]["userName"]["userEmail"][
      "userMessage"
    ].focus();
    return false;
  }
}
