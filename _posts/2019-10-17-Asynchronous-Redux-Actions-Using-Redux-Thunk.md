---
Layout:
Title: "Asynchronous Redux Actions Using Redux Thunk"
Date:
---

## Asynchronous Redux Actions Using Redux Thunk

By default actions in Redux are dispatched synchronously, which is a problem for any non-trivial app that needs to communicate with an external API or perform side effects. Thankfully though, Redux allows for middleware that sits between an action being dispatched and the action reaching the reducers. There are two very popular middleware libraries that allow for side effects and asynchronous actions: Redux Thunk and Redux Saga. In this post we’ll introduce the former: Redux Thunk.

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

If you’re curious, a thunk is a concept in programming where a function is used to delay the evaluation/calculation of an operation.


