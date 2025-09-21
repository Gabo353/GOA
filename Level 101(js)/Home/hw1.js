let users_num1 = Number(prompt('Your number: '));
let count = 0
let count_2 = 0
for (let i = 1; i <= users_num1;i++) {

    if (i % 2 === 0){

        count += 1

    }
    else{

        count_2 += 1

    }
}
console.log(`there are ${count} even numbers and ${count_2} odd numbers`)


