#1
#კლასი შექმენი სახელად Dog, რომელსაც ექნება name და age ატრიბუტები.
#შექმენი ორი ობიექტი ამ კლასიდან და დაბეჭდე მათი სახელი და ასაკი.

class Dog:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def inturuce(self):
        return f'{self.name} is {self.age} years old'

dog_passport = Dog('Bushti', 2)
print(dog_passport.inturuce())

print('--------------------------------------------------')

#2
#შექმენი კლასი Car, რომელსაც ექნება ფუნქცია drive(), რომელიც დაბეჭდავს "The car is driving" და stop(), რომელიც დაბეჭდავს "The car has stopped".
#შექმენი ერთი მანქანა და გამოიძახე ორივე მეთოდი.

class Car:
    def __init__(self,car):
        self.car = car

    def drive(self):
        return f'{self.car} is Driving'
    
    def stop(self):
        return f'{self.car} has stopped'
    
my_car = Car('The car')
print(my_car.drive())
print(my_car.stop())

print('--------------------------------------------------')

#3
#შექმენი კლასი Circle, რომელსაც ექნება radius (რადიუსი) ატრიბუტი და მეთოდი area(), რომელიც გამოითვლის და დააბრუნებს წრის ფართობს (πr²).
#შექმენი ობიექტი და დაბეჭდე მისი ფართობი.
import math

class Circle:
    def __init__(self,radius):
        self.radius = radius

    def area(self):
        return f'{(self.radius **2) * math.pi}'
    
circle = Circle(3)
print(circle.area())

print('--------------------------------------------------')

#4
#შექმენი კლასი Student, რომელსაც ექნება name, grade და subject ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც ბეჭდავს რაღაც მსგავსი:
#"My name is Giorgi, I study Math and my grade is 10."

class Student:
    def __init__(self,name,grade,subject):
        self.name = name
        self.grade = grade
        self.subject = subject

    def introduce(self):
        return f'My name is {self.name}, I study {self.subject} and my grade is {self.grade}'
    
Student_passport = Student('Gabrieli',10,'Programming')
print(Student_passport.introduce())

print('--------------------------------------------------')

#5
#შექმენი კლასი BankAccount, რომელსაც ექნება balance ატრიბუტი. დაამატე მეთოდები deposit(amount) და withdraw(amount).
#deposit მეთოდი ამატებს თანხას ბალანსზე,
#withdraw აკლებს თანხას ბალანსიდან (თუ საკმარისი ფული არის).

class BankAccount:
    def __init__(self,balance):
        self.balance = balance

    def deposit(self,amount):
        return f'Deposit is {amount} and now your balance is {amount + self.balance}'
    
    def withdraw(self,amount):
        if amount > self.balance:
            return f'You own a bank balance is {self.balance - amount}'
        else:
            return f'Withdraw is {amount} and now your balance is {self.balance - amount}'

My_BankAccount = BankAccount(100)
My_deposit = int(input('Enter your deposit: '))
My_withdraw = int(input('Enter your withdraw: '))

print(My_BankAccount.deposit(My_deposit))
print(My_BankAccount.withdraw(My_withdraw))
