const login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 
        window.location = "../index.html";
        
    auth.signInWithEmailAndPassword(email, password).catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    })
}