const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers();//getting local storage info
    oldData.push(user);
    let val = JSON.stringify(oldData);//creating the string
    //console.log(user);
    //console.log(val);
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    //get the values from the LS
    let data = localStorage.getItem(STORE_KEY);
    console.log(data); // <-JSON

    if(!data){// is not data?
        return []; // creating the array
    }else{//we have data
        let list = JSON.parse(data); // parsing JSON to obj
        console.log(list);
        return list;
    } 
}