let start = Number(prompt('First number:'));
let end = Number(prompt('Second number:'));

function loop() {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i, 'even');
        } else {
            console.log(i, 'odd');
        }
    }
}

loop();
    