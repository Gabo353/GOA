#1) შექმენით tuple, საიდანაც დაპრინტავთ პირველ ორ ელემენტს 

#2) numbers = (2, 56, 99, 22, 15, 23, 66, 11, 134, 23, 66, 91, 22, 2, 23)

#   numbers tuple-ში დაპრინტეთ რამდენჯერ მეორდება ციფრი 23 count-ის გამოყენებით

#3) aura = (10, 25, 5, 80, 70, 20) 

#   aura tuple-დან for loop-ის გამოყენებით დაბეჭდეთ მხოლოდ 10-ზე დიდი რიცხვები

#4) კომენტარის სახით ახსენით, რა განსხვავებაა list-სა და tuple-ს შორის

#5) კომენტარის სახით ახსენით, რას ნიშნავს immutable და mutable



#1)
names = ('Gabo','Gio','Luka','Toma','Saba','Nika')
first, *rest = names
print(first)
print(names[1])

#2)
numbers = (2, 56, 99, 22, 15, 23, 66, 11, 134, 23, 66, 91, 22, 2, 23)
print(numbers.count(23))

#3)
aura = (10, 25, 5, 80, 70, 20)
for i in aura:
    if i >= 10:
        print(i)


#4)
# list არის mutable, ხოლო tuple არის immutable

#5)
# immutable ნიშნავს რომ არ შეუძლია არანაირად შეცვლა, ხოლო mutable ნიშნავს რომ აქვს შეცვლის უნარი          