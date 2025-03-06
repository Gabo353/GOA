#1
def find_next_square(sq):
    num = sq **0.5
    if num.is_integer():
        return (num + 1) ** 2
    return -1

#2
def min_max(lst):
    lis=[]
    lst.sort()
    lis.append(lst[0])
    lis.append(lst[-1])
    return lis


