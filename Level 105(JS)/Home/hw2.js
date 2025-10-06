let name_arr = ['gabo','jeko','nika'];
let new_name = prompt('New name: ');

function adder(list,add) {

    list.push(add)
    console.log(list)
}

adder(name_arr,new_name)

console.log('----------------------------------')
