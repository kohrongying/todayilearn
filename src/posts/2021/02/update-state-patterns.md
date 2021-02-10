---
date: "2021-02-09"
title: "immutability in js"
slug: "/posts/immutability-in-js"
---

Came across [Immer.js](https://immerjs.github.io/immer/docs/introduction) on ThoughtWorks Tech Radar.

Immer.js works out of the box for to create immutable states for different data structures like js arrays, objects, sets and maps. 

### Why is immutability important? 

Javascript is a language where immutability is not built into the language, things like array.sort updates the array in place. There is a lack of language support to handle this.

In React, it is important not to mutate state directly. That is why we don't do `this.state.name = something`, but rather `this.setState`. 

I believe part of the reason is because a lot of work goes towards reconciliation (React needs to know in the DOM tree of the previous state and the next state, what has changed and then how to efficiently update the UI to match the latest render tree.)

This is also related to a simple solution to shallow compare and use memoization (creating a memoized version of a function that keeps track of the last argument and last result, to reduce wastage of calling a pure function over and over again)

Going back to immer, it is just a simpler and easier way to write this:
```js
oldMe = { name: 'ry', age: 25 }

newMe = { ...oldMe, age: oldMe.age + 1 } 

// in immer
evenNewerMe = produce(oldMe, draft => {
  draft.age += 1
})
```

 
### React Example

4 different ways to update state (3 using immer.js)
```js

    onBirthDayClick1 = () => {
        this.setState({
            user: {
                ...this.state.user,
                age: this.state.user.age + 1
            }
        })
    }

    /**
     * Produce the next state before passing it to setState
     */
    onBirthDayClick2 = () => {
        this.setState(
            produce(this.state, draft => {
                draft.user.age += 1
            })
        )
    }

    /**
     * ...But, since setState accepts functions,
     * we can just create curried producer!
     */
    onBirthDayClick3 = () => {
        this.setState(
            produce(draft => {
                draft.user.age += 1
            })
        )
    }

    /**
     * ...Or, even create a utility that does all of that
     */
    onBirthDayClick4 = nextState(this, draft => {
        draft.user.age += 1
    })


function nextState(component, recipe) {
    return () => component.setState(produce(recipe))
}
```
