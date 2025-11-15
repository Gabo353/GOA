//4)გვერდზე გქონდეს სამი <p> ტეგი.
//JS-ით getElementsByTagName("p") გამოიტანე პირველი <p> და
//მისი textContent-ი შეცვალე --> "khachapuri" ით .გამოიყენე textCXontent

let paragraph = document.getElementsByTagName("p")

console.log(paragraph[0])

paragraph[0].textContent = 'khachapuri'