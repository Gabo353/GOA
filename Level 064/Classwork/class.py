#1
def string_clean(s):
    new = ''
    for i in s:
        if not i.isdigit():
            new += i
    return new

#2
def make_upper_case(s):
    return s.upper()

#3
def minimum(arr):
    return min(arr)
    
def maximum(arr):
    return max(arr)



class Person:
    def __init__(self,name,surname,age):
        self.name = name
        self.surname = surname
        self.age = age

passport1 = Person('Gela','laburshidze',23)
passport2 = Person('Maka','miqautadze',12)
print(passport1.age,passport1.name,passport1.surname)
print(passport2.age,passport2.name,passport2.surname)


class myCat:
    kata = 'Jora'

patroni = myCat
print(patroni.kata)


class  human:
    def __init__(self,name,surname,age):
        self.name = name
        self.surname = surname
        self.age = age

    def __str__(self):
        return f'{self.surname} {self.name} {self.age}'
p1 = human('kobaladze', 'saba', 34)
print(p1)