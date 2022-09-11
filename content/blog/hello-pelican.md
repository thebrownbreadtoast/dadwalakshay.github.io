title: How to start Your own Blog!
date: 2022-08-19
slug: start-blog
author: Akshay Dadwal
summary: Pelican + GitHub pages is the perfect combination for minimal and static-site Blogs.
category: tech
tags: python, pelican, github, guide
status: published

## Introduction
I've been wanting to write Tech Blogs from a long time, but it always felt like
a lot of effort.
I would have to work with HTML and CSS, copying some template wouldn't have
solved my problem asbeing a Backend developer who can't center a <div\>, it is
still a nightmare.

On top of this, I would need a cheap and decent Domain name which is nearly
impossible these days and hosting a Blog Web Application on Cloud Server would
also incur some cost.

Hence, while searching for some alternatives I got to know about some popular
static-site generators like Jekyll, Hugo and Pelican.
I decided to use Pelican as it's written in Python along with GitHub pages to
avoid maintainence and cost of Cloud Server.

Later in this article, We'll discuss Pelican in detail and go through a
step-by-step guide to Build and Host static-site Blog like this one.

--------------------------------------------------------------------------------
## What is Pelican?
Pelican is a static-site generator, written in Python and comes with a default
theme suitable for Blogging site.
It also have a variety of communite designed themes, one can choose as per their
preference.

Pelican allows you to write articles in Markdown and generates respective
HTML pages for content, it handles routing to create internal references of
Categories, Tags and Other articles.


## What is GitHub pages?
GitHub Pages are public web pages for Users, Organizations, and Repositories,
that are freely hosted on GitHub's github.io domain or on a custom domain name
of your choice.

--------------------------------------------------------------------------------
Now, we're familiar with Pelican and GitHub pages, let's get started with
step-by-step guide to generate and host static-site Blog. 


#### Setup GitHub repository
- Create a new GitHub public repository with name **<username\>.github.io**


#### Setup development environment
- Clone this repository onto local system and `cd` into it
- Initialize Python application with preferable dependency manager i.e. [poetry](https://python-poetry.org/), [virtualenv](https://virtualenv.pypa.io/en/latest/)
- Install Pelican with Markdown support
	- `poetry add pelican`
	- `poetry add markdown`
	- Or refer to this [link](https://docs.getpelican.com/en/latest/install.html), if you're using virtualenv
- Run `poetry run pelican-quickstart` to initialize Pelican app, it'll prompt a few questions.
	- Enter appropriate values, or use default value where mentinoed.
	- Enter `n` when `> Do you want to generate a tasks.py/Makefile to automate generation and publishing?` is prompted, we'll not need this.


#### Pelican App structure
Let's discuss about directories and files generated during initialization of Pelican app.

```
repo-name/
|__ pelicanconf.py    # Configuration file for Pelican
|__ publishconf.py    # Ignore this file- 
|__ path-dir-name/    # Contains  # use this tuple to disable footer links, else check header links  for referenceall Markdown and static files
|	|__ article-dir-name/    # Contains all Markdown files of Articles  
|	|__	static-dir-name/    # Contains all static files and sub-directories
|	|__	page-dir-name/    # Contains Markdown files of special pages
|__ docs/    # Contains Pelican generated static-site
```

#### Configure Pelican theme
Pelican have a wide-range of community themes and also allows you to create your own theme, we'll not discuss  
**How to design/create a custom Pelican theme?** for some obvious reasons.  
If you like themes used in this static-site, you can check it out [here](https://github.com/nairobilug/pelican-alchemy).

Pelican themes offer several customizations i.e. custom header and footer links, routes and pagination of articles.


- ##### Directories
	- PATH = "<path-dir-name\>/"
	- STATIC_PATHS = ["<static-dir-name\>",]
	- OUTPUT_PATH = "docs/"  # static-site generated here and served by github pages

- ##### Routes
	- ARTICLE_URL = "<article-dir-name\>/{<file-name\>}.html"
	- ARTICLE_SAVE_AS = "<article-dir-name\>/{<file-name\>}.html"
	- PAGE_URL = "<page-dir-name\>/{<file-name\>}.html"
	- PAGE_SAVE_AS = "<page-dir-name\>/{<file-name\>}.html"
	- CATEGORY_URL = "category/{<category-name>}.html"
	- CATEGORY_SAVE_AS = "category/{<category-name>}.html"

- ##### Misc
	- DEFAULT_PAGINATION = <int\>
	- LINKS = (("Link #1", "<static-route\>"), ("Link #2", "<static-route\>"))  # header links
	- FOOTER_LINKS = (("", "#"),)
	- AUTHOR_URL = "<page-dir-name\>/authors/{<author-file-name\>}.html"
	- SITEIMAGE = "<static-dir-name\>/<file-name>.jpeg width=200px height=200px"
	- THEME = "themes/pelican-alchemy/alchemy"

> **Note:** \*\_URL and \*\_SAVE\_AS refers to static-route and absolute path where respective \*.html files will be generated and stored at.


#### Write & Publish your first Article
After doing Pelican setup and all configurations, it's time for the most important part **Writing and Publishing your Articles**

Create a new file to <path-dir-name\>/<article-dir-name\>/<file-name\>.md and add this boilerplate content to it.

```
title: How to start Your own Blog!
date: 2022-08-19
slug: start-blog
author: Akshay Dadwal
summary: Pelican + GitHub pages is the perfect combination for minimal and static-site Blogs.
category: tech
tags: python, pelican, github, guide
status: published
```

And that's it, you are ready to publish your first Article on your own static-site Blog.

- Run `poetry run pelican <path-dir-name>` to generate static-site into your OUTPUT_PATH
- Add and Commit generated files to local github repository and push it to remote, github pages will take some time to reflect changes(try hard-refresh if it doesn't work after some time)
- And voilà, you just published your first Article.
