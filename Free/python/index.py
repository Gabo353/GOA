users_start = int(input('Start: '))
users_end = int(input('End: '))

jami = 0

for i in range(users_start,users_end+1):
    
    jami += i

print(jami)