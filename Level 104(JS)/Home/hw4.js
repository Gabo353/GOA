let cities = ['Batumi','Tbilisi','Zugdidid','Qobuleti'];

let new_city = prompt('Add city: ');


function unshift(arrrr,qalaqi) {

    console.log('before')
    console.log(arrrr)
    arrrr.unshift(qalaqi)
    console.log('Your city is now add to the list')
    console.log(arrrr)

}

unshift(cities,new_city)

console.log('-----------------------------------------')
