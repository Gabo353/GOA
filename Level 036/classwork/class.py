#1
def digit(n):
    return [int(digit) for digit in str(n)][::-1]

#2
def aragami(test,original):
    return sorted(test.lower()) == sorted(original())

#3
def get_count(s):
    count = 0
    for i in s:
        if i in 'aeiou':
             count+= 1
    return count        