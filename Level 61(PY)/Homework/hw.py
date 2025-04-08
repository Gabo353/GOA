#1
def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        now = arr[i]
        prev = arr[i - 1]
        if now != prev + 1:
            return now
    return None

#2
def to_alternating_case(s):
    new = ''
    for i in s:
        if i == ' ':
            new += i
        elif i.islower():
             new += i.upper()
        elif i.isupper():
            new += i.lower()
        elif i.isdigit():
            new += i
        elif i != type(str):
            new += i
    return new

#3
def correct(s):
    new = ''
    for i in s:
        if 'A' <= i <= 'Z':
            new += i
        elif i == '0':
            new += 'O'
        elif i == '5':
            new += 'S'
        elif i == '1':
            new += 'I'
        elif i != type(str):
            new += i
    
    return new


#4
def is_palindrome(s):
    lower = s.lower()
    if lower == lower[::-1]:
        return True
    else:
        return False
    

#5
def bonus_time(s, b):
    if b == True:
        return f'${s * 10}'
    return f'${s}'

#6
def final_grade(e, p):
    if e > 90 or p > 10:
        return 100
    
    elif e > 75 and p >= 5:
        return 90
    
    elif e > 50 and p >= 2:
        return 75
    
    else:
        return 0
    

#7
def min_max(l):
    list = []
    list.append(min(l))
    list.append(max(l))
    return list
