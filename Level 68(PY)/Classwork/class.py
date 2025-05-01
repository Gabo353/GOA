#lambda
#num = lambda n1, n2, n3 : n1 + n2 + n3
#print(num(3, 2, 5))
#
#def num(n1, n2, n3):
#    return n1 + n2 + n3

#print(num(3, 2, 5))

#def num(n1):
#    return lambda n2 : n2 + n1
#
#x = num(3)

#print((10))


#1
num = lambda n1,n2,n3 : (n1 + n2 + n3) / 3
print(num(2,3,3))

#2
def even_or_odd(n):
    check = lambda n1 : n1
    if check(n) % 2 == 0:
        return 'Even'
    else:
        return 'Odd'
    
#3
positive_sum = lambda x: sum(i for i in x if i > 0)



#4
find_smallest_int = lambda y : min(y)

#5
count_by = lambda x, n : [x * i for i in range(1, n + 1)]