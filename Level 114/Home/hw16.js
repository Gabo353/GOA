//16)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let book_3 = {

    'title' : 'Sherlock holmes stories',
    'author' : 'Sherlock',
    func : function info() {

        console.log(`this books author is ${this.author} and this books name is ${this.title}`)
        

    }

}

book_3.func()