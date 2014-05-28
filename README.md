# Strava Forum

## Description

A working prototype of a standard forum as imagined in the context of Strava. Fully responsive and interactable, but with canned data.

## Installation

1. `npm clone git@github.com:adrianocastro/strava-forum.git`
1. `cd strava-forum`
1. `npm install`
1. `node app.js`
1. open `http://localhost:3000` on your browser

## Brief

Imagine that Strava is planning on building a forum site. The site would function like a standard forum, similar to http://forum.slowtwitch.com/. For starters, it'd be available to logged-in users only. There would be some pre-built categories: one category for each Challenge, a category for Cycling Racing, Running Racing, Running Gear, and Cycling Gear. Within each category, users could: create new post; see a list of posts; comment on a post; kudo a post or a comment within a post.

Design and build an HTML prototype of the Strava Forum site. The data can be canned, but the site should be interactive, and should show how users would perform the actions listed above. The site should feel like a Strava site, and should be responsive. Please provide some documentation that describes what design/implementation choices you made.

What we are looking for:
- clean, semantic HTML markup
- excellent user experience in desktop, tablet, and mobile forms
- elegant design

## Notes on Design and Implementation

### Setup

To speed up and facilitate development I recycled a prototyping setup I used in the past that runs on Express on top of node.js and uses the [dust templating engine](http://linkedin.github.com/dustjs).

This setup made it possible to easily setup and share templates as well as handle canned data for testing.

This is beyond the context of the exercise but I thought it was worth mentioning.

### Design Approach

A per the brief, I tried to follow Strava’s existing design language and patterns, whilst also trying to help standardise those via a library of common elements and branding.

My first approach was to research the existing website, from the most popular destinations (e.g. Activity Feed, Training) to some of the more obscure (e.g. Clubs, Training Videos), and look for common grids, elements and design approaches.

Upon identifying these, and along with the information provided in the brief and gathered from subsequent discussions, I created a library of common elements (buttons, anchors, menus, tab bars, etc). These would later help inform the design choices but also speed up development.

### Implementation Philosophy

My approach follows the Web Standards philosophy as pioneered by Jeffrey Zeldman. It follows three key guiding principles:

- semantic markup
- separation of content, presentation and behaviour
- progressive enhancement/graceful degradation

This philosophy promotes clean and maintanable code that performs well. It’s forward thinking whilst, at the same time, as inclusive and accessible as possible without ever alienating audiences (that may not be on the latest technology). 

In an effort to prompt discussion, some decisions were purposefully made to go against the existing approach in production (e.g. HTML5 semantic elements), whilst others were left intact (e.g. svg imagery).

Furthermore, as per the brief, the prototype I created follows a responsive design approach by offering a fluid layout that’s adaptive to varying screen sizes but also different devices.

### Branding

#### Fonts

Font definition is done at the `body` level and kept simple. Sizing was abstracted to helper classes to help keep things consistent and under control.

Furthermore, some key elements were handpicked to apply antialising font-smoothing to. The key guideline being that font smoothing should mostly be left to the operating system and especially left untouched for large sections of text so not to compromise up readability.

The same approach was taken with regards to `optimizeLegibility` for `text-rendering`.

##### Sizing with rem values

Font sizing is done using rem values (instead of em, to avoid issues with compouding) with a fallback in pixels.

Using rem sizing would make it very easy to change the font-size on the page via a sizing widget that could simply update the `font-size` declaration in the root (`html`) element.

#### Color

Like fonts, color control was mostly kept under the control of the helper classes and common elements. Ideally, common text and background colors should also abstracted to helper classes (e.g. bg-primary, bg-emphasis, txt-simple, txt-emphasis) to help manage the rules and keep branding consistent.

## Final Thoughts

Although great care was taken to complete this prototype it’s worth noting that it is still just a prototype – very far from production ready code. It was built focusing on good architecture and good practices but also greatly promoting the experience and experimentation.

Beyond the challenge itself, this was a a great experience in that it allowed me to learn more about Strava by looking at it from a perspective I hadn’t quite observed through before.

