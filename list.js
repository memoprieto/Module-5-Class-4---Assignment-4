//this fn needs an array
function displayUsers(usersArray){
    let row;
    //travel the array (for)
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        //create the row = `<>${} <>` 
        row=`
            <tr>
                <td>${user.email} </td>
                <td>${user.password} </td>
                <td>${user.firstName} </td>
                <td>${user.color} </td>
            </tr>
        `;
    //append the row to the table
        $("#users").append(row);
    }
    
    
}

function init(){
    console.log("Listing users");
    let users = readUsers();//getting the array

    //<-------is an array------->
    displayUsers(users);
}
window.onload=init;