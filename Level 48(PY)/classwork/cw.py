#1
def xo(s):
    lower = s.lower()
    
    count1 = lower.count('x')
    count2 = lower.count('o')
    
    if count1 == count2:
        return True
    else:
        return False
    
#2
def find_short(s):
    sList = s.split()
    shortestLength = len(sList[0])
    for item in sList:
        if len(item) < shortestLength:
            shortestLength = len(item)
    return shortestLength

#3
def solution(text, ending):
    return text.endswith(ending)

#4
def accum(st):
    res = []
    index = 0
    for i in st:
        parts = i.upper() + i.lower() * index
        res.append(parts)
        index += 1
    return '-'.join(res)   

#5
def accum(st):
    res = []
    index = 0
    for i in st:
        parts = i.upper() + i.lower() * index
        res.append(parts)
        
        index += 1
        
    return '-'.join(res)   
  