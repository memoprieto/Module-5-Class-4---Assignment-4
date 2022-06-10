//object constructor
function User(email,password,fname,lname,age,color){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.color=color;
}
function isValid(user){
    //return false when the user in not valid
    //return true when the user is valid
    let valid=true;
    //add validation for email,password,fname,lname
    if(user.email.length==0){
        valid=false;
        console.log("Please add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add an password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}
function validatePass(){
    console.log("validating pass")
    //get the value of the imput
    let txtPass =$("#txtPassword");

    let password=txtPass.val();
    console.log(password);
    if (password<6){
        txtPass.css("background","#ff9898");
        dispalyError("The password is too short :(")
        //console.log("The password is too short :(")
    }else{
        txtPass.css("background","#64cc66");
        hideError();
    }
    //is the password less than 6 characters (if)
 }
 function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
 }
 function hideError(){
    $("#alertError").addClass("hide");
 }

 //register function
function register(){
    let userName=$("#txtEmail").val();
    let userPass=$("#txtPassword").val();
    let userFirstName= $("#txtFirstName").val();
    let userLastName=$("#txtLastName").val();
    let userAge=$("#txtAge").val();
    let usercolor=$("#selColor").val();
    
     
    //creating the obj
    let newUser=new User(userName,userPass,userFirstName,userLastName,userAge,usercolor);
    if(isValid(newUser)==true){
        //console.log(newUser);
        saveUser(newUser);//thin fn is in the StoreManager
        //clear the inputs
        $("input").val("");
    } 
}

function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
    $("#txtLastName").keypress(function(e){
       if(e.key=="Enter"){
           register();
       }; 
    });
    $("txtPass").keyup(validatePass);
}

window.onload=init;