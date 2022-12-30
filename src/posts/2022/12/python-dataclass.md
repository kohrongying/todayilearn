---
date: "2022-08-08"
title: "python dataclass"
slug: "/posts/python-dataclass"
---

```python
from dataclasses import dataclass

@dataclass(frozen=False, init=True)
class Person:
    age: int
    name: str
```

## frozen=True
By default, frozen is set to False. Setting True will make it immutable once initialized.
Assigning to fields will generate exceptions. As well as defining `__setattr()__` or `__delattr__` methods.
Useful for read-only instances. 

## init=False
By default, init is set to True. This means that the `__init__` method will be generated. Else, ths method will not be generated.

## __post_init__()
This method is called after `__init__()`. I used it to run post init validations on the fields.
Note: if `init=False` then this post init method will not be called.

### InitVar
This is a type that allows the field to be a pseudo-field, i.e. `school` will not be returned in `fields()` method and can be addded as parameters to init (eg. `Person(school=School())`, and can be added to post init methods)
```python
@dataclass
class Person:
    name:  str
    school_id: id | None = None
    school: InitVar[School | None] = None

    def __post_init__(self, school):
        self.school_id = school.get(self.name)

p = Person('ry', School("SUTD))
```

## Links
[Documentation](https://docs.python.org/3/library/dataclasses.html)

