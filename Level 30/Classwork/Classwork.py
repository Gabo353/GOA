def high_lower(_str):
    res = _str.split(" ")
    _arr = []
    for elem in res:
        _arr.append(int(elem))
    return f"{ max(_arr)}  { min(_arr)} "

print('Max/Min')
print(high_lower("1 2 3 4 5"))
print(high_lower("3 4 5 677 88 9"))
print(high_lower("12 34 54 12 78"))

#თემა კლასში (არა დავალება)
#def find_vowel(x):
#    vowel = 'a e i o u'
#    if x in vowel:
#        return "ყოჩაღ ნახე ხმოვანი"
#    else:
#        return "სადაა შენი ხმოვნის ნახვა..."
#print( find_vowel('d') ) 

#def word_or_numb(x):
#    y = 'messi', 22913
#    if x in y:
#        return 'wow you got a word or number'
#    else:
#        return 'Nah try again'
#print( word_or_numb(input('Guess: ')))    