---
date: "2021-02-02"
title: "postcss"
slug: "/posts/postcss"
---

Recently, to my chagrin, I realised my 11ty-blog-starter imports Tailwind but through the use of CDN stylesheet. I was wondering for minutes why my changes in the `tailwind.config.js` were not effected, because it wasn't even wired up in the first place.

So I looked up some websites to find out how to do so. One of the most popular ways is through the use of `postcss`.

### What is postcss
According to its [website](https://postcss.org/), it tis a tool to transform css with js. Equipped with autoprefixer package, it allows you to add vendor prefixes easily.

Tailwind can be installed as a PostCSS Plugin.

```
// postcss.config.js
module.exports = {
  plugins: [
    require(`tailwindcss`)(`./tailwind.config.js`),
    require(`autoprefixer`),
  ],
};
```

Add the tailwind imports in your styles.
```css
// styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And then run postcss to generate the output file.
```
postcss ./styles.css --o _site/assets/styles/tailwind.css
```

It was a simple, no-fuss solution. I can't believe I loaded it over CDN and then branded it as 11ty-Tailwind. I'm so embarrassed.

Good thing I fixed it yesterday, added a bunch of other things like
- Tailwind Typography (prose styling for markdown)
- Tailwind Dark Mode
- Updated some styling

### Shameless plug
Check out my [11ty-blog-starter template](https://eleventy.rongying.coL) and its [source code](https://github.com/kohrongying/11ty-blog-starter).

