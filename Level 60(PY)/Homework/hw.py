#1
def double_char(s):
    dub = ''
    for i in s:
        dub += i * 2
    return dub

#2
def get_age(a):
    return int(a[0])

#3
def feast(b, d):
    b_first = b[0]
    d_first = d[0]
    b_last = b[-1]
    d_last = d[-1]
    
    if b_first == d_first and b_last == d_last:
        return True
    else:
        return False
    

#4
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

#5
def solution(n):
    num = []
    for i in range(n):
        if i % 3 == 0 or i % 5 == 0:
            num.append(i)
    
    sums = sum(num)
    return sums