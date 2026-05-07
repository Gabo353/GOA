// 5)წინა დავალებას დაამატე:
// დავალება:
// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს.

//----------------4---------------
// TODO app --- > input + add button
// დავალება:
// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

let btn_sub = document.getElementById('submit')
let btn_ref = document.getElementById('refresh')
let input = document.getElementById('input')
let ul = document.getElementById('ul')
let arr = []
let task_strings = ''

btn_sub.addEventListener('click', function () {

    if (input.value.length === 0) { return; }
    let div = document.createElement('div')
    let remove = document.createElement('button')
    div.innerText = input.value
    ul.style.display = 'flex'
    remove.innerText = 'remove'
    remove.id = 'remove_btn'
    arr.push(div.innerText)
    input.value = ''
    let current_task = arr[arr.length - 1]
    task_strings += current_task + ','

    console.log(task_strings)

    localStorage.setItem('taskList', task_strings)

    btn_ref.addEventListener('click', function () {
        ul.append(div, remove)
        document.body.append(div)
    })
    remove.addEventListener('click', function () {
        div.remove()
        remove.remove()
        let match_index = arr.indexOf(div.innerText)
        if (match_index !== -1) {
            arr.splice(match_index, 1)
        }
        localStorage.setItem('taskList', task_strings)
    })
})  
