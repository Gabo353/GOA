def orsis(num):
   bin = ''
   while num > 0:
      bin = str(num % 2) + bin
      num //= 2
   return bin   

age = 13
bin_age = orsis(age)
print(f'My age is {age} in binary is {bin_age}')

#1
def fake_bin(x):
    res = ''
    for i in x:
        if int(i) >= 5:
            res+= '1'
        else:
            res+= '0'
    return res       

#2
def dna_to_rna(dna):
    return dna.replace('T', 'U')