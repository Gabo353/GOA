let btn = document.getElementsByClassName('button')
let remove_img = document.getElementsByClassName('added_icon')
let remove_img_2 = document.getElementById('img_special')
let remove_span = document.getElementsByClassName('notification')[0]
let product_counter = document.getElementById('h1_2')
let product_list = document.getElementById('second_main')
let totalCount = 0

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let count = 1
    this.style.backgroundColor = 'rgb(206, 59, 5)'
    this.style.color = 'white'
    this.textContent = ''
    this.style.display = 'flex'

    

    let count_span = document.createElement('span')
    count_span.textContent = ''
    this.appendChild(count_span)

    let plus = document.createElement('div')
    plus.textContent = `+`
    plus.id = 'plus_btn'
    plus.style.border = '1px solid white'
    plus.style.borderRadius = '50px'
    plus.style.width = '20px'
    plus.style.height = '20px'
    plus.style.display = 'flex'
    plus.style.alignContent = 'center'
    plus.style.justifyContent = 'center'
    plus.style.flexFlow = 'center'
    plus.style.position = 'absolute'
    plus.style.right = '20%'
    
    let minus = document.createElement('div')
    minus.textContent = `-`
    minus.id = 'minus_btn'
    minus.style.border = '1px solid white'
    minus.style.borderRadius = '50px'
    minus.style.width = '20px'
    minus.style.height = '20px'
    minus.style.display = 'flex'
    minus.style.alignContent = 'center'
    minus.style.justifyContent = 'center'
    minus.style.position = 'absolute'
    minus.style.left = '20%'

    btn[i].appendChild(plus)
    btn[i].appendChild(minus)
    
    remove_img_2.remove()
    remove_span.remove()
    

    plus.addEventListener('click', function (e) {
      e.stopPropagation()
      count++
      totalCount++
      count_span.textContent = count
      product_counter.innerText = `Your cart(${totalCount})`
    })

    minus.addEventListener('click', function (e) {
      e.stopPropagation()
      if (count > 1) {
        count--
        totalCount--
        count_span.textContent = count
        product_counter.innerText = `Your cart(${totalCount})`
      }
    })
    
    totalCount += 1

    let product_list_object = {

      'Waffle with Berries':0,
      'Vanilla Bean Creme Brulee':0,
      'Macaron Mix of Five':0,
      'Classic Tiramisu':0,
      'Pistachio Baklava':0,
      'Lemon Meringue Pie':0,
      'Red Velvet Cake':0,
      'Salted Caramel Brownie':0,
      'Vanila Panna Cotta':0

    }
    let products = Object.keys(product_list_object)
    let products_amount = Object.values(product_list_object)

    console.log(products[i])
    
  })
}