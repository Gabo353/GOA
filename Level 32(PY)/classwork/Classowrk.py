def opposite(number):
     return number-number*2

def repeat_str(repeat, string):
    return string*repeat

def count_sheeps(sheep):
    count = 0
    for i in sheep:
        if i == True:
            count+=1
    return count      

def no_space(x):
    return x.replace(' ','')