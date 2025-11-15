//5)გვერდზე იყოს 5 <li>.
//მიწვდი მესამე li ს
//და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:


let list = document.getElementsByTagName('li')

list[2].textContent = ''

console.log(list[2])