#1
def remove_duplicate_words(s):
    res = []
    for i in s.split():
        if i not in res:
            res.append(i)
    return ' '.join(res)         

#2
def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i
        
#3
def solution(nums):
    if not nums:
        return []
    return sorted(nums)

#4
def capitals(word):
    res = []
    for i in range(len(word)):
        if word[i].isupper():
            res.append(i)
    return res   


#5
def factorial(n):
    res = 1
    for i in range(1, n + 1):
        res *= i
    return res    