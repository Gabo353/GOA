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