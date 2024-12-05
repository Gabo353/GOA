#1
from turtle import * 

speed(10)  


def draw_triangle(side_length):
    for _ in range(3):
        forward(side_length)
        left(120)
        

for i in range(0, 121):
    if i % 2 != 0:  
        begin_fill()
        draw_triangle(i *10)  
        penup()
        forward(100)
        pendown()
        
        color('green')
       
        end_fill()
    else:
       color('blue')
       begin_fill() 
       draw_triangle(i *10)  
       penup()
       forward(100)  
       pendown()
      
       
       
       end_fill()
exitonclick()


#2

def hello_world():
   print('print()')  
hello_world()

#3
numb = int(input('Your number: '))
def even_or_odd():
   if numb % 2 ==0:
     print('Your number is Even')
   else:
       print('Your number is Odd')
even_or_odd()       

#4
def figures_1():
   print('*' * 6)
   print('*' * 6)
   print('*' * 6)

   print(6 * ' ', "*"    )
   print(5 * ' ', "*" *3   )
   print(3 * ' ', "*"*7    )
   print(1*' ' ,"*" * 11   )
   print(6 * ' ', "*"    )
   print(6 * ' ', "*"    )    

   print('*'*7)
   print(1*' ' , '*'*7)
   print(2*' ','*'*8)
   print(3*' ','*'* 9)  


for i in range(1,121):
  figures_1()   
