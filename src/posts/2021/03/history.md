---
date: "2021-03-21"
title: "history"
slug: "/posts/unix-history"
---

If you can't remember your command line syntax, this will be a helpful trick. Which I recently saw a coworker using.

```
history | grep lsof 
```

If you forgot that lsof syntax (was it -n or tcp:3000?), you can run history. It will return the commands in `history` filtered by keyword lsof.

```
history | grep lsof | tail -5
```

For last 5 commands (including the previous).

-FIN-
