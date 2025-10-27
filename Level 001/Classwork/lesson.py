name = 'Gabriel'
# name არის ცვლადი
# = არის ცვლადისტვის მნიშვნელობის მიმნიჭებელი სიმბოლო
# 'Gabriel' არის ვცლადისთვის მნიშვნელობა
surname = 'dumbadze'

# print(name)
# პრინტ ფუნქციას გადაეცემა ეკრანზე გამოსატანი ობიექტი

#name = 'gabo' ეს არის str(string) ტიპის ცვალდი
# სტრინკი არის ბრჭყალებში მოქცეული სიმბოლოები
age = 13 # ეს არის int(integer) ტიპის მთელი რიცხვი
height = 1.65 # ეს არის float ტიპის ცვლადი ათწილადი
knows_programming = True # True or False

print(name + '' + surname)
print(name, surname)
print(name + str(age))


print(type(name))
print(type(surname))
print(type(age))
print(type(height))
print(type(knows_programming))
#print(type(age)) age გადაეცა type ფუნქციას,რომელსაც დააბრუნა მისი ტიპი
# და დაბრუნებული ნებისმიერი სიტყვად დავპირინტეთ,რომელმაც
# გაგვაგებინა,რომ print(type(age)) - ის ტიპი არის int(integer)
# - მთელი რიცხვი 