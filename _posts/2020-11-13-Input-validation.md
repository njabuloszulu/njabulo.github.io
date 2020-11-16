---
Layout:
Title: "Input validation"
Date: "2020-11-13"
---

## Input validation

# Why should we validate inputs
Validating inputs save us from receiving and save unnecessary data to our database and it also prevents users from sending blank field or only unwanted characters, and also to prevent users from sending too little or too many characters. 

An example of an input validation which checks if all the input fields are filled in, and also to check if the input doesnt have spaces only or tabs which are an example of useless data.
let reg = /^\s*$/
if (
        title.match(reg) ||
        description.match(reg) ||
        city.match(reg) ||
        province.match(reg) ||
        expiryDate.match(reg)
      ) {
        return res.status(500).send("Enter all fields");
      }