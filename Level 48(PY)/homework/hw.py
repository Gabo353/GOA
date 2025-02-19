#1
def simple_multiplication(number):
    if number %2 == 0:
        return number * 8
    else:
        return number * 9
    
#2
def invert(lst):
    res = []
    for i in lst:
        res.append(i * -1)
    return res    

#3
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result = result + "0"
        else:
            result = result + "1"
    return result

#4
def string_to_array(s):
    return s.split(" ")

#5
def rps(p1, p2):
    if p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "scissors" and p2 == "rock":
        return "Player 2 won!"
    elif p1 == "scissors" and p2 == "scissors":
        return "Draw!"
    elif p1 == "rock" and p2 == "rock":
        return "Draw!"
    elif p1 == "paper" and p2 == "paper":
        return "Draw!"
    elif p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    elif p2 == "rock" and p1 == "scissors":
        return "Player 2 won!"
    elif p2 == "paper" and p1 == "rock":
        return "Player 2 won!"
    elif p2 == "scissors" and p1 == "paper":
        return "Player 2 won!"

#6
def greet(name, owner):
    if name == owner:
        return 	'Hello boss'
    else:
        return 'Hello guest'
    
#7
def monkey_count(n):
    res = []
    for i in range(1, n + 1):
        res.append(i)
    return res 

#8
def human_years_cat_years_dog_years(human_years):
    catYears = 0
    dogYears = 0
    if human_years == 1:
        catYears += 15
        dogYears += 15
        return [human_years, catYears, dogYears]
    elif human_years == 2:
        catYears += 24
        dogYears += 24
        return [human_years, catYears, dogYears]
    elif human_years > 2:
        catYears += 24
        dogYears += 24
        years = human_years - 2
        catYears += years*4
        dogYears += years*5
        return [human_years, catYears, dogYears]
    return [0,0,0]

#9
def is_isogram(s):
    lower = s.lower()
    for i in lower:
        if lower.count(i) > 1:
            return False
    return True

#10
def binary_array_to_number(arr):
    s = 0
    for i in arr:
        s = s * 2 + i
    return s    