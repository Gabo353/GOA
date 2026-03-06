//-----------------------------1--------------------------
// შექმენით სტუდენტის ობიექტი, რომელსაც აქვს სახელი, ასაკი და ფაკულტეტი.
// დავალება: დესტრუქციის გამოყენებით შექმენი ცალკე ცვლადები თითოეული კუთვნილებისთვის.

let student = {

    name : 'gabo',
    age : 19,
    studied_in : 'programming'

}

let {name, age, studied_in} = student

//-----------------------------2--------------------------
// შექმენით მანქანის ობიექტი, რომელსაც აქვს ბრენდი, მოდელი და გამოშვების წელი.
// დავალება: დესტრუქციის დროს ბრენდისა და მოდელის ცვლადებს შეუცვალე სახელები, ხოლო წელი უცვლელად დატოვე.

let car = {
    brand: 'Toyota',
    model: 'Prado',
    year: 2025
}

let {brand : brand_info, model : model_info, year} = car


//-----------------------------3--------------------------
// შექმენით მომხმარებლის ობიექტი, რომელსაც აქვს მომხმარებლის სახელი და ელფოსტა, მაგრამ არ აქვს როლი.
// დავალება: დესტრუქციის დროს დაამატე ცვლადი role ნაგულისხმევი მნიშვნელობით (მაგალითად: "guest"), იმ შემთხვევისთვის თუ ობიექტში არ არსებობს.

let user = {

    user_name : 'Gabo',
    user_email : 'example@gmail.com',
    

}

let {user_name, user_email, roll = 'guest'} = user


//-----------------------------4--------------------------
// შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.

let person = {

    name_person : 'Gabo',
    username_person : 'dumbadze',
    address_person : {

        city : 'batumi',
        country : 'georgia'

    }

}

let {name_person, username_person, address_person} = person
let {city, country} = address_person

//-----------------------------5--------------------------
// შექმენით პროდუქტის ობიექტი, რომელსაც აქვს დასახელება, ფასი და ვალუტა.
// დავალება: შექმენი ფუნქცია, რომელიც პარამეტრში მიიღებს ამ ობიექტს და დესტრუქციის გამოყენებით გამოიყენებს მის კუთვნილებას პროდუქტის ინფორმაციის გამოსატანად.

let product = {

    product_name : 'Milk',
    product_price : '2.99',
    product_money_type : 'Dollar',
    product_amount : '15',

}

function product_info(){

    let {product_name, product_price, product_money_type,product_amount} = product

    console.log(`The product is ${product_name}. It costs ${product_price} and is paid by ${product_money_type}. Totoal sold: ${Number(product_price) * Number(product_amount)}`)

}

product_info()