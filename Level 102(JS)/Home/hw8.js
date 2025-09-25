let last_end = Number(prompt('yey last end:'));

let even_count = 0;
let odd_count = 0;

function counting_odds_and_evens(endibidi) {

    for(let h = 1; h <= endibidi;h++) {

        if (h % 2 === 0) {

            even_count += 1

        }
        else {

            odd_count += 1

        }
    }
    console.log('even:',even_count)
    console.log('odd:',odd_count)
}
counting_odds_and_evens(last_end);