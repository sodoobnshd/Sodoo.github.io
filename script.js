document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Anukarius" && password === "Sunshine") {
      window.location.href = href="DEC.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
});
