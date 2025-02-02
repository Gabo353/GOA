#1
def sum_mix(arr):
    sum = 0
    for i in arr:
        sum+=int(i)
    return sum   

#2
def double_char(s):
    res = ''
    for i in s:
        res += i*2
    return res

#3
def array_plus_array(arr1,arr2):
    res = 0 
    for i in arr1:
        res += int(i)     
    for n in arr2:
        res += int(n)
    return res   

#4
def reverse_words(s):
    return ' '.join(s.split()[::-1])

#5
def sum_str(a, b):
    if a == '':
        a = 0
    if b == '':
        b = 0
    
    num1 = int(a)
    num2 = int(b)
    res = num1 + num2
    return str(res)