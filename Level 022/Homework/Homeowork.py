list_of_names = ['gabo','davit','ana','davit','koba','davit']
y = list_of_names.count('davit')        
print(y)
print('---------------')
#2
arr = [1,2,3,4,5,6,7,8,9,10]
arr.reverse()
print(arr)

print('----------------')
#3
numb = [1,2,3,4]
print(numb*len(numb))

print('-------------------')
#4
insert_arr = ['python','rust','C++','javascript','Scale','SQL']
insert_arr.insert(int(input('Numb: ')),'davit')
print(insert_arr)

print('-------------------')
#5
sports = ['basketball','football','rugby','football','bowling','football','football']
x = sports.count('football')
print(x)
for x in range(x):
   sports.remove('football')
print(sports)