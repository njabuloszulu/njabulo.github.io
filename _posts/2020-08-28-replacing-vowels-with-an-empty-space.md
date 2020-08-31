---
Layout:
Title: 'Replacing vowels with an empty space'
Date: '2020-08-28'
---


## Replacing vowels with an empty space
when I came across this challenge the first thing I thought was going to solve challenge was a for loop, but on second thought solving this using a for loop is not the best way since I will have to write a lot of code which will lead to my solution to be messy and another thing the time it will take to compile.

But for the past weeks, I have been looking at regex and how it makes replacing and searching for a particular letter, number or a word easy to understand and it can be done just in one line, I decided to use it.

let string = 'How many wheels are on a car'
let modifiedString = string.replace(/\a|e|i|o|u/gi," ")
out come modifiedString = Hw mny whls r n car