/*function add(a, b) {
    let c = a + b;
    console.log(c);
}
add(12, 15);

let sub = function (p, q) {
    let r = p + q;
    console.log(r);
}
sub(43, 32);

let mult = (l, m) => {
    let n = l * m;
    console.log(n);
}
mult(12, 12);

let x = 23;
let y = 11;

let temp;

temp = x;
x = y;
y = temp;
console.log("The value of x after swapping = ", x);
console.log("The value of y after swapping = ", y);

function max(i, j) {
    return (i > j) ? i : j;
}
let number = max(110, 12);
console.log("The maximum number is = ", number);


for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log(`${i} is divisible by 3.`);
    }
}
for (let j = 1; j < 100; j++) {
    if (j % 5 === 0) {
        console.log(`${j} is divisible by 5.`);
    }
}

// function check(a){
    for(let a = 1; a<100; a++){
     console.log((a % 2 === 0) ? a+" even number": a+ " odd number");
}
// }
// check(23);

// const movie = {
//      a : "title",
//      b : 145,
//      c : 2022,
//      d : "parts"
// }
// // console.log(movie);

// function show(obj){
//      for(let key in obj)
//         if(typeof obj[key] == "number")
//         console.log(key,obj[key]);
     
// }
// show(movie);

const film = {
    Name: "Virendra",
    Class: "Msc-It",
    Sub: "Web Programming",
    Id: 15201916229,
    Salary: 13150
}

function show(b){
    for(let a in b){
        if(typeof b[a] === "string"){
            console.log(a,b[a]);
        }
    }
}

show(film); */
// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi Malik";  
// emp.salary=50000;  
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.salary);

// const e = require("express");

// function info(name,id,salary){

// }

// function emp(id,name,salary){  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
      
//     this.changeSalary=changeSalary;  
//     function changeSalary(otherSalary){  
//     this.salary=otherSalary;  
//     }  
//     this.changeName=changeName;  
//     function changeName(otherName){  
//     this.name=otherName;  
//     }  
//     }  
//     let e=new emp(103,"Sonoo Jaiswal",30000);  
//     console.log(e.id+" "+e.name+" "+e.salary);  
//     e.changeSalary(45000);  
//     console.log(e.id+" "+e.name+" "+e.salary);  
//     e.changeName("Virendra Pathak");
//     console.log(e.id+" "+e.name+" "+e.salary);


// const emp = {
//     Name: "Virendra",
//     Id: 1520191629,
//     draw: function(){
//           console.log("Hello Virendra Good Evening !");
//     }
// }
// emp.draw();

function obj(name){
    return{
        // name: "Virendra",
        talk: function(){
            console.log("Hello My Name Is "+name)
        }
    }
}
const name1 = obj("Virendra Pathak.");
name1.talk();

const name2 = obj("Shubham Pathak.");
name2.talk();