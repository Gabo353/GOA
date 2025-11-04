let product_1 = {

    name : 'gabo',
    age : 14,
    adress : 'Batumi',
    
}
for (let i in product_1) {

    console.log(i, ":" ,product_1[i])

}
product_1.surname = 'dumbadze'
product_1.heigth = '165'

//console.log(product_1)


//delete product_1.name
//delete product_1.age
//delete product_1.adress

//console.log(product_1)
//console.log(Object.keys(product_1))

let values = Object.values(product_1)
let keys = Object.keys(product_1)

//console.log('keys :',keys)
//console.log('Values :',values)

//for (let i = 0; i < values.length; i++) {

//    console.log(values[i])
//    console.log(keys[i])

//}

