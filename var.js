// let names = "My Name Is Virendra Pathak.";
// console.log(names);

let a = null;
let b = 112;
let c = true;
let d = BigInt("297") + BigInt("3");
let e = "Virendra Pathak";
let f = Symbol("I am nice symbol.");
let g = undefined;
// console.log(d);
// console.log(typeof f);

let data = {
    Name: "Virendra",
    Class: "Msc-It",
    Id: 1520191629,
    Sub: "Web  Programming."
}
console.log(data["Class"]);


let i = 5;
if(i<1){
    console.log(`${i} is less then 10.`);
}
else{
    console.log('please enter valid number.');
}

let j = "February";
switch(j){
    case "Janauary":
        console.log("This is Janauary.");
        break;

    case "February":
        console.log("This is February.");
        break;

    case "September's":
        console.log("This is September.");
        break;

    default:{
        console.log("The month which you are entered that are not found.");
    }
}


function sum(a,b){
    //   let c = a + b;
    //   console.log("Sum = "+c);
    return a + b;
}
let returnval = sum(112,88);
console.log("Sum = "+returnval);




// let d = 0;
// for(let d = 0; d<10; d++){
//       console.log(d);
// }

// let k = 0;
// while(k<5){
//     console.log(k);
//     k++;
// }

// let l = 7;
// do{
//     console.log(l);
//     l++;
// }while(l<11);

let friend = new Array(1,3,5,2,4,6,"Virendra",null,true,undefined,BigInt('122'),Symbol("i am nice symbol."));
console.log(friend);
// console.log("Lenght = "+friend.length);
// console.log(friend.sort());
friend.push("This is push.");
console.log(friend);
console.log("Lenght = "+friend.length);