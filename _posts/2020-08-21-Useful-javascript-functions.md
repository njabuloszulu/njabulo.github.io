---
Layout:
Title: "Useful javascript functions"
Date: "2020-08-21"
---

## Proptype validation

Proptype validation is a perfect use when it comes to validating props in order to see what is the type of props are we passing,

## UseEffect 

Returns an empty array as a second function if the data is not changed and we want to display it onMount.we can return an array if we want to change that particular variable.

## Object.keys

Object.keys takes an object and it turns it into an array and is most useful when it comes to react for because our state most is always an object and if we want to return an array,it is best to use it.
e.g
`const object1 = {
  a: 'a string',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
`