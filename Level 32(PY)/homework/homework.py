#1
def string_to_array(s):
    if len(s)>0:
        return s.split()
    else:
        return ['']
    
#2
def string_to_number(s):
    return int(s) 
    
#3    
print('Same as second one')    

#4
def fake_bin(x):
    st = ''
    for i in x:
            if int(i) >= 5:
                st+='1'
            else:
                st+='0'
    return st  

#5
def high_and_low(a):
    a = a.split(' ')
    numbs = []
    for i in a:
         numbs.append(int(i))
    
    return f"{max(numbs)} {min(numbs)}"