---
date: "2021-02-07"
title: "distroless docker"
slug: "/posts/distroless-docker"
---

### A lot of what is in our docker image is not necessary
- Related to VM
- Con: bigger image, longer download time
- Con: susceptible to CVE, larger scope for compliance tools/scanning etc

While docker helped to bootstrap a lot of VMs, it was an elegant hack by just zipping up the filesystem. The next easy solution was to have smaller distros (ie busybox which is small). However, this compromised on compatability. 

### What your app needs to run:
- app's compiled source
- app's dependencies (libraries, assets)
- app's language runtime (go/c++ --> libc, java --> JRE, js --> node, python --> python interpreter)
- everything between your app and kernel 

### How to start
Statically link two docker images at the language level using multi-stage builds
1. Use distro image to build
2. Use distroless image to run

Dockerfile example for python apps
```
FROM python:3-slim AS build-env
ADD . /app
WORKDIR /app

FROM gcr.io/distroless/python3
COPY --from=build-env /app /app
WORKDIR /app
CMD ["hello.py", "/etc"]
```

Dockerfile example for java apps
```
FROM openjdk:11-jdk-slim AS build-env
ADD . /app/examples
WORKDIR /app
RUN javac examples/*.java
RUN jar cfe main.jar examples.HelloJava examples/*.class 

FROM gcr.io/distroless/java:11
COPY --from=build-env /app /app
WORKDIR /app
CMD ["main.jar"]
```

Dockerfile for node apps
```
FROM node:10 AS build-env
ADD . /app
WORKDIR /app

RUN npm ci --only=production

FROM gcr.io/distroless/nodejs:10
COPY --from=build-env /app /app
WORKDIR /app
CMD ["hello.js"]
```

### Distroless
- Bootstrapped by selectively extracting debs

This is definitely something to try the next time!


### Resources
- [Google Distroless Images](https://github.com/GoogleContainerTools/distroless)
- [Talk](https://www.youtube.com/watch?v=lviLZFciDv4)
