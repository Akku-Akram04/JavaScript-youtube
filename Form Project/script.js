// Helper function to show message
function showMessage(id, text, type) {
  const msg = document.getElementById(id);
  msg.textContent = text;
  msg.className = `message ${type}`;
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value;

  if (name && email) {
    showMessage(
      "contactMsg",
      `Thank you ${name}! We'll contact you soon.`,
      "success"
    );
    this.reset();
  }
});

// Login Form (Demo - no real auth)
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "admin" && pass === "123456") {
    showMessage("loginMsg", "Login Successful! Welcome back!", "success");
  } else {
    showMessage("loginMsg", "Invalid username or password!", "error");
  }
});

// Registration Form
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const pass1 = document.getElementById("regPass").value;
    const pass2 = document.getElementById("regPass2").value;

    if (pass1 !== pass2) {
      showMessage("regMsg", "Passwords do not match!", "error");
      return;
    }
    if (pass1.length < 6) {
      showMessage("regMsg", "Password must be at least 6 characters!", "error");
      return;
    }

    showMessage("regMsg", "Account created successfully! Welcome!", "success");
    this.reset();
  });

// Newsletter Form
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("newsEmail").value;
    const interest = document.getElementById("interest").value;

    showMessage(
      "newsMsg",
      `Thanks! You'll receive ${interest} updates at ${email}`,
      "success"
    );
    this.reset();
  });
