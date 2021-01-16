---
date: "2021-01-16"
title: "sass scss and css"
slug: "/posts/sass-scss-and-css"
---

Sass has two syntaxes.
1. Sassy CSS (SCSS). It is a superset of CSS3 syntax.
2. Sass (indented syntax). It uses line indentation to specify blocks instead of curly braces and semicolons.

More often than not, we should be talking about scss.

```scss
/* SCSS */
$blue: #3bbfce;
$margin: 16px;

.content-navigation {
  border-color: $blue;
  color: darken($blue, 9%);
}

.border {
  padding: $margin / 2; margin: $margin / 2; border-color: $blue;
}
```

```sass
/* SASS */
$blue: #3bbfce
$margin: 16px

.content-navigation
  border-color: $blue
  color: darken($blue, 9%)

.border
  padding: $margin / 2
  margin: $margin / 2
  border-color: $blue
```

## More on SCSS
1. Variables

Since CSS came up with CSS variables and var() function, this is no longer a cool point. But the syntax is definitely more friendly.

```css
/* SCSS */
$blue: #3bbfce;

p {
  border-color: $blue;
  color: darken($blue, 9%);
}

/* CSS */
:root {
  --blue: #3bbfce;
}

p {
  border-color: var(--blue);
  color: darken(var(--blue), 9%);
}

```

2. Mixins & Include

Mixins allows us to define resusable styles. Mixins are like functions, they include arguments (optional) and can
 include if/else, for loops in them. I am today years old when I found out about this.

```scss
$tablet-width: 768px;
$desktop-width: 1024px;

@mixin tablet {
  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}

.columns {
  padding-top: 5vw;
  display: grid;

  @include tablet {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
  }
  @include desktop {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
  }
}
```

> Mixin names, like all Sass identifiers, treat hyphens and underscores as identical. This means that reset-list and
> reset_list both refer to the same mixin.


### References
[Responsive Design](https://responsivedesign.is/articles/difference-between-sass-and-scss/)