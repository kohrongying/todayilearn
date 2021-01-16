---
date: "2021-01-07"
title: "docker storage drivers"
slug: "/posts/docker-storage-drivers"
---

docker's default storage driver is in overlay2 for linux/rhel systems.

Whenever docker builds an image according to the Dockerfile, each line / command in the Dockerfile results in its own layer. Docker is able to then reuse each layer.

This is the reason why this folder is usually so huge! 
