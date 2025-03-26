#1
def vowel_one(s):
    vowels = 'aeiouAEIOU'
    in_num = ''
    for i in s:
        if i in vowels:
            in_num += '1'
        else:
            in_num += '0'
    return in_num
    
#2
def count_letters_and_digits(s):
    num = 0
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for i in s:
        if i in letters:
            num += 1
        elif i.isdigit():
            num += 1
    
    return num

#3
def solution(a,b):
    return(a.endswith(b))

#4
def elimination(arr):
    for i in arr:
        if arr.count(i) > 1:
            return i        
    return None