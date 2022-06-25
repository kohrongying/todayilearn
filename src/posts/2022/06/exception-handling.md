---
date: "2022-06-25"
title: "exception handling"
slug: "/posts/exception-handling"
---

## Attempt 1 - no try/exception
```python
def a():
    print('a begin')
    b()
    print('a end')


def b():
    print('b begin')
    c()
    print('b end')

    
def c():
    print('c begin')
    1/0
    print('c end')

if __name__ == "__main__":
    a()
```
Output we expect to see a run time error:
```
a begin
b begin
c begin
Traceback (most recent call last):
  File "/Users/rongying/Documents/scratch/pythongs/run_exceptions.py", line 19, in <module>
    a()
  File "/Users/rongying/Documents/scratch/pythongs/run_exceptions.py", line 3, in a
    b()
  File "/Users/rongying/Documents/scratch/pythongs/run_exceptions.py", line 9, in b
    c()
  File "/Users/rongying/Documents/scratch/pythongs/run_exceptions.py", line 15, in c
    1/0
ZeroDivisionError: division by zero
```

## Attempt 2 - catch exception at top of function
```python
def a():
    print('a begin')
    b()
    print('a end')


def b():
    print('b begin')
    c()
    print('b end')

    
def c():
    try: 
        print('c begin')
        1/0
        print('c end')
    except:
        print('exception caught')

if __name__ == "__main__":
    a()
```

Output we see the exception was caught and both functions a and b completed running. That can be problematic especially if function a and b depends on the result of function c.
```
a begin
b begin
c begin
exception caught
b end
a end
```

## Attempt 3 - try/except at bottom of stacktrace
```python
def a():
    try:
        print('a begin')
        result = b()
        print('a end', result)
    except:
        print('exception caught in a')


def b():
    print('b begin')
    result = c()
    print('b end', result)

    
def c():
    print('c begin')
    1/0
    print('c end')

if __name__ == "__main__":
    a()
```

Output we see the exception was caught in a and functions a and b exited
```
a begin
b begin
c begin
exception caught in a
```

## Lessons learn
Try catch in first function call (bottom of stacktrace)
