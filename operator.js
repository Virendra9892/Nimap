console.log("Hey Virendra Good Morning !");

// let a = 10;
// let b = 4;
// Arithmetic operator.
/* console.log(typeof a);
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a ** b = ",a ** b);
console.log("a % b = ",a % b); */
// console.log("a++ = ",a++);
// console.log("++a = ",++a);
// console.log("b-- = ",b--);
// console.log("--b = ",--b);

// Asignment operator 

// console.log(a+=10);
// console.log(a-=1);
// console.log(a+=10);
// console.log(a+=10);
// console.log(a+=10);
// console.log(a+=10);
// console.log(a+=10);
// console.log(a+=10);
// console.log(a!=2);
// console.log(!true);
// console.log(!false);

// Comparison operator

let p = 10;
let q = "10";

// console.log("p==q = ",p==q);
// console.log("p!=q = ",p!=q);
// console.log("a>b = ",a>b);
// console.log("a<b = ",a<b);
// console.log("p>=q = ",p>=q);

//logical operator


// console.log(p==q&&p>19);
// console.log(p<10 || p<9);

// console.log(!true);
// console.log(!false);

// console.log(p==q);
// console.log(p===q);

let r = prompt("What is your age ?");
console.log(r);

// r = Number.parseInt(r);
// console.log(typeof r);

// let x = alert("Hey Virendra Good Evening !");
// console.log(x);

let month = "jan";
switch(month){
    case "jan":
        console.log("This is jan.");
        break;

    case "feb":
        console.log("This is feb.");
        break;

    case "september":
        console.log("This is september.");
        break;

    default:{
        console.log("Please enter valid month.");
    }
}

let i = 0;
for(i=0; i<5; i++){
    console.log(i);
}

// let arr = new Array(2,4,1,3,"Virendra",null,true,undefined,Symbol("i am nice symbol"),BigInt('120'));
let arr = new Array("Virendra","Shubbham","Arpit","Kinjal","Shwetank","Srishti");
console.log(arr);
// console.log(arr.sort);
// arr.push("This is push.");
// console.log(arr);
// console.log('Length = ',arr.length);

// arr.forEach((names)=>{
//     console.log(names,"is good boy.");
// });

for(element of arr){
    console.log("Hi",element,"how are you ?");
}

let friend = {
    Name: "Virendra",
    Id: 1520191629,
    Class: "Msc-It",
    Sub: "Web Programming"
}
// console.log(fr

for(data in friend){
    console.log(`The ${data} Of Employee Is ${friend[data]}.`);
}

// console.log()