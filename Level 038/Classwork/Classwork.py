#-------------------sets--------------------------
#daulagebeli-anu ar gaachnia rigi aseve aris mutable
#guest_list = {'Gela','Mela','Nela','Lela','Gela'}
#guest_list.remove('Lela')
#guest_list.add('Sela')
#print(guest_list)

#-------------------Clear-------------------------
#guest_list = {'Gela','Mela','Nela','Lela','Gela'}
#guest_list.clear()
#print(guest_list)

#------------------combine------------------------
#guest_list = {'Gela','Mela','Nela','Lela','Gela'}
#guest_list_2 = {'Gela','Mela','Nela','Lela','Gela','nugzar'}
#la = guest_list.union(guest_list_2)
#print(la) 

#-----------------difference----------------------
#guest_list = {'Gela','Mela','Nela','Lela','Gela','nugzar'}
#guest_list_2 = {'Gela','Mela','Nela','Lela','Gela'}
#diff_set = guest_list.difference(guest_list_2)
#print(diff_set)

guest_list = {'gabo','nika','nia','lola','anna','jeko'}
guest_list_2 = {'gabo','nika','nia','lola','anna'}

def manual_difference():
    res = set()
    for i in guest_list:
        if i not in guest_list_2:
            res.add(i)     
    return res
print(manual_difference())

#-----------dictionary-------------
#me =  {
#   'Name' : 'Gabo',
#    'Surname': 'sss',
#    'Surname':'ddd'
#}
#print(me['Name'])
#me =  {
#    'Name' : 'Gabo',  #Name = key  'Gabo' = value
#    'Surname': 'sss',
#    'Surname':'ddd'
#}
#dict_value = me.values()
#dict_key = me.keys()
#dict_item = me.items()
#print(dict_item)


student_1 = {

'Name':'Nika',
'Surname':'Kobaladze',
'Age': 13,
'A.P': 9

}
student_2 = {

'Name':'Gio',
'Surname':'Mikautadze',
'Age': 14,
'A.P': 8

}
print(student_1)
print(student_2)


#me =  {
#  'Name' : 'Gabo',
#    'Surname': 'sss',
#    'Age': 13
#}    
#print(me['Name'])
#print(me['Age'])
#me['Age'] = 14
#me.update({'Name':'Guram'})
#print(me['Name'])
#print(me['Age'])


me =  {
  'Name' : 'Gabo',
    'Surname': 'sss',
    'Age': 13
}

print('Name' in 'Gabo')