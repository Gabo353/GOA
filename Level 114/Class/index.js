let person = {

    name : 'gabo',
    age : 14,
    location : 'batumi'

}

for (let i in person) {

    console.log('keys:',i)
    console.log('Values:',person[i])

}

console.log('0-------------------0')

let car = {

    year : 1995,
    milage : 'ar daetia',
    func : function naw(){

        return `${this.year} is ${this.milage}`

    }
}
console.log(car.func())