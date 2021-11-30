# Day 1 - Introduction to Python

Welcome students. This page is designed as a resource for you to use when working on your assignments and labs.

## What are commands? 
Merriam-Webster defines command as 
- to give (someone) an order: to tell (someone) to do something in a forceful and often offical way or 
- to have authority and control over (a group of people, such as soliders) or
- **to give orders**

Some examples of commands are:
- Clean your room.
- Take the trash out.
- Complete your assignments before tomorrow.

Theses are examples command, where one person **gives orders** for another person to follow or **execute**.

What is execute?
- To do or perform (an action or movement that requires skill)

For example:

Who knows what is an IPhone?
The IPhone is a smartphone made by Apple that combines a **computer**, IPod(transition into ITunes), digital camera and cellular phone into one device with a touchshreen interface.

IPhones are equiped with software that end users can use to **execute** specific **commands** on their phone, like make a phone call, send emails or ask Siri questions.....

### What is Siri?
Apple IPhones has built-in voice-controlled personal assistant called Siri. You can ask her questions, tell her to show you something or issue her **commands** for her to **execute** on your behalf, hands-free.
![Apple IPhone](https://github.com/brandonmichaelhunter/UMASAV/blob/beetle/Day1/IPhone_Siri.jpg)

Let's demostrate Siri: 

Ask Siri who won the world series this year? Share with the class.

**How does Siri know who won the world series?**

Siri is trained to learn about you through the data on your phone and its trained to stay updated with the information on the web. 

Siri has the **required skills** to **execute** almost any **commands** you ask.

*Computers, Execute, Commands....Whats the point?*
You, humands can command a computer to do what you want it to do. We can uses different programs, like Siri, to **execute commands** that we need completed.

You provide the instructions to the computer and the computer will **execute** your **command**.

Next, let's discuss how we can communicate our instructions\commands for a computer to execute.

## How do we communicate with computers

1. Using a Command console (or Windows Command console)
2. Using a programming languages
3. Using thrid party software

Let's start with command consoles

### Windows Command Consoles

A command console is an application that is installed on your computer which you can use to execute commands that you give to it.

A command console can be used to communciate with a computer.

If a user wants to execute a command, the user will type in the command into the console screen and then hit the 'Enter' key. Once the 'Enter' key is clicked, then the command is sent to the computer and the computer will execute your command.

You can use command consoles to perform the following commands:
- Creating or deleteing a folder and\or files.
- Executing software
- Communicate with other computers

This is what a command console looks like on a PC.
![Command Window](https://github.com/brandonmichaelhunter/UMASAV/blob/beetle/Day1/ComputerCommand.png)

### What are some common commands that we can execute using a command console?

| Commands | Description | Example |
|----------|-------------|---------|
| **cls** | This command wipes the command screen clean | cls |
| **Systeminfo** | This command give you a detailed configuration overview for your computer. | systeminfo |
| **tasklist** | This command provdes a current list of all tasks running on your PC. | tasklist |
| **title** | This command chnage the title of the command prompt window. | title New Title
| **color** | This command changes the background color of the command prompt window. | color 1 9 |

**Note:**

Here are color codes that you can use with the **color** command
| Background Color Code | Foreground (text) Color Code| Example |
|-----------------------|-----------------------------|---------|
| 0 (Black) | 8 (Gray) | color 0 8 |
| 1 (Blue) | 9 (Light Blue) | color 1 9 |
| 2 (Green) | A (Light Green)| color 2 A |
| 3 (Aqua) | B (Light Aqua)| color 3 B |
| 4 (Red) | C (Light Red)| color 4 C |
| 5 (Purple) | D (Light Purple)| color 5 D |
| 6 (Yellow) | E (Light Yellow)| color 6 E |
| 7 (White) | F (Bright White)| color 7 F |

Let's review.....
- A command console is an application that is installed on your computer which you can execute commands that you give to it.
- When you type in commands into the command console and hit the enter key, you are communicating with the computer by giving the computer a task\command to complete.
- Some of the commands that you can execute are: systeminfo, tasklist, title, and color.

**Let's discuss **programming languages**

## What are programming lanagues?
![Programming Languages](https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg)

As you can see in the picture above, there's a bunch of lanauges out there.

You can think of programming lanagues as a way for us to talk to computers. Similar to how we use English to talk to each other, we can use programming lanagues to talk computers as well.

Programming languages can be used give instructions\commands for the computer to execute. 

Most Programming languages were created using the English language. This makes it readable for you and I to create programs.

What does a program language look like?

Well programming languges differ based on the syntax.

What is syntax? Glad that you asked.

Its the arrangement of words and phrases to create well-formed sentences in a language. 

For example: 

For the english language the most basic syntax follows a subject + verb + direct object. 

- **'Jillian hit the ball.'**
- What is the subject ? The person or thing being discussed, which is **Jillian**
- What is the verb ? The action-giver, which is **hit**
- What id direct object? The receiving the action of the verb, which is **ball**

The same goes for programming languages, we need to understand the programming language's syntax in order to talk to computers.

For example:

```python
def AddTwoNumbers(A, B):
    return A+B
```

In this example we are using the programming language **Python**, written as code, to create a function (or a section of a code that performs a specific task.) that will add two numbers. 

So let's break down the syntax.....

The Python's syntax for creating a function is: type + name + parameter(s) + instructions
- What is type? **def**
- What is name? **AddTwoNumbers**
- What is parameter(s)? **A** and **B**
- What is instructions? **return A+B*

So how does computer's know how to read my program? 

https://www.youtube.com/watch?v=QXjU9qTsYCc

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





