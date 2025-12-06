// 1) შექმენი კონსტრუქტორი სახელიად Cars რომელიც პარამეტრად მიიღებს მანქანის ბრენდს და გამოშვების წელს, შექმენი ასეთი 3 მანქანა.

function Cars(brand,year) {

    this.brand = brand
    this.year = year

}

console.log(new Cars('bmw',2011))
console.log(new Cars('mercedes',2016))
console.log(new Cars('audi',2022))