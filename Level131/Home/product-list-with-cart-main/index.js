let btn = document.getElementsByClassName('button')
let remove_img = document.getElementsByClassName('added_icon')


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let count = 1
    this.style.backgroundColor = 'rgb(206, 59, 5)'
    this.style.color = 'white'
    this.textContent = ''
    this.style.display = 'flex'
    
    

    let icon = this.getElementsByClassName('added_icon')[0]
    if (icon) {
      icon.remove()
    }

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

    plus.addEventListener('click', function (e) {
      e.stopPropagation();
      count++;
      count_span.textContent = count;
    })

    minus.addEventListener('click', function (e) {
      e.stopPropagation();
      if (count > 1) {
        count--;
        count_span.textContent = count;
      }
    })
  })
}