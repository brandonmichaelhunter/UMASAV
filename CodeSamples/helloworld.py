# Print statement display the string\content to a screen.

print('Hello World') # This will print hello world to the screen.
print("Hello World") # This will also print hello world to the screen as well.

# Can you tell the difference ?
# The first print statement uses single quotes ''
# The second print statement uses double quotes ''

# 
days_in_feb = 28
print(days_in_feb +' number of days in Feburary')
# This fails why?
# Python doesn't know what to do
# What this is trying to do is combine both the int with the string,
# But the '+' operator thinks its trying to add an int to an string, which is cannot.
# To solve this we must use type converstion
print(str(days_in_feb) + ' number of days in Feburary')

# input() will always return a string
