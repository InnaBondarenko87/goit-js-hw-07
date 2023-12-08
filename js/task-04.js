const loginFormEl = document.querySelector(".login-form");
const btnEl = document.querySelector("button");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = loginFormEl.email.value.trim();
  const passwordlValue = loginFormEl.password.value.trim();

  if (!emailValue || !passwordlValue) {
    alert("All form fields must be filled in");
    return;
  }
  const formText = {
    email: emailValue,
    password: passwordlValue,
  };
  console.log(formText);
  loginFormEl.reset();
});

btnEl.style.backgroundColor = "#4E75FF";
btnEl.style.borderRadius = "8px";
btnEl.style.width = "86px";
btnEl.style.height = "40px";
btnEl.style.border = "none";
loginFormEl.style.borderRadius = "8px";
loginFormEl.style.width = "360px";
loginFormEl.style.height = "40px";
