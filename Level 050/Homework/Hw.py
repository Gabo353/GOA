#1
def binary_array_to_number(arr):
    s = 0
    for i in arr:
        s = s * 2 + i
    return s    

#2
def lovefunc( flower1, flower2 ):
    return (flower1 % 2) != (flower2 % 2)

#3
def is_triangle(a, b, c):
    if a + b > c:
        if b + c > a:
            if a + c > b:
                return True
    return False

#4
def longest(a1, a2):
    added = a1 + a2
    no_repeat = set(added)
    sort = sorted(no_repeat)
    res = ''.join(sort)
    return res


#5
def invert(lst):
    res = []
    for i in lst:
        res.append(i * -1)
    return res    


#6
def open_or_senior(data):
    res = []
    for age, handicaps in data:
        if age >= 55 and handicaps > 7:
            res.append('Senior')
        else:
            res.append('Open')
    return res

#7
def grow(arr):
    res = 1
    for i in arr:
        res *= i
    return res
        
#8
def printer_error(s):
    res = 0
    for i in s:
        if 'n' <= i <= 'z':
            res += 1
        
    return f'{res}/{len(s)}'

#9
def dna_to_rna(dna):
    for i in dna:
        origina = dna.replace('T','U')
    return origina

#10
def bmi(weight, height):
    bmi = weight/height**2
    if bmi <= 18.5:
        return 'Underweight'
    elif bmi <= 25.0:
        return 'Normal'
    elif bmi <= 30.0:
        return "Overweight"
    elif bmi > 30:
        return "Obese"
    
