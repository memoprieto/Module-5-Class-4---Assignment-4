function login(){
    //get the valus from the form
    let inputEmail=$("#txtEmail").val;
    let inputPass=$("#txtPassword").val;
    //use a flag
    let flag=false;
    //get the users from LS
    let userList=readUsers();//this is from StoreManager
    //travel the user list
    for(let i=0;i<userList.length;i++){
        let user=userList[i];
        //compare email and password
        if(user.email==inputEmail && user.password==inputPass){
            flag=true;
            window.location="user.html";
        }
        if(!flag){
            $("alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClasss("hide");
            },3000);
        }
    }
    //compare email and password
}
function init(){
    $("#btnlogin").click(login);
}
windows.onload-init;