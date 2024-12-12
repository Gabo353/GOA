#1
age = int(input('Your age: '))

if age <= 13:
    print('over 13')

elif age > 19:
    print('Under 19')

#2
score = int(input('Score: '))
is_A = 9
is_B = 8
is_C = 7
is_D = 6
is_F = 5
  
if score >= is_A:
    is_A = True
    print('over 9')
if score >= is_B:
    is_B = True
    print('Under 8')
if score >= is_C:
    is_C = True 
    print('Under 7') 
if score >= is_D:
    is_D = True
    print('Under 6')
if score > is_F:
    is_F = True
    print('Under 5')
print(is_A,is_B,is_C,is_D,is_F)    


#3
T = True
F = False
T or F
T and F



#4
one = int(input('First num: '))
two = int(input('Second num: '))
if one == two:
    print('One equals Two')
elif one > two:
    print('One is more')    
elif one < two:
    print('Two is more')    
elif one >= two:
    print('One might equal or is more than two')    
elif one <= two:
    print('Two might equal or is more than one')    
elif one != two:
    print("One doesn't equal Two")    

#5
a = int(input('First num: '))
b = int(input('Second num: '))
c = int(input('Third num: '))

is_a_greates = ' '
is_b_middle = ' '
is_c_lowest = ' '
if a > b > c:
    is_a_greates =  'True'
elif a > b > c:
    is_b_middle = 'True'   
elif a > b > c:
    is_c_lowest = 'True'
print(is_a_greates,is_b_middle,is_c_lowest)    

#6
score = 89
if score < 50:
    is_pass = True
if score == 75-90: 
   is_high_pass = True


#7   
P = True
Q = False
P_and_not_Q = P or Q
not_P_and_Q = P and Q
