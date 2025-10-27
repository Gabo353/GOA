let guess_name = prompt('input name: ');
let wrong_count = 0

while (guess_name.toLocaleLowerCase() !== 'gabo') {

    guess_name = prompt('Try again: ')
    wrong_count += 1

}
console.log(`Nice you got it and it took you ${wrong_count} attempts`)