






function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(name.length < 3)
    {
        alert("name is too short")
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    alert("Sign-up successful!");
    return true;
}
