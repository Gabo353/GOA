let form = document.getElementById('form')
let li = document.getElementsByTagName('li')

form.addEventListener('submit', function (event) {

    event.preventDefault()

    let name = event.target.name.value
    let surname = event.target.surname.value
    let age = event.target.age.value

    for (let i = 0; i < li.length; i++) {

        li[i] += ' ' += name
        li[i] += ' ' += surname
        li[i] += ' ' += age

    }

})
