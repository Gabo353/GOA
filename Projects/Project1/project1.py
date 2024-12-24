print('Mini phone interface')
print('calc = calculator')
print('Tran = Translator')



def calculator():
    isrunning = True
    apps = input('Any app: ')
    if apps == 'calc':
        first_num = int(input('First num: '))
        second_num = int(input('Second num: '))
        options = input('Any math symbol (+, -, /, *): ')

        if options == '/':
            
            print(first_num / second_num)
        elif options == '+':
            print(first_num + second_num)
        elif options == '-':
            print(first_num - second_num)
        elif options == '*':
            print(first_num * second_num)
        else:
            print('Invalid operator!')
    else:
        while isrunning:
            apps = input('Try again (enter "calc" or "Tran"): ')
            if apps == 'calc':
                calculator()
                isrunning = False  
            elif apps == 'Tran':
                print('Translator app is under development.')
                isrunning = False
            else:
                print('Invalid app. Try again.')
    
calculator()