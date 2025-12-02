// HTML-ში შექმენით ფორმა სადაც გექნებათ სამი input ველი, სახელისთვის, გვარისთვის და ასაკისთვის. submit-ღილაკის გამოყენებით გააგზავნეთ შეყვანილი ინფორმაცია რომელიც გამოჩნდება ლისტში, თითოეული გაგზავნის შემდეგ უნდა დაემატოს ახალი ლისტი სადაც გამოიტანთ იმ ინფორმაციას რაც input-ში შეიყვანეთ. ყოველი submit ღილაკზე დაჭერის შემდეგ უნდა იქმნებოდეს ახალი ლისტი. ეს ყველაფერი გაალამაზეთ CSS-ის გამოყენებით

let form = document.getElementById('form')
document.addEventListener('submit', function(e) {
    e.preventDefault()
    let list_name = ['Name: ', 'Surname: ', 'Age: ']
    let arr = [e.target.name.value,e.target.surname.value,e.target.age.value]
    let ul = document.createElement('ul')
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.textContent = `${list_name[i]}${arr[i]}`
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
})