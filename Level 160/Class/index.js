const add_btn = document.getElementById("add");
const input_value = document.getElementById("input");
let p_count = document.getElementById("count");
const all_delete = document.getElementById("delete_all");
let done_fillter = document.getElementById("done_ones");

let counted_all = 0;
let counted_done = 0;

let arr = JSON.parse(localStorage.getItem("task_list") || "[]");

function create_task(task_text) {
  let txt_holder = document.createElement("div");
  let img_cont = document.createElement("div");
  let container = document.createElement("div");
  let span = document.createElement("span");
  let check_div = document.createElement("div");
  let edit_btn = document.createElement("img");
  let delete_btn = document.createElement("img");

  container.className = "tasks";
  check_div.className = "mini_circle";
  span.className = "tasks_span";

  edit_btn.src = "./edit_square_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png";
  delete_btn.src = "./delete_27dp_WHITE_FILL0_wght400_GRAD0_opsz24.png";

  span.innerText = task_text;

  txt_holder.style.display = "flex";
  txt_holder.style.alignItems = "center";
  txt_holder.style.alignContent = "center";
  txt_holder.style.gap = "20px";

  txt_holder.append(check_div, span);
  img_cont.append(edit_btn, delete_btn);
  container.append(txt_holder, img_cont);

  document.body.append(container);
  counted_all++;
  p_count.innerText = `${counted_done}/${counted_all}`;

  let start = false;

  check_div.addEventListener("click", function () {
    if (!start) {
      check_div.style.backgroundColor = "#22c55e";
      span.style.textDecoration = "line-through";
      check_div.style.transition = "0.3s";
      span.style.color = "grey";

      start = true;
      container.classList.add("done");

      counted_done++;
    } else {
      check_div.style.backgroundColor = "#0d0d0d";
      span.style.textDecoration = "none";
      check_div.style.transition = "0.3s";
      span.style.color = "white";

      start = false;
      container.classList.remove("done");

      counted_done--;
    }


    p_count.innerText = `${counted_done}/${counted_all}`;
  });
  delete_btn.addEventListener("click", function () {
      counted_all--;
      p_count.innerText = `${counted_done}/${counted_all}`;
      let out_of_local = arr.indexOf(span.innerText);
      arr.splice(out_of_local, 1);
      localStorage.setItem("task_list", JSON.stringify(arr));
      container.remove();
      if (container.classList.contains('done')){
        console.log('yep')
        counted_done--
        p_count.innerText = `${counted_done}/${counted_all}`;
      }
      else{
        console.log('nah')
      }
  });
  edit_btn.addEventListener("click", function () {
    let new_btn = document.createElement("button");
    let new_input = document.createElement("input");
    new_btn.className = "done_btn";
    new_input.className = "done_input";
    new_btn.innerText = "done";
    new_input.value = span.innerText;
    span.style.display = "none";
    delete_btn.style.display = "none";
    edit_btn.style.display = "none";
    container.append(new_input, new_btn);
    let new_to_local = arr.indexOf(span.innerText);
    new_btn.addEventListener("click", function () {
      span.innerText = new_input.value;
      arr[new_to_local] = new_input.value;
      localStorage.setItem("task_list", JSON.stringify(arr));
      new_input.remove();
      new_btn.remove();
      span.style.display = "inline";
      delete_btn.style.display = "inline";
      edit_btn.style.display = "inline";
    });
  });
}

function add_to_local() {
  if (input_value.value == "") {
    return;
  } else {
    let tsk = input_value.value;
    arr.push(tsk);
    localStorage.setItem("task_list", JSON.stringify(arr));
    input_value.value = "";
  }
}
add_btn.addEventListener("click", function () {
  if (input_value.value == "") {
    return;
  }
  create_task(input_value.value);
  add_to_local();
  console.log(arr);
});
input_value.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    create_task(input_value.value);
    add_to_local();
    console.log(arr);
  }
});
all_delete.addEventListener("click", function () {
  document.querySelectorAll(".tasks").forEach(function (task) {
    task.remove();
  });
  arr = [];
  counted_all = 0;
  counted_done = 0;
  p_count.innerText = `${counted_done}/${counted_all}`;
  localStorage.removeItem("task_list");
});
arr.forEach(function (task) {
  create_task(task);
});
done_fillter.addEventListener("change", function () {
  let all_tasks = document.querySelectorAll(".tasks");
  all_tasks.forEach((task) => {
    if (done_fillter.value == "completed") {
      if (task.classList.contains("done")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    } else if (done_fillter.value == "not completed") {
      if (!task.classList.contains("done")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    } else {
      task.style.display = "flex";
    }
  });
});
