#1
name = input('Your name: ')
last_name = input('Your last name: ')
age = input('Your age: ')
print(name,last_name, 'is',age)
print('-------------------------------------')


#2
first = float(input('First: '))
second = float(input('Second: '))
sum = float(first) * float(second) #სხვა მოქმედებისტვის უბრალოდ შესაცვლელია ნიშანი (+,-,/,*)
sum = first * second #აქაც
print('Sum: ' + str(sum))
print('---------------------------')

#3
#1user = input('enter your name: ') ვინაიდან ცვლადის სახელი არ შეიძლება ციფრით რომ იწყებოდეს
first_user = input('enter your name: ')
print(first_user)
print('--------------------------------------')

#4
math = 20 + int('20') #20-ინტეჯერი ანუ ციფრი,ხოლო '20'-სტრინგი ანუ ტექსტი ერთმანეთისგან განსხვავდებიან ამიტომაც არ გამოვა მათემატიკური მოქმედება.პრობლემის გადასაჭრელად შეგვიძლია უბრალოდ მოვაშოროთ ბრჭყალები ან გამოვიყენოტ int('20') კოდი
second_math = math - 10 #აქაც იგივე,ციფრით ცვლადის სახელი ვერ დაიწყება 
third_math = math * 2
print(third_math)
print('---------------------------------------')

#5
name = input('Your name: ')
last_name = input('Your last name: ')
age = input('Your age: ')
academy = input('Where do you learn (academy): ')
school = input('Where do you learn (school): ')
print(name,last_name,age,academy,school)




