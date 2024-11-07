from turtle import *
# სახლის კირპუსი
begin_fill()
color('gray')
speed(30)
forward(400)

left(90)
forward(300)

left(90)
forward(130)

left(90)
forward(150)

right(90)
forward(140)

right(90)
forward(140)

left(90)
forward(130)

left(90)
forward(290)
end_fill()
penup()
goto(130, 0)
pendown()

#კარები

color('brown')
begin_fill()
left(90)
forward(140)
left(90)
forward(100)
left(90)
right(38)
forward(85)
left(76)
forward(85)
left(52)
forward(100)
end_fill()

# ფანჯრები
begin_fill()
color('light blue')
penup()
goto(45, 200)
pendown()

left(90)
forward(35)

left(90)
forward(35)

left(90)
forward(35)

left(90)
forward(35)
end_fill()

begin_fill()
color('brown')
right(90)
forward(10)

left(90)
forward(5)

left(90)
forward(55)

left(90)
forward(5)

left(90)
forward(10)
end_fill()

width(4)
right(90)
forward(35)

left(90)
forward(35)

left(90)
forward(35)

penup()
goto(63, 200)
pendown()

color('white')
width(2)
right(180)
forward(33)

penup()
goto(46, 217)
pendown()

right(90)
forward(33)


# ფანჯარა 2
penup()
goto(320, 200)
pendown()

color('light blue')
begin_fill()

forward(35)
left(90)

forward(35)
left(90)


forward(35)
left(90)

forward(35)
left(90)
end_fill()

color('brown')
begin_fill()
left(180)
forward(10)

left(90)
forward(5)

left(90)
forward(55)

left(90)
forward(5)

left(90)
forward(10)
end_fill()

color('brown')
width(4)

right(90)
forward(35)

left(90)
forward(35)

left(90)
forward(35)

left(90)
forward(35)

penup()
goto(337, 203)
pendown()

color('white')

width(3)
left(90)
forward(30)

penup()
goto(322,217)
pendown()

right(90)
forward(30)

# სახურავი(ები)
penup()
goto(0,292)
pendown()

color('brown')
begin_fill()
left(45)
forward(100)

right(95)
forward(95)

right(130)
forward(140)
end_fill()

penup()
goto(400,300)
pendown()
color('brown')
begin_fill()
right(45)
forward(100)

left(95)
forward(100)

left(130)
forward(150)
end_fill()


penup()
goto(202,0)
pendown()

color('black')
left(90)
forward(153)



exitonclick()