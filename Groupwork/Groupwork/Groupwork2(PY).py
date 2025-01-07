def create_user(name, surname, yearborn, password, email, balance=0):
    return [name, surname, yearborn, password, email, [], balance]  # Adding balance to the user list

# function to add a card to a user
def add_card(user, card_type):
    user[5].append(card_type)  # the cards are stored at index 5 in the list
    print(f"{card_type} added to {user[0]}'s cards.")  # user[0] is the name

# function to view cards of a user
def view_cards(user):
    user_cards = user[5]  # get the list of cards
    if len(user_cards) == 0:
        print(f"{user[0]}'s cards: No cards available")
    else:
        card_list = ', '.join(user_cards)  # join the cards list into a string
        print(f"{user[0]}'s cards: {card_list}")

# function to send money from one user to another
def send_money(sender, receiver, amount):
    if sender[6] >= amount:  # sender's balance should be enough
        sender[6] -= amount  # decrease sender's balance
        receiver[6] += amount  # increase receiver's balance
        print(f"{sender[0]} sent {amount} GEL to {receiver[0]}.")
    else:
        print(f"{sender[0]} has insufficient balance to send {amount} GEL.")

# function to take out money from a user's balance
def take_out_money(user, amount):
    if user[6] >= amount:  # user should have enough balance to withdraw
        user[6] -= amount  # decrease user's balance
        print(f"{user[0]} took out {amount} GEL.")
    else:
        print(f"{user[0]} has insufficient balance to take out {amount} GEL.")

# function to convert GEL to USD
def gel_to_usd(amount, rate=2.81):  # rate right now is 2.81 GEL per 1 USD
    return round(amount / rate, 2)

# function to convert USD to GEL
def usd_to_gel(amount, rate=2.81):  # rate right now is 2.81 GEL per 1 USD
    return round(amount * rate, 2)

# example usage
user1 = create_user("name1", "surname1", 1990, "password123", "john@example.com", 500)  # balance 500 GEL
user2 = create_user("name2", "surname2", 1992, "password456", "jane@example.com", 300)  # balance 300 GEL

add_card(user1, "MasterCard")
add_card(user2, "Visa")

view_cards(user1)
view_cards(user2)

# sending money
send_money(user1, user2, 100)  # John sends 100 GEL to Jane
send_money(user2, user1, 50)   # Jane sends 50 GEL back to John

# taking out money
take_out_money(user1, 200)  # John tries to withdraw 200 GEL
take_out_money(user2, 500)  # Jane tries to withdraw 500 GEL (insufficient balance)

# currency conversion
gel_amount = 100
usd_amount = gel_to_usd(gel_amount)
print(f"{gel_amount} GEL is {usd_amount} USD")

usd_amount = 50
gel_amount = usd_to_gel(usd_amount)
print(f"{usd_amount} USD is {gel_amount} GEL")