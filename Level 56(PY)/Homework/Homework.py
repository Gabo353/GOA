#1
def solution(text, ending):
    return text.endswith(ending)

#2
def even_or_odd(s):
    even = 0
    odd = 0
    for i in s:
        num = int(i)
        if num % 2 == 0:
            even += num
        else:
            odd += num
    if even > odd:
        return 'Even is greater than Odd'
    elif odd > even:
        return 'Odd is greater than Even'
    else:
        return 'Even and Odd are the same'
    
#3
def even_numbers(arr,n):
    nums = []
    for i in arr:
        if i % 2 == 0:
            nums.append(i)
    last = nums[-n:]
    return last

#4
def vowel_indices(word):
    vowels = 'aeiouyAEIOUY'
    result = []
    for i in range(len(word)):
        if word[i] in vowels:
            result.append(i + 1)
    return result

#5
def geometric_sequence_elements(a, x, n):
    new = []
    for i in range(n):
        formula = a * (x ** i)
        new.append(formula)
    string = []
    for term in formula:
        string.append(str(term))
    result = ', '.join(string)
    return result