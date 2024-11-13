#1
alphabet = ['a','b','c','d','e','f','g','h','i','j','q','l','m','n','o','p']
print(alphabet[0])   
print(alphabet[4]) 
print(alphabet[8]) 
print(alphabet[14]) 

print('---------------------------')
#2  ერთ if-ში ვერ მოვახერხე ორ პირობის დაწერა:(
num = [1,2,3,4,5,6,7,8,9,15,20,25]
numb = [1,2,3,4,5,6,7,8,9,15,20,25]
for i in range(len(num)):
   if num[i] %3  ==0:
    print(num[i])   
                                         
for i in range(len(numb)):
   if numb[i] %5 == 0:
     print(numb[i])

print('-------------------------------')
#3
an = ['a','b','c','d','e','f','g',2,3,4,5,6,7]
if 1 == 1:
    print(str(an))
print('---------------------------------')
#4
print('*' * 6)
print(' ', '*' * 6 )
print(' ',' ','*' *6)
print(' ',' ',' ','*' *6)
print('---------------------------------')
#5
age = int(input('Your age: '))
if age >= 12:
   print('You are older than 12')

else:
   print('You are not older than 12')