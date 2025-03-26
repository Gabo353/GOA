#1
def lottery(s):
    lucky = ''
    for i in s:
        if i.isdigit():
            if i not in lucky:
                lucky += i
    return lucky or 'One more run!'

#2
def longest_word(s):
    longest = ''
    for i in s.split():
        if len(i) >= len(longest):
            longest = i
    return longest

