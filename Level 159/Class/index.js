const add_btn = document.getElementById("add");
const input_value = document.getElementById("input");
let p_count = document.getElementById("count");
const all_delete = document.getElementById('delete_all')

let counted_all = 0;
let counted_done = 0;

let arr = JSON.parse(localStorage.getItem("task_list")) || [];

function create_task() {
  if (input_value.value == "") {
    return;
  }
  let txt_holder = document.createElement("div");
  let img_cont = document.createElement("div");
  let container = document.createElement("div");
  let span = document.createElement("span");
  let check_div = document.createElement("div");
  let edit_btn = document.createElement("img");
  let delete_btn = document.createElement("img");

  container.classList = "tasks";
  check_div.classList = "mini_circle";
  span.classList = "tasks_span";
  edit_btn.src = "./edit_square_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png";
  delete_btn.src = "./delete_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png";

  span.innerText = input_value.value;
  txt_holder.style.display = "flex";
  txt_holder.style.alignItems = "center";
  txt_holder.style.alignContent = "center";
  txt_holder.style.gap = "20px";

  txt_holder.append(check_div, span);
  img_cont.append(edit_btn, delete_btn);
  container.append(txt_holder, img_cont);
  document.body.append(container);

  delete_btn.addEventListener("click", function () {
    counted_all--;
    p_count.innerText = `${counted_done}/${counted_all}`;
    let out_of_local = arr.indexOf(String(span))
    arr.pop(out_of_local)
    container.remove();
  });
  let start = true;
  check_div.addEventListener("click", function () {
    if (!start) {
      check_div.style.backgroundColor = "#22c55e";
      span.style.textDecoration = "line-through";
      check_div.style.transition = "0.3s";
      span.style.color = "grey";
      start = true;
      counted_done--;
    } else {
      check_div.style.backgroundColor = "#0d0d0d";
      span.style.textDecoration = "none";
      check_div.style.transition = "0.3s";
      span.style.color = "white";
      start = false;
      counted_done++;
    }
    p_count.innerText = `${counted_done}/${counted_all}`;
  });
  counted_all++;
  p_count.innerText = `${counted_done}/${counted_all}`;

  edit_btn.addEventListener('click', function (){
    let new_btn = document.createElement('button')
    let new_input = document.createElement('input')

    new_btn.classList = 'done_btn'
    new_btn.innerText = 'done'
    new_input.classList = 'done_input'

    span.style.display = 'none'
    delete_btn.style.display = 'none'
    edit_btn.style.display = 'none'

    container.append(new_input,new_btn)

    new_btn.addEventListener('click', function(){
        span.innerText = new_input.value
        new_input.remove()
        new_btn.remove()
        span.style.display = 'inline'
        delete_btn.style.display = 'inline'
        edit_btn.style.display = 'inline'
        let new_to_local = arr.indexOf(String(span))
        arr[new_to_local] = new_input.value
    })
  })
  all_delete.addEventListener('click', function(){
    container.remove()
    arr = []
  })
}


function add_to_local() {
  if (input_value.value == "") {
    return;
  }
  let tsk = input_value.value;
  arr.push(tsk);
  localStorage.setItem("task_list", JSON.stringify(arr));
  input_value.value = "";
}
add_btn.addEventListener("click", function () {
  create_task();
  add_to_local();
  console.log(arr)
});

input_value.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    create_task();
    add_to_local();
    console.log(arr);
  }
})