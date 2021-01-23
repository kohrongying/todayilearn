---
date: "2021-01-22"
title: "image resizing in browser"
slug: "/posts/image-resizing-in-browser"
---

I came across a comprehensive [article](https://imagekit.io/blog/how-to-resize-image-in-html/) on image resizing. I found several points interesting:

- Specifying both width and height on an image in css will lose its aspect ratio
- Specifying width and `height: auto` will keep its aspect ratio
- Specifying `width: 100%` might scale the image up to fit parent width
- Specifying `max-width: 100%` will scale image down to fit parent width but never up

Yet to try `object-fit` and `object-position` CSS properties.

> Avoid client side resizing and serve correctly sized images from server

I think the appropriate solution will differ from use case to use case. Actual image and then thumbnail sizes, for example. Then again there's img srcset which I have yet to try out as well. 

Ooo, much to explore.
