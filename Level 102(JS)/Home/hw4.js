let my_score_1 = prompt('Score 1:');
let my_score_2 = prompt('Score 2:');
let my_score_3 = prompt('Score 3:');

function score(p1,p2,p3) {

    let avarege_score =(p1 + p2 + p3)/3
    if (avarege_score >= 51) {

        console.log('Not fail')

    }
    else {

        console.log('Failed')

    }
}
score(my_score_1,my_score_2,my_score_3);