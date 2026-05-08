const add_btn = document.getElementById('add')
const input_value = document.getElementById('input')
function create_task(){
    if (input_value.value == ''){return}
    let txt_holder = document.createElement('div')
    let img_cont = document.createElement('div')
    let container = document.createElement('div')
    let span = document.createElement('span')
    let check_div = document.createElement('div')
    let edit_btn = document.createElement('img')
    let delete_btn = document.createElement('img')

    container.classList = 'tasks'
    check_div.classList = 'mini_circle'
    span.classList = 'tasks_span'
    edit_btn.src = './edit_square_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png'
    delete_btn.src = './delete_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png'

    span.innerText = input_value.value
    txt_holder.style.display = 'flex'
    txt_holder.style.alignItems = 'center'
    txt_holder.style.alignContent = 'center'
    txt_holder.style.gap = '20px'

    txt_holder.append(check_div,span)
    img_cont.append(edit_btn,delete_btn)
    container.append(txt_holder,img_cont)
    document.body.append(container)
    
    delete_btn.addEventListener('click', function(){
        container.remove()
    })
    check_div.addEventListener('click', function(){
        check_div.style.backgroundColor = '#22c55e'
    })
}

let arr = JSON.parse(localStorage.getItem("task_list")) || []

function add_to_local(){
    if(input_value.value == ''){return}
    let tsk = input_value.value
    arr.push(tsk)   
    localStorage.setItem('task_list', JSON.stringify(arr))
    input_value.value = ''
}
add_btn.addEventListener('click', function(){
    create_task()
    add_to_local()
})
