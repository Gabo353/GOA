#code warshi mocemulia yvelaeri
#1
def bool_to_word(bool):
    if bool == True:
        return 'Yes'
    elif bool == False:
        return 'No' 
#2
def remove_char(s):
    return s[1:-1]
#3
def string_to_number(s):
    return int(s) 
#4    
def no_space(x):
    return x.replace(' ','')
#5
def sum_array(a):
        for i in range(len(a)):
            return sum(a)
    