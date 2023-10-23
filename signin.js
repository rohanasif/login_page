const signInBtn = document.getElementById("signInBtn");
signInBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const allData = JSON.parse(localStorage.getItem("data"));
  if (allData) {
    let isSignedIn = false;
    for (const user of allData) {
      if (user.email === email && user.password === password) {
        isSignedIn = true;
        break;
      }
    }
    if (isSignedIn) {
      alert("You are signed in");
    } else {
      alert("Email or password is incorrect");
    }
  } else {
    alert("No user found");
  }
});
