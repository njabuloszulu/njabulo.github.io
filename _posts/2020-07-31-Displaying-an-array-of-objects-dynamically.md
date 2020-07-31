---
Layout:
Title: "Displaying an array of objects dynamically"
Date: "2020-07-31"
---

## Context
You have a list of persons which has the name of a person and Age,
and we would like to display all the persons dynamically and not repeat ourselves by calling the person component according to how many persons they are in an object.

## Applying the solution
First, we will have to create two components, one component with the person properties and the second component will be carrying the state and also display the first component and its properties.

The first component will have the state of persons with an array of objects we want to display.
In order for us to display each person, we will start by importing our first component which is person the name of the component and map through our list of persons and pass the props of name and age.

`class App extends Component {
  state = {
    persons: [
      { name: "Jim", age: 22 },
      {  name: "Gordon", age: 24 },
      {  name: "Stephanie", age: 26 },
    ]
  };
  render() {
  return (
      <div className="App">
        <h1>Hello and welcome</h1>
        {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() = > this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
      </div>
    );
  }
}
export default App; `

Our second component will just be a simple component with a paragraph that will show a single person's name and age,
the name and age will be passed as props from our first component so we can display all the persons but dynamically.

`const Person = (props) => {
  return (
    <div className='person'>
      <p>
        Hi my name is {props.name} and I am {props.age} of age
      </p>
    </div>
  );
};

export default Person;`
