let number = 5;

if (number > 0){
    console.log ("your number is positive.")
} else if (number < 0){
    console.log ("your number is negative.")
} else {
    console.log ("your number is 0.")
}

let day = number

switch (day) {
    case 1:
        console.log("It is Sunday today")
        break;
     case 2:
        console.log("It is Monday today")
        break;
     case 3:
        console.log("It is Tuesday today")
         break;
    case 4:
        console.log("It is Wednesday today")
        break;
    case 5:
        console.log("It is Thursday today")
        break;
    case 6:
        console.log("It is Friday today")
        break;
     case 7:
        console.log("It is Saturday today")
        break;
}

for (let i = 1; i <= 5; i++){
    console.log(i)
}

let x = 1;
while (x <= 5){
    console.log(x); x++
}

let j = 1;
do {
    console.log(j); j++;
} while (j <= 5);

let localVar = "I am global!";
function scopeExample(){
    let localVar = "I am local!";
}
console.log(localVar);