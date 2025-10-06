let stringaton_arr = ['wow','faga','kimano','jumano','hai'];

let even_time = []

function count(kai_stringi,ufro_kai) {

    for (let i = 0; i < kai_stringi.length; i++) {

        if (kai_stringi[i].length % 2 == 0) {

            ufro_kai.push(kai_stringi[i])

        }
        else {

            kai_stringi[i] = false

        }
    }
    console.log(kai_stringi)

}
count(stringaton_arr,even_time)

console.log('----------------------------------')
