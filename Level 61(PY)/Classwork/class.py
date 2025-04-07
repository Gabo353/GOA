#1
def make_upper_case(s):
    return s.upper()

#2
def repeat_str(r, s):
    return r*s

#3
def no_space(x):
    return x.replace(' ','')

#4




#5
def maps(a):
    a2 = []
    for i in a:
        a2.append(i * 2)
    return a2


#6
def basic_op(o, v1, v2):
    if o == '+':
        return v1 + v2
    elif o == '-':
        return v1 - v2
    elif o == '/':
        return v1 / v2
    elif o == '*':
        return v1 * v2
    
#7
def grader(score):
    if score > 1:
        return 'F'
    elif score < 0.6:
        return 'F'
    elif score >= 0.9:
        return 'A'
    elif score == 1:
        return 'A'
    elif score >= 0.8:
        return 'B'
    elif score >= 0.7:
        return 'C'
    elif score >= 0.6:
        return 'D'
    
#8
websites = []
for i in range(1, 1001):
    websites.append('codewars')

#9
def double_char(s):
    res = ''
    for i in s:
        res += i*2
    return res

#10
def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age >= 14 and age < 18:
        return "drink coke"
    elif age > 17 and age < 21:
        return "drink beer"
    elif age > 20:
        return "drink whisky"
   

#11
def bonus_time(s, b):
    if b == True:
        return f'${s * 10}'
    else:
        return f'${s}'
    
#12
def monkey_count(n):
    africans = []
    for i in range(1,n+1):
        africans.append(i)
    return africans

