---
date: "2021-01-06"
title: "docker run bash"
slug: "/posts/docker-run-bash"
---

We can run an interactive bash session in docker containers.

```bash
docker exec -it cde bash
```
where cde is the first 3 digits of your docker container

> If you have an image but not a container, you can run this for an efficiency boost.

```bash
docker run -it ubuntu bash
```
### Interactive and tty
-it actually stands for interactive (-i / --interactive) and tty (-t / --tty)

- Interactive - like a shell
- Tty - allocates a pseudo-tty.

### References
[docker run reference](https://docs.docker.com/engine/reference/run/)
