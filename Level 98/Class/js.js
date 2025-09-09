//მომხმარებელს შემოატანინეთ რაიმე რიცხვი(გადააქცე=იეთ მთლიანი prompt number ტიპის მონაცემად რომ მომს=ხმარებლის მიერ შემოტანილი მნშვნელობა იყოს number ტიპის)შემდეგ შეადარეთ, თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის მეტი 0 ზე და არის ლუწი მაშინ დაუკონსოლლოგეთ --> "this number is positive and Even" ,შემდეგ შეამოწმეთ 
//თუ მომხმარებლის შემოტანილი რიცხვი არის ნაკლები 0 ზე და არის კენტი მაშინ დაუკონსოლლოგეთ ---> "this number is Odd" , სხვა შემთხვევაში დაუკონსოლლოგეეთ "This number is zero"


const question = Number(prompt('Type number: '))
if (question > 0 && question % 2 === 0){


    alert("this number is positive and Even" )

}
else if (question < 0 && question % 2 !== 0)
{

    alert("this number is odd" )

}

else{

    alert('This number is zero')

}







