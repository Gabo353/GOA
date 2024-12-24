#1
def positive_sum(arr):
    total = 0
    for i in arr:
         if i > 0:
                total += i
    return total       

#2
def square_sum(arr):
    total = 0
    for i in arr:
        total += i**2
    return total   

#3
def sum_array(a):
    if len(a) > 0:
            return sum(a)
    elif len(a) <= 0:
            return sum(a)*0
    
#4
def find_average(arr):
        if len(arr) >0:
            return sum(arr)/len(arr)
        elif len(arr) <= 0:
            return sum(arr)*0

#5
def count_positives_sum_negatives(arr):
    count = 0
    sum = 0
    if len(arr) == 0:
        return []
    
    for i in arr:
        if i > 0:
            count += 1
        elif i < 0:
            sum += i
    return [count,sum]            