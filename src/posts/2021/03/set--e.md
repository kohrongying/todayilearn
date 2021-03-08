---
date: "2021-03-08"
title: "set -e"
slug: "/posts/set--e"
---

```
# Abort script if command returns with non-zero exit code
set -e
set -o errexit 

# Abortt script if variable is dereference when it has not been set 
# This prevents unbound variables from ever being used.
set -u
set -o nounset
```

Some recommend that scripts be run with `set -eu` right below the shebang line

## Trap
We can also use `trap function ERR` to act as a catch.
```
#!/bin/bash

echo "hello"

err_report() {
  echo "exit on line $(caller)"
}

trap err_report ERR
echo hello | grep foo

echo "This line will still be printed"
```
Trap allows you to handle the error in a function. However, it will not exit on 1 by default. You can add a `exit 1` in the err_report function.

Also, another caveat is, trap does not work if the error is thrown in a function that is called within a function that is not the return value:
```
outer_fun() {
  err_fun
  echo hello
}
outer_fun
```
This is because the outer scope only cares about the return value of a function which is the last line of the function.

Hence it is good practice to use `set -eu` in conjunction with `trap function ERR` in order to have a well rounded, holistic solution. Where all errors are caught and program exits. 

## Trapping others
Apart from `ERR`, you can also trap other signals like `EXIT`, `SIGINT`, `SIGTERM` and `KILL`.


Note: 
- `echo hello | grep foo; echo $?` Returns the exit code. 
- grep returns 0 when there is a match
- grep returns 1 when there is no match

References
- [The Bash Trap Trap](https://medium.com/@dirk.avery/the-bash-trap-trap-ce6083f36700)

