let user_input = document.getElementById('main_input')
let user_div = document.getElementById('conteinment')
let user_btn = document.getElementById('sub')
let count = 0

class Notes {

    constructor() {
        this.note = user_input.value
    }

    list_add() {
        let span = document.createElement('span')
        span.classList = 'note_info'
        span.innerText = this.note

        let inner_div = document.createElement('div')
        inner_div.classList = 'note_div'

        let delete_btn = document.createElement('button')
        delete_btn.classList = 'delete_btn'
        delete_btn.innerText = 'remove'

        let count_num = document.createElement('span')
        count_num.classList = 'count_span'
        count_num.innerText = `${count}.`

        let check_box = document.createElement('div')
        check_box.classList = "check_box"
        
        check_box.addEventListener('click', function(){
            check_box.style.backgroundColor = 'lime'
            if (check_box.style.backgroundColor === 'lime'){
                span.style.textDecoration = 'line-through'
                span.style.color = 'grey'
            }
        })

        

        inner_div.append(check_box, count_num, span, delete_btn)

        delete_btn.addEventListener('click', function () {
            inner_div.remove()
            count--
        })
        if (!user_input.value) return;

        user_div.append(inner_div)
    }


}

user_btn.addEventListener('click', function () {
    const note_info = new Notes()
    count++
    note_info.list_add()
})