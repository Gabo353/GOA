#1
def multi_table(number):
    str = []
    for i in range(1,11):
        str.append(f'{i} * {number} = {i * number}')
    return '\n'.join(str)

#2
def print_array(arr):
    list = []
    for i in arr:
        list.append(str(i))
    string_arr = ",".join(list)
    return string_arr

#3
def string_clean(s):
    clean = ''
    for i in s:
        if not i.isdigit():
            clean += i
    return clean

#4
def remove_consecutive_duplicates(s) -> str:
    words = s.split()  
    result = []  
    last_word = None
    
    for word in words:
        if word != last_word:  
            result.append(word)
            last_word = word  
    
    return ' '.join(result) 

#5
def between_extremes(numbers): 
    Min_of_num = min(numbers)
    Max_of_num = max(numbers)
    return Max_of_num - Min_of_num