---
date: "2021-02-04"
title: "type error circular structure"
slug: "/posts/type-error-circular-structure"
---

Today, I encountered an error with our axios request. We had thought that it was the endpoint that was problematic, but turns out it was one of our utility functions.

The exact error behind the 502 / 400 status code was a TypeError with circular structure. This was attributed to a line:
```
JSON.stringify(res)

```
where `res` is the response returned from the axios request.

### Replicating the Issue
Here is a simple code snippet to illustrate the circular reference problem:
```js
> const ref = { name: 'ry' }
undefined
> ref
{ name: 'ry' }
> JSON.stringify(res)
Uncaught ReferenceError: res is not defined
> JSON.stringify(ref)
'{"name":"ry"}'
> ref.circular = ref
<ref *1> { name: 'ry', circular: [Circular *1] }
> JSON.stringify(ref)
Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    --- property 'circular' closes the circle
    at JSON.stringify (<anonymous>)
```

So evidently, anything with circular structures, is just bad. It was an oversight as we did not anticipate circular structures or references in the response.

That's fine. We're not gods lol.

### The remedy
The remedy is relatively simple.

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

Here's the stringify syntax for brevity.
> JSON.stringify(value[, replacer[, space]])

Such elegance. 

### References
[Mozilla Circular References](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value)


