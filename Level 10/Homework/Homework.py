age =  int(input('Your age: '))
print(age)

print('-------------------------------------')

temp = int(input('Your tempriture(C): '))
print('tempriture in Farenheit= ', temp * 5/9)

print('-------------------------------------')


math = int(input('Your number: '))
if math >= 20:
   print('more than 20')

if math // 4 <= 20:
   print('less than 20')


if math * 4 >= 20:
    print('equals or more than 20')

print('--------------------------------------')


for i in range(10):
  for i in range(i):
    print(i, end="")
  print("----------------")


age = int(input('Your age: '))
if age >= 20:
   print('true')

