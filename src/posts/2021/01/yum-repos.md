---
date: "2021-01-12"
title: "yum repos"
slug: "/posts/yum-repos"
---

There is absolutely no issue with running OS updates in an instance with internet. 

When your instance has no internet access but need to get patches, you'd run into `Unable to reach mirror` or `Network timed out` problems. That is because your mirrorlist is accessible over the internet.

Two solutions:
- Use a mirrorList / baseUrl that is accessible over intranet (if possible) Update the values in `/etc/yum.repos.d/`
- Create a proxy for the existing mirror list and add `proxy=http://<proxy>:<port>` to `/etc/yum.conf`


