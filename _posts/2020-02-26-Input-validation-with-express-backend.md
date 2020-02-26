---
Layout:
Title: "Validating an input field: Backend Express"
Date: "2020-02-26"
---

## Validating an input field: Backend Express

When validating an input the first thing I do is when a user tries to add an empty input, I don't allow them to add empty data to my database.
So what I did was on my post API since Am using async-await, in my try, I first destructure my req.body.userName a const userName because I will be using it repeatedly.

const {userName} = req.body;

After that, I then create an if statement to check if the input is empty or not and return the response depending on the boolean.

if (userName.trim().length <= 1){
return res.status(400).json({message:error})

The .trim() I use it to cut out unnecessary spacings, now that I have checked if the input is empty or not the next step I did was to check for duplications and with the duplications I had some tiny struggle till I figured it out.
I created a new cost which is checking for the name that marches the user input with the database an if statement with the cost I created to check if the statement is true or false.

if (findUser){
return res.status(400).json({message:error})
}
After the two if statement I then procceded with creating a new user name and saving it to the database.