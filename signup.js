const signUpBtn = document.getElementById("signUpBtn");
const allData = [];

signUpBtn.addEventListener("click", (e) => {
  const name = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  let data = JSON.parse(localStorage.getItem("data"));

  let isDuplicateEmail = false;

  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        isDuplicateEmail = true;
        break;
      }
    }
  }

  if (isDuplicateEmail) {
    alert("Email already exists");
  } else {
    if (password === repeatPassword) {
      if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)
      ) {
        const userData = {
          name: name,
          email: email,
          password: password,
        };
        allData.push(userData);
        localStorage.setItem("data", JSON.stringify(allData));
        alert("You're signed up");
      } else {
        let errorMessage = "Password must meet the following criteria:\n";
        errorMessage += "- At least 8 characters long\n";
        errorMessage += "- At least one uppercase letter\n";
        errorMessage += "- At least one number\n";
        errorMessage += "- At least one special character (!@#$%^&*)";
        alert(errorMessage);
      }
    } else {
      alert("Passwords don't match");
    }
  }
});
