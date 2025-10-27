#```2)შექმენი ფაილი სადაც გამოიყენებ ყველა set ფუნქციას(.clear, .set) და ასე შემდეგ
#3)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ key
#4)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ value
#5)შექმენი ფუნქცია AddToDatabase, რომლესაც არგუმენტად გადაეცემა სახელი, გვარი და ასაკი, შემდეგ ეს ინფორმაცია უნდა დააბატოთ dictionaryს და გამოიტანო```

#1)
guest_list = {'gabo','nika','nia','lola','anna','jeko'}
guest_list_2 = {'gabo','nika','nia','lola','anna'}

guest_list.remove('gabo')
guest_list.add('Gabo')
#guest_list() --- shlis mtlian sets.
print(guest_list)

combine = guest_list.union(guest_list_2)
print(combine)

diff = guest_list.difference(guest_list_2)
print(diff)

print('--------------------------------------------------------------------')
#2)
me = {

'Name':'Gabo',
'Surname':'Dumbadze',
'Age':13,
'Hobby':'Football'

}
key = me.keys()
val = me.values()
print('Keys',key)

print('--------------------------------------------------------------------')
#3)
print('Values',val)

print('--------------------------------------------------------------------')
#4)
name = input('Your name: ')
surname = input('Your surname: ')
age = int(input('Your age: '))

def AddToDatabase(name,surname,age):
    database = {

    'Name':name,
    'Surname':surname,
    'Age':age

    }     
    print(database)

AddToDatabase(name,surname,age)  