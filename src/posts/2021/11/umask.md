---
date: "2021-11-01"
title: "umask"
slug: "/posts/umask"
---

Umask defines the default permissions for files that are created on your linux system.

```
umask -S
u=rwx,g=rw,o=

umask -p
0027
```

You can change the permissions per user.

```
echo "umask 0023" >> ~/.bashrc
```

# What the digits mean

- 0 = 7 - (4+2+1) = rwx
- 2 = 7 - (4+1) = rx
- 3 = 7 - (4) = r

Something like this. :) 
