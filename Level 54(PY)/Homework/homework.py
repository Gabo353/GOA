#1
def sort_by_length(arr):
    return sorted(arr, key = len) #w3school

#2
def sequence_sum(begin, end, step):
    if begin > end:
        return 0
    return sum(range(begin, end + 1, step))

#3
def series_sum(n):
    if n == 0:
        return '0.00'
    r = sum(1/(1 + i * 3) for i in range(n))
    return f'{r:.2f}'
   
#4
def round_to_next5(n):
    if n % 5 == 0:
        return n
    
    r = n % 5
    
    d = 5 - r
    
    return n + d

#5
def two_oldest_ages(ages):
    new = []
    new.append(max(ages))
    ages.remove(max(ages))
    new.append(max(ages))
    return new[::-1]