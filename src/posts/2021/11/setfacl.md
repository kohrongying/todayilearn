---
date: "2021-11-04"
title: "linux acl - setfacl"
slug: "/posts/setfacl"
---

# ACL on linux
Recently had a task to assign proper access control to some folders on a linux machine for multiple different users.

My colleague introduced this package. `acl` package consist of both `setfacl` and `getfacl`. I still don't know what the f stands for. Oops, didn't mean for it to sound so bad.

## Demo

```
# Run in ubuntu docker image
docker run -it ubuntu

# Install
apt-get update -y
apt install -y acl

ll
#-rw-r--r--  1 root root    1 Nov  4 04:14 bar

getfacl bar
# file: bar
# owner: root
# group: root
# user::rw-
# group::r--
# other::r--

setfacl -m group::---,other::---,user:user1:r-w bar

ll
-rw-rwx---+ 1 root root    3 Nov  4 04:09 bar*

getfacl bar
# file: bar
# owner: root
# group: root
# user::rw-
# user:user1:rw-
# group::---
# mask::rw-
# other::---
```
## Thoughts

One thing that I'm affected by is that you can only tell the acl when you do a getfacl. The default linux permissions (shown by ll or ls -l) may or may not be affected. It is only indicated with an * behind the file name.

It is not a default package and has to be installed.

Seeing how acl needs more maintenance, I think we may be better off implementing native acl (I'm just giving the name myself ha) by using chmod and chown.
```
chown user1:user1 foo
chmod u=rwx,g=,o= foo
```

## References
[setfacl](https://www.ibm.com/docs/en/zos/2.4.0?topic=scd-setfacl-set-remove-change-access-control-lists-acls)


