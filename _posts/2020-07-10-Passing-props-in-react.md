---
Layout:
Title: "Passing props in react"
Date: "2020-07-10"
---

## Passing props
 
Props are used to pass data from one component to another, but we can only pass these props from a parent component down to the child component and an example of this would be like this.

class Parent extends React.Component {
  render() {
    const childName = "Tom";
    return (
      <div>
      <h1>My child is</h1>
      <Child name={childName} />
      </div>
    );
  }
}

the example above is a parent component which has a component called child that will receive the props from the parent component
called childName.

class Child extends React.Component {
  render() {
    return <h2>I am a {this.props.name}</h2>;
  }
}

The above example shows a child component which gets its properties from the parent component hence I define the name as this.props.name because the name is being defined from the parent component and the child will receive it as props
