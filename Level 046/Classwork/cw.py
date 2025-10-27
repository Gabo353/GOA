#1
def filter_list(l):
    res = []
    for i in l:
        if type(i) == int:
            res.append(i)
    return res

#2
def disemvowel(s):
    res = []
    for i in s:
        if i.lower() not in 'aeiou':
            res.append(i)
    return ''.join(res)

#3
def descending_order(num):
    num_str = str(num)
    number = []
    for i in num_str:
        number.append(i)
        
    number.sort()
    number.reverse()
    sort = ''.join(number)
    res = int(sort)
    return res