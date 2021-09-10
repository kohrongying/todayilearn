---
date: "2021-09-10"
title: "typescript type vs interface"
slug: "/posts/typescript-type-vs-interface"
---

# Type Aliases
Apart from the basic types in Typescript - i.e. string, number, boolean, there are also type aliases that we can define. For example:

```js
type Person {
  name: string,
  age: number
}
```

## Types can be combined
```
type Name {} 
type Age {}
type Person = Name & Age
```

## Or take on either value
```js
type Woman {}
type Man {}
type Person = Man | Woman
```

# Interfaces
```js
interface Song {
  name: string
}
interface Song {
  artist: string
}
```
Interfaces can only help to define the types. Another thing is merging interfaces with the same name. Something that types cannot. You can only define one type with that name. 

# When to use what
## Interface for React Component Props 
```js
interface TodoProps {
  name: string;
  isCompleted: boolean
};

const Todo: React.FC<TodoProps> = ({ name, isCompleted }) => {
  ...
};
```

## Type Aliases for functions
```js
type Person = {
  name: string,
  age: number
};

type ReturnPerson = (
  person: Person
) => Person;

const returnPerson: ReturnPerson = (person) => {
  return person;
};
```

## References
[Logrocket article](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)



