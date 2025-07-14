document.addEventListener("DOMContentLoaded", () => {   // Wait for the DOM to load
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const currentPage = window.location.pathname.split("/").pop();

  const protectedPages = [    // List of pages that require authentication
    "view-admin.html",
    "create-event.html",
    "view-user.html",
  ];
  const authPages = ["index.html", "", "register.html"]; // Pages that should redirect if user is already logged in

  // block access to protected pages if not logged in
  if (protectedPages.includes(currentPage) && !user) {
    alert("Acceso denegado. Debes iniciar sesión.");
    window.location.href = "index.html";
    return;
  }

  // Redirect if already logged in
  if (authPages.includes(currentPage) && user) {
    if (user.role === "admin") {
      window.location.href = "./view-admin.html";
    } else {
      window.location.href = "./view-user.html";
    }
    return;
  }

  // Block access for users to admin pages
  if (user) {
    if (
      user.role === "user" &&
      ["view-admin.html", "create-event.html"].includes(currentPage)  // Check if user is trying to access admin pages
    ) {
      alert("Acceso denegado. No tienes permisos.");
      window.location.href = "view-user.html";
    }

    if (user.role === "admin" && currentPage === "view-user.html") { // Check if admin is trying to access user page
      alert("Acceso denegado. No tienes permisos.");
      window.location.href = "view-admin.html";
    }
  }
});
