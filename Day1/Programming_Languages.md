# What are programming lanagues?
![Programming Languages](https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg)

As you can see in the picture above, there's a bunch of lanauges out there.

## Let's break down what is programming and what is a program language and why we should learn programming

### What is programming ?

`Programming` is giving a set of instructions to a computer to execute. 

We can think about programming as this....

Who remembers getting a lego set as a gift? I'm talking about the big ones, with tons of lego pieces and multiple pages of instructions on how to build it.

[<img src='./LegoImage.jpeg' width='300' height='200' />](./LegoImage.jpeg)

- If you’ve ever build a lego set using the build instructions, you can think of yourself as the computer and the instructions author as a programmer. 
- The instructions author provides you with a set of instructions which you read and then follow. 
- The more complex the instructions, the more complex the result!”

### What is a programming language ?
`Programming languages` are the tools we use to write instructions for computers to follow. 

- Computers “think” in binary — strings of 1s and 0s. 
[<img src='./binarycode.jpeg' width='200' height='200' />](./binarycode.jpeg)
- Programming languages allow us to translate the 1s and 0s into something that humans can understand and write. 

-A programming language is made up of a series of symbols that serves as a bridge that allow humans to translate our thoughts into instructions computers can understand.

[Click here to read more about programming languages](https://www.codecademy.com/resources/blog/programming-languages/)

Let's see what we can do with programming languages:
- You can create online, mobile and desktop games.
- You can create a website for posting information online like a blog or a fourmn
- You can create an applications for your business to help track sales, inventory and process online orders.
- You can also create online tools for education, like Google Classroom. Google Classroom virtualize the learning experience by offering teachers and students a space create, complete and collobrate on class assignments.

### Why should we learning programming?

The reason why I enjoy programming because it motivates me to learn and I like the idea of creating programs to control a computer.

#### Let's look at othe reasons why we should learn programming...
- Programming develops creative thinking. (ref [Coding 101: Programming Language Building Blocks](https://hackernoon.com/coding-101-programming-language-building-blocks-1w513uwe)
- Programming Provides Life-Changing Experiences (ref [Coding 101: Programming Language Building Blocks](https://hackernoon.com/coding-101-programming-language-building-blocks-1w513uwe)
- Programmers solve a problem by breaking it down into workable pieces to understand it better. When you start learning to program, you develop the habit of working your way out in a very structured format. You analyze the problem and start thinking logically and this gives rise to more creative solutions you’ve ever given. (ref [Coding 101: Programming Language Building Blocks](https://hackernoon.com/coding-101-programming-language-building-blocks-1w513uwe))
- "Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn." - Stephen Hawking
- "Everybody in this country should learn how to program a computer… because it teaches you how to think." - Steve Jobs

Next let's discuss the building blocks of a programming language?
## What does a program language look like? 

- Programming languges differ based on their purpose, some have the ability to create programs on your machine while others are used to retrieve data, but all programming languages are made up of the same components:
  - `Syntax` defines the rules for how each instruction is written
  - `Semantics`defines the effect\meaning the instructions have(logic).
  - `Data Types` defines the classification of data we want to store in memory. Data Types vary from one language to antoher, but the type of data we want to store it in are common across all languages.
  - `Terms` are commonly used buzzwords we use to describe a piece of code, such as Paramters, Variables, Expressions, Statements, Functions, Classes and many more. 
  - `Data Structures`: A data structure is how we can store, access, organize and manage the data we have created in a computer, like lists, arrays, etc...
  - `Algorithms`: An algorithm is a step-by-step procedure to solve any computational problem, for example Fibonacci Sequence - this is a sequence of numbers and the next number is found by adding the two numbers before it. 

### Let's break down the building blocks of a programming language using the code below.
Provided below is the `Fibonacci Sequence` written using the Python programming language.

- In Python the rule (syntax) for creating functions is: <Keyword> + <Function Name> + <(<parameters>) + `:`. Using the code example below:
  - <Keyword> is `def' this tells the programmer and python that this statement represents a function.
  - <Function Name> is `Fibonacci` represents the name of the function that a client or consumer will call.
  - <(parameters>)> represents the required inputs needed to call this function. So when a program  wants to call this function, its required to provide value in order to get the results.
  - `:` represents the end of the function name defintion.
- So now we need to understand the `semantics` here: 'def Fibonacci(n):` represents a function that accepts an input value from the consumer or client, more specifically `def Fibonacci(n):` is function contains instructions that will output (or return) the nth Fibonacci number. The code below also provides the logic to generate the desire output.
- So if a program calls this function with a value of 9, then it would output the number is 34. 
```python
# Function for nth Fibonacci number
def Fibonacci(n):

	# Check if input is 0 then it will
	# print incorrect input
	if n < 0:
		print("Incorrect input")

	# Check if n is 0
	# then it will return 0
	elif n == 0:
		return 0

	# Check if n is 1,2
	# it will return 1
	elif n == 1 or n == 2:
		return 1

	else:
		return Fibonacci(n-1) + Fibonacci(n-2)

# Driver Program
print(Fibonacci(9))

# This code is contributed by Saket Modi
# then corrected and improved by Himanshu Kanojiya

```

Let's break down each component in the code examples below:

For example:

```python
def AddTwoNumbers(A, B):
    return A+B
```
[PICK UP FRIOM HERE]
In this example we are using the programming language **Python**, written as code, to create a function (or a section of a code that performs a specific task.) that will add two numbers. 

So let's break down the syntax.....

The Python's syntax for creating a function is: type + name + parameter(s) + instructions
- What is type? **def**
- What is name? **AddTwoNumbers**
- What is parameter(s)? **A** and **B**
- What is instructions? **return A+B*

###Ok, so how does a computer know how to run my program?

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.youtube.com/watch?v=QXjU9qTsYCc)

So you have programming languages which you can use to create a program. Once you're program is created, then you can run your program on a computer.

Computers only know one language and that is binary code (or machine code). We'll talk about binary later, but for now just know computers only understands binary code.

So we have a program, written in specific programming language.

And we have a computer that only understands binrary code.
[NEED AN IMAGE FOR BINARY CODE]

How do we get the computer to understand my program?????

We use a program that can translate my source code (program language) into binary code. How do we do that?

We don't....That is handled by the programming language you choose. 

Programming languages comes with its own built 'translator' to translate the source code into binary code.

For example: 

C#, its a compiled programming language, where a machine (computer) has the tools to translate your source code into binary code (machine code) in order to run your program.

Python, is a interpreted language, where it uses a program called an interpreter (think of it as a sandbox), that will read and execute your source code. The interpreter comes with Python installed package.

### What can you do with programming langauges?
You can use programming langauges to do:
- Create websites, and create desktop and mobile applications.
- Create desktop and online games for systems such as XBox, PlayStation and more...
- Creating and\or deleting files and folders.
- Install or Unistall Software.
- Send emails or send texts and more....

Now, not all programming lanagues are made equal. Some langauges can be used to create various applications, while others are designed to one or two things specifically.
![ProgrammingLanagueUses](https://i.pinimg.com/originals/eb/17/3e/eb173e345290c58823232e966d185a3e.jpg)

In this course we will focus on the Python programming language. 

How is a python a programming language?
![Python](https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/22143409/python3-e1624386861238.jpg)

It's not!!! I'm not talking about the snake called Python, I'm talking about about a programming language named Python.

![PythonLogo](https://ourcodeworld.com/public-media/articles/articleocw-5c65fbda1ea05.jpg)

So.....What is Python?

![QuestionFace](https://c.tenor.com/5uIWcxZiH-cAAAAM/think-d%C3%BC%C5%9F%C3%BCnmek.gif)

## Lets take a 10 minute break
- Get up from your chairs, move around, get a drink and stretch.

## What is Python and how can it be use
- Its program language that can be used to do 'stuff' on computers.
- Its a interpreted language....What does that mean???
  - Most programming language is written using the English language. For example: In python the 
  -  Computers has their own language, which is called binary.
  - The source code Every program\or software is a set of instructions, whether its to add two numbers or send an email over the internet.
  - Compilers and interpreters
- First developed in the late 1980s by Guido van Rossum.
- Its used for creating websites, creating software, creating games, used in mathematics and more. 

[Guido van Rossum](https://gvanrossum.github.io/)

![Guido van Rossum](https://gvanrossum.github.io/images/IMG_2192.jpg)

Python allows you to create desktop, web and mobile applications. Python can be used to create games, send emails, create websites and more.....
### Download and Install Python
### How to look for help

Labs
Lab 1 - Learn how to use the command window 
Lab 2 - Using Python’s IDLE
Assignments - In class work
Running some Commands
Use echo to display text.
Display the current time
Display the operating system version
Display MAC address
Display connection and status
Display Architecture Type (32 or 64 bit) - echo %PROCESSOR_ARCHITECTURE%
Download,Install and run Python
Download the correct Python package
Run the installer
Configure the Python installation
Start the IDLE and check the Python version.

