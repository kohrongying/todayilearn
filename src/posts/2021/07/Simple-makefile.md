---
date: "2021-07-26"
title: "Simple makefile"
slug: "/posts/Simple-makefile"
---

make is a utility, that requires a `Makefile` or `makefile` which defines a set of tasks to be executed.

make is most commonly used to compile a program from source code. Many opensource projects use make to compilei C/C++ files into a final executable binary that can be installed with `make install`.

Primary goal of Makefiles is to compile files, based on what files have changed.

# Simplest example
```make
blah: requires1.o
	echo "Runs third"

requires1.o: requires2.c
	echo "Runs second"

requires2.c:
	echo "This runs first"

.PHONY start
start:
    source venv/bin/activate && python3 start.py
```

## What is PHONY
Adding .PHONY to a target will prevent make from confusing the phony target with a file name.

## Syntax
```
target: pre-requisites
<TAB> receipe 
```

## References
- [Open source article](https://opensource.com/article/18/8/what-how-makefile)
- [Makefile Tutorial](https://makefiletutorial.com/)
