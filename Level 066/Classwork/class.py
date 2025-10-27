#1
def count_sheep(n):
    res = ''
    for i in range(n):
        res += f'{i + 1} sheep...'
    return res

#2
def number(l):
    res = []
    counter = 0
    for i in l:
        counter += 1
        res.append(f'{counter}: {i}')
    return res

