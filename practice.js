let student={
    //attr or properties
    name:"Daniel",
    age:99,
    isActive:true,
    //function or methods
    sayHi:function(){
        return "hello";
    },

    hobbies:["Football","Listen music","Play Zelda"],
    address:{
        street:"Palomar",
        zip:"22145",
        city:"San Diego",
        country:"USA"
    }
}


//console.log(student.address);
//document.write(student.address);
//display the address on the console



let products = [];
// let product1={
//    name:"Laptop",
//    description:"HP laptop 14'' core i7",
//    price:200
//}

//constructor is special function
//<---   /// local vars ----->
function Product(n,d,p){
    //this.property
    this.name=n;
    this.description=d;
    this.price=p;
}

let product1 = new Product("Speaker","It does't have suport for iOS",20.50);
let product2 = new Product("Laptop","HP",100.00);


console.log(product1,product2);
//products.push(product1,product2,product3);

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}

//displayNames();