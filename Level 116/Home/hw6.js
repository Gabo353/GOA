//6)გვერდზე იყოს ორი <p>.
//JS-ით გაცვალე ერთმანეთის textContent-ები
//(პირველის ტექსტი გახდეს მეორის და პირიქით).

let paragraph_2 = document.getElementsByTagName('p')

let first = paragraph_2[0].textContent
paragraph_2[0].textContent = paragraph_2[1].textContent  
paragraph_2[1].textContent = first 

console.log(paragraph_2[0],paragraph_2[1])