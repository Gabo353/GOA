#1
double_char = lambda s : ''.join(i*2 for i in s)

#2
get_average = lambda a : sum(a) // len(a)


#3
get_planet_name = lambda id : [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"][id - 1]


#4
sum_str = lambda a, b : str(int(a or "0") + int(b or "0"))

#5
merge_arrays = lambda a, b : sorted(set(a + b)) 