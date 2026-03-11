let input = document.getElementById('main_txt')
let word_count = document.getElementById('counter')
let word_left = document.getElementById('left')



let left = 0
let total = 0

input.addEventListener('input', function(){

    

    left = 50 - input.value.length
    total = 0 + input.value.length

    if (total > 50){
        count.innerText = 'Reached limit'
        return;
    }
    console.log(total)

    word_count.innerText = `Total Charaters: ${total}`
    word_left.innerText = `Total Charaters: ${left}`

})