function showLogin() {
    document.getElementById("registerFormDiv").style.display = "none";
    document.getElementById("loginFormDiv").style.display = "block";
}
function showRegister() {
    document.getElementById("loginFormDiv").style.display = "none";
    document.getElementById("registerFormDiv").style.display = "block";
}
function showWelcome(name) {
    document.getElementById("registerFormDiv").style.display = "none";
    document.getElementById("loginFormDiv").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("userName").innerText = name;
}

// Registration
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    localStorage.setItem("name", document.getElementById("regName").value);
    localStorage.setItem("email", document.getElementById("regEmail").value);
    localStorage.setItem("password", document.getElementById("regPassword").value);
    alert("Registration Successful! Please login.");
    showLogin();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storedName = localStorage.getItem("name");
    let enteredEmail = document.getElementById("loginEmail").value;
    let enteredPassword = document.getElementById("loginPassword").value;

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        showWelcome(storedName);
    } else {
        alert("Invalid credentials. Try again!");
    }
});

// Logout
function logout() {
    document.getElementById("welcome").style.display = "none";
    showLogin();
}