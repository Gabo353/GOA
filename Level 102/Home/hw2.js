let a = prompt('Your first number:');
let b = prompt('Your second number:');
let c = prompt('Your third number:');

function biggest(){

    if (a > b && a > c){

        console.log('Firts number is the biggest and its',a)

    }
    else if (b > a && b > c) {

        console.log('Second is the biggest and its',b)

    }
    else {

        console.log('Third number is the biggest and its',c)

    }
}
biggest();