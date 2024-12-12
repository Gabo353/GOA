print('გამრავლების შემოკლებული ფორმულები')
apps = str(input('Any app: '))
first_num = int(input('First num: '))
second_num = int(input('Second num: '))
options = input('Any option: ')




def calculator():
  if options == '/':
    print(first_num/second_num)

  elif options == '*':
    print(first_num*second_num)    

  elif options == '+':
    print(first_num+second_num)     

  elif options == '-':
    print(first_num-second_num)  

if apps == 'calc':
   print(calculator())
