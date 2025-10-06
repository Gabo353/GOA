let g_names = ['gela','murka','kaxa','gio','gurda'];

function find_g(g_arr) {

    for (let i = 0; i < g_arr.length; i++) {

        if (g_arr[i][0] === 'g') {

            g_arr[i] = false

        }

    }       
    console.log(g_arr)
}

find_g(g_names)

console.log('----------------------------------')
