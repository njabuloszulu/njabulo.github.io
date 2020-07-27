---
Layout:
Title: "JWT and its use case"
Date: "2020-07-24"
---

## What is jwt
"jwt is an internet standard for creating data with optional encryption whose payloads holds JSON", and it is used to transfer secured information/data between two endpoint

## Use case
So this week I had to create an authentication system which it had to encrypt the token to hide the password of the user to that an unauthorized user will not be able to log in without signing in first.

with jwt we can also solve the problem of identifying the user by sending a token that contains the user's information, that is given to us by the user. And the data we get back data from the user will which will carry a unique string we give to the user so we can be able to identify the user even if they change the user name or email if our app has that feature.