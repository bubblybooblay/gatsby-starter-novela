---
title: How to Set Up Novela Starter Theme
author: Cindy S
date: '2020-05-16'
excerpt: Rebranding and the likes.
hero: ./images/hero.jpg
---
## 1. Sign up for GitHub and Netlify

If you haven't. 

## 2. Decide on a Static Site Generator

One of the easiest ways to get started with Netlify (bundled with a Content Management System like Netlify CMS) is through a [One-Click Deploy](https://www.netlifycms.org/docs/start-with-a-template/).

*Content Management System is something with an interface where you can update posts easily. It is optional as you can publish content in your Git repo.*

You can choose from a variety of Static Site Generators, and honestly, I have no idea what the differences are, but I somehow decided on Gatsby because of the [Selections of Themes](https://templates.netlify.com/tags/netlifyCMS). You can also check out [Gatsby Starters](https://www.gatsbyjs.org/starters/?). One thing to note is these starters will be bundled with their respective CMS, be sure to check them out before selecting one as some aren't free.

I chose [Novela](https://www.gatsbyjs.org/starters/narative/gatsby-starter-novela/) by   [Narative](https://narative.co) because I like how it looks.

Once you click to deploy, you will see something similar to what is presented in this [step-by-step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). 

The easy part is done.

Now, the hard part begins. 

## 3. Set up the Enviroment

Firstly, you need to install a bunch of stuff on your computer, you can click on the links below for the documentation.

* Download [Git](https://git-scm.com/book/en/v2) 
* Download [Node.js](https://www.gatsbyjs.org/tutorial/part-zero/) 
* Download a code editor, I downloaded [Visual Studio Code](https://code.visualstudio.com/#alt-downloads)
* Download [Yarn](https://classic.yarnpkg.com/en/) - it is an alternative for npm, I did it because my theme calls for it
* Run a bunch of command lines (in your code editor!! Learn how to set up VS code for Git [here](https://www.youtube.com/watch?v=Fk12ELJ9Bww) and how to configure terminals [here](https://www.youtube.com/watch?v=E9C3M0XlndM)), check the documentation for what are needed.

## 4. Import the Directory

Follow the instructions [here](https://github.com/narative/gatsby-starter-novela). I ran git clone using the URL in my VS code. 

## 5. Set up the Backend and Authorization

Go to static > admin > config.yml and set the authentication method to github. 

```
backend: # Set up your backend
  name: github
  repo: [USER NAME]/[REPO NAME]
```

git push update to Netlify, then go to your Netlify site. Append the url with /admin and set up authorization method. 

To authorize via GitHub, check out the setup [here](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings). 

## 6. Update the Site Data

Go to gatsby-config.js and change the meta-data, links, blog name, etc. 

## 7. Update the Author Detail

Go to content > author/authors > add your-name.yml, change featured to true.

```
name: YOUR NAME
bio: |
  Your Description
avatar: ./avatars/filename.fileformat
social:
  - url: https://instagram.com/[]
  - url: https://github.com/[]
  - url: https://twitter.com/[]
  - url: https://facebook.com/[]
featured: true
```

Edit the author detail in content > posts - make sure the author name matches **YOUR NAME** exactly, otherwise you will get an error. 

## 8. Change the Favicon and Site Logo

The step for Favicon is pretty straightforward - you just swap out the picture in src > assets > favicon.png - make sure your new file has the same name as the original file.

The logo is a little more tricky. Follow the steps in the [Theme Repository](https://github.com/narative/gatsby-theme-novela) by creating a new folder structure:
src > @narative > gatsby-theme-novela > components > Logo, and add a new file Logo.tsx. 

Mario Basic's [post](https://blog.mariobasic.com/2019/08/27/novela-gatsby-js "Novela ❤️ Gatsby.js") re: the settings of SVG file, and his [GitHub Repo](https://github.com/mabasic/mariobasic-blog) was super helpful in helping me get my logo up and running. 

## 9. Check if your Updates are Working

In your node terminal, type yarn dev. Then check at <localhost:8000> on your browser to see if the build is successful. 

## 10. Publish Content!

There are three ways you can do it.

You can do it locally / remotely:

### Local

* content > posts > create a new folder following the structure of the first post, and create a new index.md file. Copy the format over from the first post in the website and edit accordingly. 

*  Open a new node terminal (make sure the first node terminal ran yarn dev) and run yarn proxy. Once done, you can access the CMS by appending /admin to your localhost:8000. Write your stuff and publish. Then git commit changes and git push to deploy at Netlify.
### Remote

*  Append /admin at your Netlify site, gain authorization and publish there. 

Okay, I think that is all for now. I will update this post as I figure more things out. Ignore the content below as I am still keeping them around for references.

## 11. Additional Plugins

I also added Google Analytics and Mailchimp to my site. 

For Mailchimp, I operated based on the steps in the [Theme Repository](https://github.com/narative/gatsby-theme-novela) and some help from [Gatsby's documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/)

For Google Analytics, I referred to:
[Adding Google Analytics to Gatsby - with Privacy Setting](https://aiki-developer.com/blog/gatsby-google-analytics)


- - - 

## Headers

# H1

It is recommended to NOT use H1s as it is reserved for the article heading. Any H1 is set as an H2.

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

Emphasis, aka italics, with *asterisks* or *underscores*.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and *underscores***.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number

* Unordered list can use asterisks
* Or minuses
* Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link](https://www.mozilla.org)

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions](http://slashdot.org)

Or leave it empty and use the [link text itself](http://www.reddit.com).

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

## Images

<div className="Image__Small">
  <img
    src="./images/article-image-2.jpg"
    title="Logo Title Text 1"
    alt="Alt text"
  />
</div>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.

## Code and Syntax Highlighting

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### JSX

```jsx
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```

## Blockquotes

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

## Horizontal Rule

Horizontal Rule

Three or more...

- - -

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

- - -

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
