for (let i = 0; i <= 25; i ++){

    console.log(`${i} gabo`)

}



//1
for (let i = 0; i <= 100; i++){

    if (i % 2 === 0){

        console.log(i,'is even')

    }
    else if (i % 2 != 0){

        console.log(i,'is odd')

    }

}

//2
let sum = 0
for(let b = 0; b <=30; b++){

    if (b % 2 === 0){

        sum += b

    }

}
console.log(sum)

//3
let num1 = Number(prompt('Number 1: '));
let num2 = Number(prompt('Number 2: '));
for (let i = num1; i <= num2;i++){

    console.log(i)

}