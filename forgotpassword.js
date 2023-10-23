const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newEmail = document.getElementById("new-email").value;
  const newPassword = document.getElementById("new-password").value;
  const repeatNew = document.getElementById("repeat-new").value;

  const allData = JSON.parse(localStorage.getItem("data"));

  if (allData) {
    for (user of allData) {
      if (user.email === newEmail) {
        if (
          newPassword.length >= 8 &&
          /[A-Z]/.test(newPassword) &&
          /[0-9]/.test(newPassword) &&
          /[!@#$%^&*]/.test(newPassword)
        ) {
          if (newPassword === repeatNew) {
            user.password = newPassword;
            localStorage.setItem("data", JSON.stringify(allData));
            alert("Password updated");
          } else {
            alert("Passwords don't match");
          }
        } else {
          let errorMessage = "New password must meet the following criteria:\n";
          errorMessage += "- At least 8 characters long\n";
          errorMessage += "- At least one uppercase letter\n";
          errorMessage += "- At least one number\n";
          errorMessage += "- At least one special character (!@#$%^&*)";
          alert(errorMessage);
        }
        break;
      } else {
        alert("Email not found or incorrect password!");
      }
    }
  } else {
    alert("Sign up first!");
  }
});
