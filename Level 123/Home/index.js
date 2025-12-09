// შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის, ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს, ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს


let inputs = document.getElementsByTagName('input')
let btn = document.getElementById('btn')
let body = document.body

btn.addEventListener('click', function (e) {
   
    e.preventDefault()
    function Cv(name, age, job) {

        this.name = name
        this.age = age
        this.job = job
        this.info = function () {

            return `${name} - ${job}`

        }

    }
    let cv_1 = new Cv(inputs[0].value, inputs[1].value, inputs[2].value)
    console.log(cv_1.info())
    let new_div = document.createElement('div')
    let in_div_paragraph = document.createElement('h2')

    in_div_paragraph.innerText = cv_1.info()
    new_div.appendChild(in_div_paragraph)
    body.appendChild(new_div)

})