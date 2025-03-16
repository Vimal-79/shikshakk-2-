 
  //check phone no. validity

  function validateForm(){
    const mobile = document.getElementById("mobile").value;
    const name = document.getElementById("name").value;



    if(mobile.length !== 10){
        alert("mobile no. is wrong")
        return false;
        }

    if(name.length <= 3){
        alert("name is too short")
        return false;
    }
}



  
  
  
  
  
    // Google Login function
function googleLogin() {
    // Redirect to Google OAuth login
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email&response_type=code";
}

// Facebook Login function
function facebookLogin() {
    // Redirect to Facebook OAuth login
    window.location.href = "https://www.facebook.com/v2.8/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email";
}