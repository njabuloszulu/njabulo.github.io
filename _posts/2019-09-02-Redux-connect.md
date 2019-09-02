---
Layout:
Title: "Redux-connect"
Date: 2019-09-02
---

## Redux connect

The connect is a function in React Redux that is used to connect a React component to a Redux store.
It doesnt change the component that is being passed but it returns a new connected component that wraps the component you just passed in.
And a connet function takes in four defferent parameters a mapStateToProps,which is a function that will update the Redux store with a new wrapper component.
mapDispatchToProps is a second function that inside the connect parameters which may be an object or a function which will dispacth your your wrapper component to the store.