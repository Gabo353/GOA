user1 = input('1: ')
user2 = input('2: ')
user3 = input('3: ')
user4 = input('4: ')
user5 = input('5: ')
arr = [user1,user2,user3,user4,user5]

for i in range(len(arr)):
    print(arr[i])
print('------------------------')    

arr = [9,5,94,711,52,96,71,8]
random_item = arr[0]
for i in arr:
   if i < random_item:
     random_item = i
print(random_item)     
