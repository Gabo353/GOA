print('Mini phone inter face')
print('calc = calculator')
print('Tran=Transletor')
apps = input('Any app: ')

isrunning = True

if apps == 'clac':
  def calculator():
        first_num = int(input('First num: '))
        second_num = int(input('Second num: '))
        options = input('Any math symbol: ')

        if options == '/':
          print(first_num/second_num)

        elif options == '*':
          print(first_num*second_num)    

        elif options == '+':
          print(first_num+second_num)     

        elif options == '-':
          print(first_num-second_num)  
          
  calculator()


  
