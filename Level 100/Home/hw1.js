let users_num1 = Number(prompt('Start: '));
let users_num2 = Number(prompt('End: '));
let x = 0
let y = 0
for (let i = users_num1; i <= users_num2; i++) {

    if (i % 2 === 0) {

        x += 1

    }
    else {

        y += 1

    }

}
console.log(`There are ${x} even numbers and ${y} odd numbers`)