#1
def count_arara(n):
    amazon = []
    for i in range(n // 2):
        amazon.append('adak')
    if n % 2 == 1:
        amazon.append('anane')
    return ' '.join(amazon)




