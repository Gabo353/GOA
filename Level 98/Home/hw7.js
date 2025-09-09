const users_name = String(prompt('What is your name: '));

if (users_name.toLocaleLowerCase() === 'gabriel'){

    console.log('Funny, we have same names and the same name as my mentor:>')

}
else if (users_name.toLocaleLowerCase() === 'goga'){

    console.log('You have same name as my leader:))')

}

else{

    console.log('Respectfully, who the hell are you?')

}