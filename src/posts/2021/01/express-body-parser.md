---
date: "2021-01-13"
title: "express body-parser"
slug: "/posts/express-body-parser"
---

I was starting a node express project today. Simple things I learnt today.

## 1. Body Parser
It is an express middleware. According to its [website]("http://expressjs.com/en/resources/middleware/body-parser.html"),

Note As req.body’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.

To sanitize the data in your request, better to use this.

## 2. Crypto to generate random numbers

```js
require("crypto").randomBytes(16).toString("hex")
```

The next best thing is that crypo is inbuilt into node. Quick and easy.
