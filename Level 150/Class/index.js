//-------------Class--------------
function Classwork1() {

    class Bank {

        constructor(name, balance, surname) {
            this.name = name
            this.balance = balance
            this.surname = surname

        }

        deposit() {
            let amount = prompt('Enter amount to deposit: ')
            console.log(`${amount}$ is deposited`)
            this.balance += Number(amount)
        }

        withdraw() {
            let amount_minus = prompt('Enter amount to add to balance: ')
            this.balance -= Number(amount_minus)
            console.log(`${amount_minus}$ is withdrawed`)
            console.log(`${this.balance}$ is your balance`)
        }


    }
    let acc = new Bank('gabo', 50, 'dumbadze')
    acc.deposit()
    acc.withdraw()

}

function Classwor2(){

    class Car{

        constructor(brand){
            this.brand = brand
        }

        present(){
            return 'i have a ' + this.brand
        }

    }
        
    class Model extends Car{

        constructor(brand,mod){
            super(brand)
            this.mod = mod
        }

        show(){
            console.log(this.present() + ' it is a ' + this.mod)
        }

    }
    let info = new Model('bmw','m5')
    info.show()
} 
Classwor2()
