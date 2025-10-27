let users_num3 = Number(prompt('Your first number: '));
let users_num4 = Number(prompt('Your second number: '));
let even_count = 0
for (let b = users_num3;b <= users_num4; b++){

    if (b % 2 === 0){

        even_count += 1

    }

}
console.log(`there are ${even_count} even numbers`)