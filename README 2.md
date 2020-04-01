# Assignment 1: News Web App

## Overview

This assignment is designed to allow the developer to become familiar with building a modern web application using the features of HTML5, JavaScript, and CSS3. Additional goals are to allow the developer to become familiar with client-side JavaScript, implementation of a provided visual design, and integration with an API.

## Learning Objectives

* Semantic HTML5 elements
* Single page web application
* AJAX
* JSON
* Web Fonts
* Featured CSS3 functionality
* Responsive design
* API integration

## Prerequisites

* Working knowledge of HTML, JavaScript, and CSS.

## Grading Criteria

* Display a Home Page with a list of featured news article headlines and snippets.
* When the user clicks on a category, they are redirected to a content page displaying all content of that category.
* When the user clicks on an article title, they are redirected to an article page displaying the full article text and any associated comments. In addition, the user is presented with a form to submit a new comment.
* When the user clicks on the Banner's call to action the Banner's height is doubled with a CSS3 transition.
* Specify the appropriate HTML5 doctype
* Utilize HTML5 semantic elements:
    * `<header>`
    * `<nav>`
    * `<main>`
    * `<aside>`
    * `<section>`
    * `<article>`
    * `<footer>`
* Retrieve the data from the [Reference API](http://challengenewsapi.azurewebsites.net/).
* Integrate the specified Google Web Font.
* Integrate Font Awesome icons.
* Follow the provided Visual Design.
    * Width is responsive with focus on mobile-first
    * Font heights and line heights are in Photoshop pts
    * Elements with styles specified for first instances should be via CSS3 pseudoclasses
* The application must be a single HTML page and fetch all data via the API.

## Recommended Tools

* [React](https://reactjs.org)
* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* Google Web Fonts

## Helpful Resources

* [Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [React Docs](https://reactjs.org/docs/hello-world.html)
* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome Docs](http://fontawesome.io/get-started/)
* [Arvo Web Font](https://fonts.google.com/specimen/Arvo)
* [MDN HTML5 Guides](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [HTML5 Fundamentals](http://www.pluralsight.com/training/Courses/TableOfContents/html5-fundamentals)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Style Guide

*	Header
    * All Icons
        * Font Awesome
    * Top Nav
        * Arvo Regular 9pt, 3cccccc
    * Title
        * Arvo Bold 36 pt, #333333
    * Date
        * Arvo regular 14 pt, #333333
    * Categories
        * Arvo regular 14 pt, #333333
* Home Page
    * Banner
        * Content
            * Arvo Bold Italic 18 pt, #333333
        * Call to Action
            * Arvo regular 12 pt
    * Aside
        * Article Title
            * Arvo Bold Italic, 19pt/20, #333333
        * Article Snippet
            * Arvo Regular 12pt/15, #333333
    * Main Section
        *	Article Title – First
            * Arvo Italic 16pt/20, #333333
        *	Article Title
            * Arvo Bold Italic 16pt/20, #333333
        *	Article Snippet
            * Arvo 10pt/15, #333333
    * Opinion Section
        *	Title
            * Arvo Italic 16pt #333333
        *	Article Title – First
            * Arvo Italic 12pt/15, #333333
        *	Article Title
            * Arvo Bold & Arvo Italic 12pt/15, #333333
        *	Article Snippet
            * Arvo 10pt/15, #333333
    * Travel Section
        *	Title
            * Arvo Bold 12pt, #333333, #cccccc
        *	Article Title – First
            * Arvo Bold 12pt/15, #333333
        *	Article Title
            * Arvo Bold Italic & Arvo Bold 12pt/15, #333333
        *	Article Snippet
            * Arvo 10pt/15, #333333
* Content Page
    * Main Section
        *	Article Title
            * Arvo Bold Italic 26pt/28, #333333
        *	Article Multimedia Caption
            * Arvo Italic 10pt/15, #333333
        *	Article Content
            * Arvo Regular 10pt/15, #333333
    * Related Content Section
        *	Article Title
            * Arvo Italic 16pt/18, #666666
        *	Article Content
            * Arvo Bold & Arvo Regular 12pt/15, #666666

## API Reference

Please use the hosted [API](http://challengenewsapi.azurewebsites.net/) and the [Swagger API docs](http://challengenewsapi.azurewebsites.net/swagger/ui/index). Please note that not all news articles have pre-written stories, and may contain Lorem Ipsum text.

## Submission Instructions

* When you start a tech challenge, the tech challenge admin will create a private repository for you.
* There will be two branches in the repo, `master` and `develop`.
* Do all your work in the `develop` branch.
* As you work, push your changes up to your GitLab repo.
* When you are finished, make a merge request to the `master` version of your private repo and assign one grader below.
   * Nathan Clarke
* At this point, the graders will review your merge request and offer comments where needed.
* You may be asked to push updates, corrections to your develop branch in response to the coments by graders. You `don't` need to create another merge request.
* When the grader is satisfied, s/he will merge your code into the master branch of your private repo.
* Now celebrate, the Tech Challenge is completed!

## Appendix

![Home Page Screenshot](Home-News.png)

![News Article Screenshot](Home-NewsArticle.png)
