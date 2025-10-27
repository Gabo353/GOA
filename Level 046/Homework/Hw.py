#1
def high_and_low(num):
    res = []
    for i in num.split():
        res.append(int(i))
    return f'{max(res)} {min(res)}'

#2
def validate_pin(pin):
    if pin.isdigit():
        if len(pin) == 4 or len(pin) == 6:
            return True
    return False

#3
def odd_or_even(arr):
    if sum(arr) %2 == 0:
        return 'even'
    else:
        return 'odd'
    
#4
def solution(nums):
    if not nums:
        return []
    return sorted(nums)

#5
def greet(name): 
    name = name[0].upper() + name[1:].lower()
    return f'Hello {name}!'
