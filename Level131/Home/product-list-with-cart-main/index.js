let btn = document.getElementsByClassName('button')
let changed_h1 = document.getElementById('h1_2')

let namme = document.getElementsByClassName('text_info_2')
let price = document.getElementsByClassName('price')

let remove_img = document.getElementById('img_special')
let order_main_div = document.getElementById('second_main')
let remove_text = document.getElementsByClassName('notification')[0]

let count = 0

for (let i = 0; i < 10; i++) {

    btn[i].addEventListener('click', function() {

        count += 1
        changed_h1.innerText = `Your Cart (${count})`
        

        let order_div = document.createElement('div')
        let order_info_text_div = document.createElement('div')
        let order_span = document.createElement('span')
        let order_amount = document.createElement('span')
        let order_price = document.createElement('span')
        let order_price_times_amout = document.createElement('span')
        
        order_div.style.height = '70px'
        order_div.style.width = '90%'
        order_div.style.backgroundColor = 'white'
        order_div.style.borderBottom = '1px solid rgba(128, 128, 128, 0.515)'
        order_div.style.marginLeft = '30px'

        order_span.innerText =namme[i].innerText
        order_span.style.fontSize = '18px'
        order_span.style.fontWeight = '500'

        order_amount.innerText = '1x'
        order_amount.style.fontSize = '18px'
        order_amount.style.color = 'rgb(206, 59, 5)'
        order_amount.style.fontWeight = '500'

        order_price.innerHTML = `@${price[i].innerText}` 
        order_price.style.color = 'rgba(128, 128, 128, 0.515)' 
        order_price.style.fontWeight = '500' 

        order_price_times_amout.innerHTML = `${price[i].innerText}` 
        order_price_times_amout.style.color = 'grey' 
        order_price_times_amout.style.fontWeight = '500'

        order_div.style.display = 'flex'
        order_div.style.flexDirection = 'column'
        order_div.style.gap = '8px'

        order_info_text_div.style.display = 'flex'
        order_info_text_div.style.gap = '13px'
        order_info_text_div.style.alignItems = 'center'


        order_div.appendChild(order_span)
        order_info_text_div.appendChild(order_amount)
        order_info_text_div.appendChild(order_price)
        order_info_text_div.appendChild(order_price_times_amout)

        order_div.appendChild(order_info_text_div)
        remove_img.remove()
        remove_text.remove()

        order_main_div.appendChild(order_div)
    
    })      

}