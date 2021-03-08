---
date: "2021-03-03"
title: "docker save"
slug: "/posts/docker-save"
---

`docker save` saves one or more images to a tar archive which is streamed to STDOUT by default.

## Use cases
- Reuse docker image in various stages of pipeline

```
$ docker save hello-world
cowardly refusing to save to a terminal. Use the -o flag or redirect

$ docker save hello-world > helloworlddocker.tar
$ ls -sh helloworlddocker.tar
48 helloworlddocker.tar

$ docker save hello-world | gzip >  helloworlddocker.tar.gz
$ ls -sh helloworlddocker.tar.gz
8 helloworlddocker.tar.gz
```

After saving it as a backup, we can re-use it using `docker load`.

```
$ docker load < helloworld.tar.gz
```
