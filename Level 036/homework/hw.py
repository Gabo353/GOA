#1
def filter_list(x):
    res =[]
    for i in x:
        if type(i)==int:
            res.append(i)
    return res   

#2
def square_digits(num):
    res = ''
    for digit in str(num):
        res += str(int(digit)**2)
    return int(res)  


#3
def get_middle(s):
    leng = len(s)
    mid = leng // 2
    if leng % 2 == 0:
        return s[mid - 1] + s[mid]
    else:
        return s[mid]

#4
def find_short(s):
    words = s.split()
    shor = len(words[0])
    for i in words:
        if len(i) < shor:
            shor = len(i)
    return shor    

#5
def solution(text, end):
    if len(end) > len(text):
        return False
    for i in range(1, len(end) + 1):
        if text[-i] != end[-i]:
            return False
    return True    