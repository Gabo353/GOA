#1
def count_by(x, n):
    res = []
    for i in range(1, n + 1):
        res.append(x * i)
    return res

#2
def get_planet_name(id):
      planets = {
         1: "Mercury",
         2: "Venus",
         3: "Earth",
         4: "Mars",
         5: "Jupiter",
         6: "Saturn",
         7: "Uranus", 
         8: "Neptune"
    }
      return planets.get(id,"Uknown")

#3
def human_years_cat_years_dog_years(human):
    if human == 1:
        return [human, 15, 15]
    elif human == 2:
        return [human, 24, 24]
    else:
        catYears = 24+ (human - 2) * 4
        dogYears = 24 +(human - 2) * 5
        return [human, catYears, dogYears]
    
#4    
def twice_as_old(dad, son):
    if dad == 2 * son:
        return 0
    elif dad > 2 * son:
        return dad - 2 * son
    else: 
        return 2 * son - dad
    
#5
def greet(language):
    hello = {
   "english": "Welcome"
    , "czech": "Vitejte"
    , "danish": "Velkomst"
    , "dutch": "Welkom"
    , "estonian": "Tere tulemast"
    , "finnish": "Tervetuloa"
    , "flemish": "Welgekomen"
    , "french": "Bienvenue"
    , "german": "Willkommen"
    , "irish": "Failte"
    , "italian": "Benvenuto"
    , "latvian": "Gaidits"
    , "lithuanian": "Laukiamas"
    , "polish": "Witamy"
    , "spanish": "Bienvenido"
    , "swedish": "Valkommen"
    , "welsh": "Croeso"
       }
    
    return hello.get(language,'Welcome')

#6