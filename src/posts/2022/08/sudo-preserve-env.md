---
date: "2022-08-12"
title: "sudo preserve env"
slug: "/posts/sudo-preserve-env"
---

Running a script with environment variables set manually did not work when it is run with super user privileges.

Turns out we need to preserve the environment variables by a `-E` flag.

O-kay.

```
{12:06}~/Documents/scripts:master ✗ ➭ export bamboo_scmUsername=myuser
{12:08}~/Documents/scripts:master ✗ ➭ sudo -E bash -c 'echo $bamboo_scmUsername'
myuser
{12:08}~/Documents/scripts:master ✗ ➭ sudo bash -c 'echo $bamboo_scmUsername' 

```
