// 1)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებთ რაიმე სახელს

// შემდეგ განიხილეთ switch case ის დახმარებით

// თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'girogi'
//     დაუკონსოლლოგე "your name is girogi"

// თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'lasha'
//     დაუკონსოლლოგე "your name is  lasha"

// თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'nika'
//     დაუკონსოლლოგე "your name is nika"

// თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'buba'
//     დაუკონსოლლოგე "your name is buba"

// სხვა შემთხვევაში 
//     დაუკონსოლლოგეთ --> "your name is not any of them"

let name = 'Gabo'

switch (name){

    case "girogi":
        console.log("your name is girogi")
        break;  
    case "lasha":
        console.log("your name is lasha")
        break;  
    case "nika":
        console.log("your name is nika")
        break;  
    case "buba":
        console.log("your name is buba")
        break;  
    default:
        console.log("your name is not any of them")
}

//-------------------------------------2--------------------------------------

function claculateItemPrice(quantity, pricePerItem){

    return quantity * pricePerItem

}
function claculateFianloRder(quantity, pricePerItem, shippingFee){

    return claculateItemPrice(quantity, pricePerItem) + shippingFee

}
const final = claculateFianloRder(30, 20, 10)
console.log(final)