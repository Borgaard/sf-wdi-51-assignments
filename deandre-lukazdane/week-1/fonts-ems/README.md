# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Fonts, Ems, and Icons

### LEARNING OBJECTIVES
- Describe the differences between web fonts & desktop fonts.
- Apply web fonts using Google Fonts.
- Apply local web fonts using `@font-face`.
- Describe best practices related to responsive design (px vs. em vs. rem vs. %).
- Apply ems as part of responsive web font techniques.

***

<a name="introduction-fonts"></a>
## Intro to New Material: Fonts and Ems 
Adding and styling fonts is an important part of ensuring the content on your site is as readable and legible as possible. First, let's get familiar with the types of fonts available on the web.

### System Fonts
Fonts that render based on what the user has on their computer. Common examples include Arial, Courier, Times New Roman, etc. Use [CSS Font Stack](http://www.cssfontstack.com/) to see which fonts are available on different operating systems.

### Generic Fonts
Generic fonts include `serif`, `sans-serif`, `cursive`, `fantasy`, and `monospace`. Adding a generic font as a value to `font-family` allows the browser to "choose" a default font from the declared category. Generic fonts are most useful as fallback fonts. For example, if you declare `font-family: Futura;` but Futura is not available, the browser will render whatever the default font is (typically, Times New Roman).

This is not ideal, because Futura is a sans-serif font and Times New Roman is a serif font. This will drastically change the design of the site, and could even cause some readability issues. A better approach would be to declare `font-family: Futura, sans-serif;` so the browser loads a sans-serif font in the event that Futura cannot render. You can even go further and declare `font-family: Futura, Helvetica, sans-serif;` which will attempt to render Futura first, then Helvetica, then the fallback sans-serif font.

### Styling Copy with Ems
There are a few good rules of thumb for styling the copy on your page.

### Headings vs. Paragraphs
- Define a hierarchy between your heading and paragraph by using one or more of the following properties on the heading tag: `font-size`, `font-weight`, `font-family`, `color`, `text-transform`, and `border-bottom`.
- Add a `margin` between the heading and paragraph so the heading "sits on top" of the paragraph.

### Paragraphs
- For the best reading experience, a paragraph's `width` should be no more than 40x its `font-size`.
- Always adjust `line-height` to increase readability. The golden ratio of 1.618x in terms of the `font-size` is a good place to start. This is much easier when using ems (see below).
- Using the `<br>` element to create line breaks is not the most efficient method in most cases, and can cause issues with your responsive site. It's best to create new paragraphs by using a new `<p>` element.

### What are the units of measure for type?
`px`
- pixels

`em`
- A proportion of the **element's** font size.
  - e.g., If the element's font size is `16px`, then `0.5em` = `8px`.
- Affected by inheritance.
  - e.g., If the parent element is set to `32px`, then `1em` = `32px`.

`rem`
- A proportion of the **browser's** font size.
- Each browser has a default font size, usually set on the body or html tag.

`Vh`
- Relative to 1% of the total height of the viewport.
- e.g., `30vh` will be 30% height of the total viewport.

`Vw`
- Relative to 1% of the total width of the viewport.
- e.g., `20vh` will be 20% of the width of the viewport.

`%`
- A proportion of the **parent element's** font size.
- e.g. If the parent element's font size is `16px`, then `50%` is `8px`.

***

<a name="demo-fonts"></a>

## Demo: How do we use ems?

Ems are a great way to create consistency in scale and spacing in the layout of all copy on your page. Let's take a look at an example.

Consider the following HTML:

```html
<section>
    <h2>Why I &hearts; Roller Derby</h2>
    <p>Vande velde aerts pantani gaul groupo. Flamme rouge paris-nice, commissaire dwars door vlaanderen for suitcase of courage vendee cutters. Bonk de vlaeminck tete de la course paris-roubaix. </p>

	<p>Het volk an caravane, battoowoo greekgreek e3 prijs vlaanderen with giro del friuli monte paschi eroica ombregt, planket jens danseuse. Hampsten lanterne rouge nevele koppenberg.</p>

	<p>Pantani kaperij gutter van summeren valkenberg forest of arenberg, rouleur derby anduze. Giro d'italia nokere koerse muur vendee nitto, meyrueis liquigas sanchez autobus snob allez.</p>
</section>
```

And CSS:

```css
section {
    font-size: 16px;
    padding: 0 320px;
}

h2 {
    font-family: sans-serif;
    font-size: 32px;
    padding: 8px 0;
    border-bottom: 3px solid #000;
}

p {
    font-size: 16px;
    line-height: 25px;
    width: 480px;
    margin: 25px 0;
}
```

What happens if we convert these `px` measurements to `em`?

```css
section {
    font-size: 16px;
    padding: 0 20em;
}

h2 {
    font-family: sans-serif;
    font-size: 2em;
    padding: .5em 0;
    border-bottom: .2em solid #000;
}

p {
    font-size: 1em;
    line-height: 1.618em;
    width: 30em;
    margin: 1.618em 0;
}
```

Not much of a change. This may make it seem like using ems is more work, or just the same as using pixels. But watch what happens if we change the `font-size` in `<section>` to `32px`:

```css
section {
    font-size: 32px;
    padding: 0 20em;
}
```

Wow! By changing only one value, we've adjusted eight total declarations on our page. Not only that, but all of our styles scaled perfectly together from the original design. Let's change the `font-size` back to `16px`, a good standard paragraph size for desktop websites.

Consider a responsive design of our `<section>`:

```css
@media screen and (max-width: 1000px){
    section {
        font-size: 18px;
        padding: 0 10em;
    }
}
```

It may seem counterintuitive, but smaller screens can benefit from an increase in `font-size` to retain the best readability for the user. With a change in `font-size` and an adjustment to the `padding`, everything in our `<section>` has scaled proportionally. That's efficient CSS!

***

<a name="guided-practice"></a>
## Guided Practice: Web Fonts (# mins)

Navigate to [Google Fonts](https://fonts.google.com/) and, following the instructions on the site, choose a serif font to apply to the code used in the previous demonstration.

Starter code has been provided in [starter-code/adding-fonts](starter-code/adding-fonts).

> Instructor note: Walk students through adding a Google Font to the project in their starter code.


### What's the difference between adding through HTML and CSS?
You can add Google Fonts (and other hosted web fonts) through HTML:
`<link href="https://fonts.googleapis.com/css?family=Font+Name" rel="stylesheet">`

or CSS:
`@import url('https://fonts.googleapis.com/css?family=Font+Name');`

Adding through CSS may be more efficient because multiple pages can access the style with one line of code; compare that to adding through HTML, where each page will need the `link`. You might also argue that adding through HTML is better because the font can load even if the CSS does not. Talk to your instructor to see what they prefer as a best practice.


***

<a name="ind-practice"></a>
## Independent Practice: Local Web Fonts 
You can use the `@font-face` property to add relative or absolute fonts. Let's practice adding fonts locally.

First, [read about how to use `@font-face`](https://css-tricks.com/snippets/css/using-font-face/). For this exercise, you don't need to add different file types, but it's important that you understand the importance of browser compatibility and font rendering.

Next, visit [Font Squirrel](https://www.fontsquirrel.com/) and choose a web-compatible font that you can download and add locally. Try adding one of these fonts to [starter-code/adding-fonts](starter-code/adding-fonts).


**BONUS**
If you finish early, try adding a second font!

***


## What is an icon font?
Icon fonts are just fonts, but instead of looking like letters, each "character" looks like an icon. Let's try them out!

A good resource for icon fonts is [fontello.com](http://fontello.com/).

> Note: Another popular icon font library is [Font Awesome](http://fontawesome.io/). 

### Using the icon font's characters

1. Fontello goes an extra step further by assigning icon shapes to unprintable characters in case you want to use that font for normal characters.
	1. Behind the scenes, traditional characters are stored as numbers.
	1. There are lots of other unusual characters that most developers never use (bells, weird whitespace characters, foreign characters).
	1. http://unicode-table.com/en/
1. Go to the "Customize Codes" tab.
1. Above the icon, you'll see a box.
	- This represents an unprintable character.
1. Below the icon is the character's Unicode value (a four-digit hexadecimal number).
1. You can represent this character in two ways:
	1. Inside your HTML: `&#xE800;` (E800 is the 4 digit hex value)
	1. Inside your CSS: `selector:after/before { content: '\E800' };`
		- You can insert content using CSS.
1. You could also change the character to be a normal character.
1. You can use their css and give your html classes.

***

### Hungry for More?
#### Resources
- [Pixel to Ems/Rems Converter](http://pxtoem.com/)
- [CSS Font Stack](http://www.cssfontstack.com/)
- [Google Fonts](https://fonts.google.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)
- [Fontello.com](http://fontello.com/)
- [Font Awesome](http://fontawesome.io/)

#### Readings
- [CSS Tricks &mdash; Using SVGs](https://css-tricks.com/using-svg/)
- [A Practical Guide to SVGs on the Web](https://svgontheweb.com/)
- [Typography in 10 Minutes](http://practicaltypography.com/typography-in-ten-minutes.html)
- [What is Good Typography?](http://practicaltypography.com/what-is-good-typography.html)
- [8 Simple Ways to Improve Typography in Your Design](https://www.smashingmagazine.com/2009/04/8-simple-ways-to-improve-typography-in-your-designs/)

#### Videos
- [CSS Fonts](https://www.youtube.com/watch?v=LpcWfqXviB0&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=24)
- [Icon Fonts II](https://www.youtube.com/watch?v=4wz2a_ZVGcU&index=26&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [Icon Fonts I](https://www.youtube.com/watch?v=JpIAc5ko-lM&index=27&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
