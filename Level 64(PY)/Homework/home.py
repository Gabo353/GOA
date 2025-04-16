#1
#შექმენი class Car, რომელსაც ექნება brand, model, და year.
#და ერთ-ერთი ფუნქცია ერქმევა car_info, რომელიც დაბეჭდავს მანქანის სრულ ინფორმაციას.

class Car:
    def __init__(self,model,brand,year):
        self.model = model
        self.brand = brand
        self.year = year

    def car_info(self):     
        print(f'{self.model} {self.brand} {self.year}')

car_it_self = Car('GLE 63 S', 'Mercedes', 2023)
car_it_self.car_info()

print('--------------------------------------------------------')
#2
#შექმენი class Student, რომელსაც ექნება name, age, და grade.
#დაუმატე ფუნქცია is_passing, რომელიც დააბრუნებს True თუ grade > 5, სხვა შემთხვევაში False.
 
class Student:
    def __init__(self,name,age,grade):
        self.name = name
        self.age = age
        self.grade = grade

    def is_passing(self):
        if self.grade > 5:
            print(f'is {self.name} passing?: {True}')
        else:
            print(f'is {self.name} passing?: {False}')

classmate = Student('Gela', 23, 4)
classmate_nerd = Student('Albert', 13, 6)

classmate_nerd.is_passing()
classmate.is_passing()    

print('--------------------------------------------------------')

#3
#შექმენი class Dog, რომელსაც ექნება name და age.
#და დაუმატე ფუნქცია bark, რომელიც დაბეჭდავს "Woof!".

class Dog:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} bark!')

doggy = Dog('Silver', 3)
doggy_2 = Dog('Princess',2)
doggy.bark()
doggy_2.bark() 

print('--------------------------------------------------------')

#4
#შექმენი class Rectangle, რომელსაც ექნება width და height.
#დაუმატე ფუნქცია area, რომელიც დააბრუნებს ფართობს.

class Rectangle:
    def __init__(self,width,height):
        self.width = width
        self.height = height
    def area(self):
        print(f'Area of Rectangle is {self.width * self.height}')

parametres = Rectangle(int(input('width: ')), int(input('height: ')))
parametres.area()


#5
#შექმენი class Book, რომელსაც ექნება title, author, და year.
#დაუმატე ფუნქცია info, რომელიც დაბეჭდავს მაგ წიგნის დეტალებს – Title, Author, Year

class Book:
    def __init__(self,title,author,year):
        self.title = title
        self.author = author
        self.year = year
    def info(self):
        print(f'Books title is {self.title}, author is {self.author} and it was written in {self.year}')
        
booking = Book('Witel Quda','Charles Perrault', 1697)
booking.info()