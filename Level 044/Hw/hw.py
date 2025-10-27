#1
def validate_pin(pin):
    return len(pin) in (4 ,6) and pin.isdigit()

#2
def row_sum_odd_numbers(n):
    return n ** 3

#3
def binary_array_to_number(a):
    res = 0
    for i in a:
        res = res * 2 + i
    return res    

#4
def min_max(l):
    return [min(l), max(l)]

#5
def divisors(n):
    div = []
    for i in range(2,n):
        if n % i == 0:
            div.append(i)
    if len(div) == 0:
        return f'{n} is prime'
    return div