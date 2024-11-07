num = int(input('Your num: '))

if num <= 10:
    print('less than ten')
else:    
   print('More than ten')

print('---------------------')

number = int(input('Check if your num is even: '))

if number % 2 == 0:
    print('your number is even')
else:
  print('Your num is odd')   

print('----------------------')
numb = int(input('Your number: '))

if numb <= 0:
   print('Your num is negative')
else:
   print('Your num is not negative')   

print('-----------------------')

first = int(input('Your first number: '))
second = int(input('Second num: '))
if first == second:
   print('You numbers are "Toli"')
else:
   print('Your numbers are not "toli"') 

print('-------------------')     

up = int(input('Your number: '))

if up %2 == 0 and up >= 100: 
   print('More than hundred and even: ')
elif up >= 100:
   print('Than hundred, but not even')   
elif up %2 ==0:
   print('Even but not more than hundred')  
else:
   print('Not even and not more than hundred')  

print('---------------------')  

oh = int(input('Your number: '))
if oh %5 ==0:
   print('Sheni ricxvi aris 5 is da 10 is jeradic')
else:
   print('ar aris')   