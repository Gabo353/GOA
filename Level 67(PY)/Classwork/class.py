#1
def bonus_time(salary, bonus):
    if bonus :
        return "$" + str(salary * 10)
    else:
        return "$" + str(salary)
    
#2
def two_sort(a):
    correct = sorted(a)
    first = correct[0]
    finnal = ""
    for i in first:
        finnal += i + '***'
    return finnal[:-3]


#3
#class human:
#    def __init__(self,name,age):
#        self.name = name
 #       self.age = age
#    def __str__(self):
#        return f'Name:{self.name} age:{self.age}'
#    
#    def paganala(self,klichka):
#        return f' {klichka}'
    
#h1 = human('gela', 23)
#print(h1.__str__())
#print(f'gela paklichki{h1.paganala('Lomi')}')

#class Dog(human):
#    
#   def __init__(self, name, age,breed):
#        self.name = name
#       self.age = age
#        self.breed = breed
#    def __str__(self):
#        return f'{self.breed}'


#d1 = Dog('Cuga', 13,'chiwawa')
#print(d1)

class Catt:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def meaw(self):
        return f'{self.name} meawed'
    
class Dog(Catt):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.name = name

dog = Dog('Bushti', 2)
cat = Catt('lurja',12)

print(dog.meaw())