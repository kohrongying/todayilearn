---
date: "2021-03-25"
title: "axios validateStatus"
slug: "/posts/axios-validateStatus"
---

We have an application that is using `axios` to call certain endpoints. We set up a simple try catch block.

```js
try {
  const res = await axios(params)
} catch(err) {
  console.err('Something went wrong', err)
}
```

However, recently our endpoint hit a 404. When diving into the logs, I noticed that it was thrown in the catch block. A quick check into the axios documentation (as well as Google), I found the responsible function.

```js
  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
validateStatus: function (status) {
  return status >= 200 && status < 300; // default
},
```

What this means is, by default, if the axios response has a status code of anything less than 200 or more than / equal to 300, an error is thown. This can affect how your application code deals with axios errors.

If you want to change this behavior (because a response is still a response and there is nothing wrong with the request right?), we can change the validateStatus function.

```js
validateStatus: (status) => {
  return true;
}
```

-FIN-
