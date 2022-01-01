#################################################################################
# Date: 12.31.2021                                                              #                      
# Author: Brandon M Hunter                                                      #
# Description: This script will prompt the user for their full name and age and #
# convert both values into binary code and display the results to the screen.   #
#################################################################################

# Get user's full name.
usersResponse = str(input("Please provide your full name and age?"))
#age = int(input("What is your current age?"))

# using join() + bytearray() + format()
# Converting String to binary
content_to_convert_to_binary = ''.join(format(i, '08b') for i in bytearray(usersResponse, encoding ='utf-8'))
#number_to_binary = "{0:b}".format(age)  


# printing result 
print("--------------------------------")
print("Text to be converted into binary")
print("--------------------------------")
print("{}".format(usersResponse))
print(" ")
print("--------------------------------------------")
print("This is your name converted into binary code")
print("--------------------------------------------")
print("{}".format(content_to_convert_to_binary))


 
 
