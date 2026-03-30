let name_html = document.getElementById('name')
let age_html = document.getElementById('age')

function Classwork1() {

    class User {

        constructor(name, age) {
            this.name = name
            this.age = age
        }

        changeName(Newname) {

            this.name = `Hi im ${Newname}`
            return this.name
        }

        inceaseAge() {

            return `and im ${this.age + 5} - 5 years old`

        }
    }
    let info = new User('gabo', 15)
    info.inceaseAge()
    name_html.innerHTML = info.changeName(prompt('New name: '))
    age_html.innerHTML = info.inceaseAge()
}


let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let div = document.getElementById('div')
let mult = document.getElementById('mult')
let form = document.getElementById('form')
let num_1 = document.getElementById('first_num')
let num_2 = document.getElementById('second_num')
let ans = document.getElementById('ans')

function ClassWork2() {

    class Clac{

        constructor(a, b){
            this.a = a
            this.b = b
        }
        getvalue(num_1, num_2){
            this.a = Number(num_1)
            this.b = Number(num_2)
        }
        plus(){
           return(ans.innerHTML = this.a + this.b)
        }
        minus(){
            return(ans.innerHTML = this.a + this.b)
        }
        mult(){
            return(ans.innerHTML = this.a * this.b)
        }
        div(){
            return(ans.innerHTML = this.a / this.b)
        }
    }
    let m = new Clac()
    plus.addEventListener('click', function() {

        m.a = Number(num_1.value)
        m.b = Number(num_2.value)
        m.getvalue(Number(num_1.value), Number(num_2.value))
        m.plus()
        ans.innerHTML = m.plus()
    })

    minus.addEventListener('click', function() {

        m.a = Number(num_1.value)
        m.b = Number(num_2.value)
        m.getvalue(Number(num_1.value), Number(num_2.value))
        ans.innerHTML = m.minus()
        
    })

    div.addEventListener('click', function() {

        m.a = Number(num_1.value)
        m.b = Number(num_2.value)
        m.getvalue(Number(num_1.value), Number(num_2.value))
        ans.innerHTML = m.div()

    })

    mult.addEventListener('click', function() {

        m.a = Number(num_1.value)
        m.b = Number(num_2.value)
        m.getvalue(Number(num_1.value), Number(num_2.value))
        ans.innerHTML = m.mult()

    })

}
ClassWork2()