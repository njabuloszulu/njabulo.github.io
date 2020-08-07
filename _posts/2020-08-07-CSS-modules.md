---
Layout:
Title: CSS modules 
Data: '2020-08-07'
---

## CSS modules
CSS modules work by letting you import a CSS file and turning it into a javascript object which we can then pass to our class names props in our components.
Each CSS module file turns into an object where every class becomes a key that will be mapped to specific specialized class names that get rendered into HTML or JSX if its react which will be converted to HTML still.

code example.

import React from "react";
import classes from "../Person/Person.css";

`const Person = (props) => {
  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        Hi my name is {props.name} and I am {props.age} of age
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};`
export default Person;
