#1) split() ფუნქიცია დაწერეთ split() ფუნქციის გარეშე
#2) join() ფუნქიცია დაწერეთ join() ფუნქციის გარეშე
#3) replace() ფუნქიცია დაწერეთ replace() ფუნქციის გარეშე
#4) mini function of calculator 
#5) input ები გამოყენებით, დავამტოთ იმდენი სიტყვა რმადენიც მომხარებეს სურს და ეს სიტყვეი მოვაქციოთ array ში 
#დავაჯოინოთ და გამოვიტანოთ ტერმინალში 



#1
def custom_split(string,delimiter):
    result = []
    current_word = ''

    for char in string:
        if char == delimiter:
            result.append(current_word)
            current_word=''
        else:
            current_word += char

    result.append(current_word)            
    return result
print(custom_split('apple,banana,cherry',''))

#2
#def custom_split(string,delimiter):
#    result = []
#    current_word = '!!!'
#
#    for char in string:
#        if char == delimiter:
#            result.append(current_word)
 #           current_word=''
 #       else:
 #           current_word += char
#
#    result.append(current_word)            
#    return result
#print(custom_split('apple,banana,cherry',''))







#4
first = int(input('First number: '))
second = int(input('Second number: '))
sum = first + second
Sum = first *second
sUm = first - second
suM = first / second
print('Sum in +',sum)
print('Sum in *',Sum)
print('Sum in -',sUm)
print('Sum in /',suM)


#5
arr = []
arr.append(input('Anything that you want to add to the list: '))
print(arr)