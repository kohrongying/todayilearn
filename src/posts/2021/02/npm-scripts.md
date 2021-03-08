---
date: "2021-02-15"
title: "npm scripts"
slug: "/posts/npm-scripts"
---

I came across this [Dev.to article](https://dev.to/paulasantamaria/mastering-npm-scripts-2chd) which summarized all the advantages of npm scripts. Some of them made me very surprised!

### Executing multiple scripts

```
# Run in series
npm run lint && npm run test

# Run in parallel
npm run lint & npm run test
```

### Pre & Post
```js
"prebuild": "npm t",
"build": "npm run build",
"postbuild": "echo VERSION_NUM=$BUILD_NUM > version.txt",
```

When we execute npm run build, npm will execute the scripts in the following order: prebuild, build, postbuild automatically!

### Env variables

Environment variables can be added through the `config` field in `package.json` and can be accessed using `$npm_package_config` prefix. (would it be `pnpm_package_config` for pnpm? :thinking_face:)

Many thanks to the written article for enlightening me on something so simple yet overlooked!

