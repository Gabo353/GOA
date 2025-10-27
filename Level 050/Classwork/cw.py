#1
def is_isogram(s):
    return len(set(s.lower())) == len(s)

#2
def accum(st):
    res = []
    for i in range(len(st)):
        letter = st[i]
        part = letter.upper() + letter.lower() * i
        res.append(part)
    return '-'.join(res)  



