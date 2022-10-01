console.log("Hey Virendra Good Morning !");

// let a = 22.00001;
// console.log('you can',a<18?  "not drive" : "drive.");
// console.log("You are",a>22? "elligable": "not elligable.");

/*for(element of "Virendra"){
    console.log(element);
}*/

// let employee = {
//     Name: "Virendra",
//     Id: 1520191629,
//     Sub: "Web Programmng",
//     Course: "Msc-It"
// }
// for(data in employee){
//     console.log("The",data,"Of Employee Is",employee[data],".");
// }

// function avg(x,y){
//     return Math.round((x+y)/2);
// }
// let sub = ()=>{
//     console.log("Hey Virendra How Are You ?");
//     return 243;
// }

// let a = 1;
// let b = 2;
// let c = 3;

// console.log("The average of a and b  = ",avg(a,b));
// console.log("The average of b and c  = ",avg(a,c));
// console.log("The average of a and c  = ",avg(b,c));

/* let v = sub();
console.log(v);

let mult = (p,q)=>{
    return p * q;
} */


// let marks = {
//        Name: "Virendra",
//        Id: 1520191629,
//        class: "Msc-t",
//        sub: "Web progamming !"
// }

// for(i = 0; i<Object.keys.marks[i].length; i++){
//     console.log()
// }

let greet = (a,b)=>{console.log(a+b);}
greet(10,12);
          
let names = "Virendra Pathak";
console.log(names);
console.log('length =',names.length);
console.log(names.slice(1,4));
console.log(names.substring(1,4));
// console.log(names.substr(1,4));
console.log(names.toUpperCase());
console.log(names.toLowerCase());
console.log(names.concat(" Is Good Boy."));
console.log(names.replace('Virendra',"Golu"));

let names1 = "          This is virendra pathak.       ";
// console.log(names1);
// console.log(names1.trim());
// console.log(names1.trimStart());
// console.log(names1.trimEnd());
console.log(names1.replaceAll('This is virendra','Golu'));
console.log(names.charAt(1));
console.log(names.charAt(0));
console.log(names.charCodeAt(0));
console.log(names.indexOf('a'));
console.log(names.lastIndexOf("a"));
console.log(names.split());