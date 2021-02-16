---
date: "2021-02-16"
title: "pnpm"
slug: "/posts/pnpm"
---

[pnpm](https://pnpm.js.org/) is an alternative to node package management tools like npm or yarn.

Its key value proposition is that it is efficient, making it 2x times faster than alternatives. 

### How does it achieve this?
When we use npm or yarn, for each project that uses lodash, we will have one copy per project of lodash on disk. 

pnpm uses a content-addressable filesystem to store all files from all module directories on a disk. All files are saved in a single place on disk. When packages are installed, their files are hard linked from that single place - consuming no extra disk space.

### Usage
It resembles usage for npm, making the learning curve almost nil. pnpx is the alternative for npx as well. Sweet.

```
pnpx create-react-app my-cool-new-app
```

The potential file storage space makes this a very inviting change. I for sure like the sound of saving time installing packages and saving space on my local computer (stares at number of js projects..).


### Testing it out
I ran these commands in my project directory.

```
$ curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm

$ rm -rf node_modules
$ rm package-lock.json
$ pnpm install

Packages: +2002
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/rongying/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
Downloading registry.npmjs.org/gifwrap/0.9.2: 5.89 MB/5.89 MB, done
Downloading registry.npmjs.org/image-q/1.1.1: 9.32 MB/9.32 MB, done
Progress: resolved 1994, reused 0, downloaded 1994, added 2002, done
```

A new file `pnpm-lock.yaml` was created. 


Although I ran into some problems as gatsby couldn't resolve some packages, there was a convenient package to resolve this. So porting from npm to pnpm does seem pretty doable.

```
$ pnpm i gatsby-plugin-pnpm
$ pnpm run start
$ pnpm run build
```

Like magic, I was able to run start and build locally. It will take some getting used to, but this sounds like a promising tool! (Even though pnpm has been around since 2017 :gasp:)

### pnpm on Netlify
Tried and tested. Works out of the box when I changed the build command to `pnpm run build`. Not super necessary because the install was using npm anyway.