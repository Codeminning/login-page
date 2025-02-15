function validate(){
    var unsername= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if (unsername=="dhyan"&&password=="dhyan"){
        alert("login succesful");
        return false
    }
    else{
        alert("login fail");
    }
}