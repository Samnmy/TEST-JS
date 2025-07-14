document.addEventListener("DOMContentLoaded", function () { // Wait for the DOM to load
  const form = document.querySelector("form");  // Select the form element
  const passwordInput = document.getElementById("password");  // Get the password input field
  const confirmPasswordInput = document.getElementById("confirmPassword");  // Get the confirm password input field

  form.addEventListener("submit", function (event) {  // Add event listener for form submission
    if (passwordInput.value !== confirmPasswordInput.value) { // Check if passwords match
      event.preventDefault(); // Detiene el envío del formulario
      alert("Las contraseñas no coinciden. Por favor, verifica.");  // Show alert if passwords do not match
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {  // Wait for the DOM to load
  const registerForm = document.getElementById("registerForm"); // Get the registration form
  const loginForm = document.querySelector("form"); // using a generic selector for login form
  const isRegisterPage = window.location.pathname.includes("register.html");  // Check if the current page is the registration page

  if (isRegisterPage) { // If on the registration page
    registerForm.addEventListener("submit", async function (event) {  // Add event listener for registration form submission
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("fullName").value.trim();  // Get the full name input
      const email = document.getElementById("email").value.trim();  // Get the email input
      const password = document.getElementById("password").value; // Get the password input
      const confirmPassword = document.getElementById("confirmPassword").value; // Get the confirm password input

      if (password !== confirmPassword) { // Check if passwords match
        alert("Las contraseñas no coinciden."); // Show alert if passwords do not match
        return; // Exit if passwords do not match
      }

      const res = await fetch("http://localhost:3000/users?email=" + email); // Check if email already exists
      const users = await res.json(); // Parse the response to JSON

      if (users.length > 0) { // If email already exists
        alert("Este correo ya está registrado."); // Show alert if email is already registered
        return; // Exit if email is already registered
      }

      await fetch("http://localhost:3000/users", { // Register new user
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role: "user",
        }),
      });

      alert("Registro exitoso. Ahora puedes iniciar sesión.");  // Notify user of successful registration
      window.location.href = "index.html";  // Redirect to login page after successful registration
    });
  }

  // LOGIN
  if (!isRegisterPage) {
    loginForm.addEventListener("submit", async function (event) {  // Add event listener for login form submission
      event.preventDefault();   // Prevent default form submission

      const email = document.getElementById("email").value.trim();  // Get the email input
      const password = document.getElementById("password").value; // Get the password input

      const res = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`  // Fetch user data based on email and password
      );
      const users = await res.json(); // Parse the response to JSON

      if (users.length === 1) { // If user is found
        localStorage.setItem("loggedInUser", JSON.stringify(users[0])); // Store user data in localStorage
        const user = users[0];  // Get the user data
        if (user.role === "admin") {  // Check if user is an admin
          window.location.href = "./view-admin.html"; // Redirect to admin page if user is an admin
        } else {    // If user is not an admin
          window.location.href = "./view-user.html";  // Redirect to user page if user is not an admin
        }
      }
    });
  }
});
