#1
def nugzar_chubinidze(limit,sadgerdzelo):
    if sadgerdzelo >= limit:
        return 'ნუგზარი აღარ დალიო მეტი!'
    else:
      return 'მოდი ახლა მართლა, დამილოცნიე!'

print(nugzar_chubinidze(6,5))

#2
def yuri_gagarini():
    user = int(input('Puls: '))
    user_info_2 = int(input('Puls (Heart): '))
    if (user_info_2 == 120 and user == 80):
        return True
    else:
        return False
print(yuri_gagarini())    

#3
def captianjack():
    gold_coin = int(input('Gold: '))
    ship = 150
    ship_2 = 200
    ship_3 = 250
    ship_4 = 300
    ship_5 = 350
    if gold_coin == 0:
        return ' აჯანყდება ეკიპაჟი'
    elif  gold_coin < ship:
        return ' აჯანყდება ეკიპაჟი'
    elif  gold_coin < ship_2:
        return ' აჯანყდება ეკიპაჟი'
    elif  gold_coin < ship_3:
        return ' აჯანყდება ეკიპაჟი'
    elif  gold_coin < ship_4:
        return ' აჯანყდება ეკიპაჟი'
    elif  gold_coin < ship_5:
        return ' აჯანყდება ეკიპაჟი'
print(captianjack())

#4
arr =["პანტა", "პანტა", "გორული","გორული","გორული",'ვაშლატამა']
new = []
def appels():
    for i in arr:
        if arr.count(i) <= 1:
            new.append(i)


print(appels())
print(new)

#5
def solve(s):
    end = 0
    end_2 = 0
    for i in s:
        if i.isupper():
            end += 1
        elif i.islower():
            end_2 += 1
    if end > end_2:
        return s.upper()
    elif end_2 > end:
        return s.lower()
    elif end == end_2:
        return s.lower()