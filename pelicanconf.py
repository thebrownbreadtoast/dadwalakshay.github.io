AUTHOR = "Akshay Dadwal <akshayd00@outlook.com>"
SITENAME = "blog"
SITESUBTITLE = "A low effort blog"
# SITEURL = "https://dadwalakshay.github.io"

PATH = "content"

TIMEZONE = "Asia/Calcutta"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 5

LINKS = (("Blog", "category/blog.html"), ("Resume", "#"))

FOOTER_LINKS = (("", "/#"),)

HIDE_AUTHORS = False
AUTHOR_URL = "pages/authors/{slug}.html"

SITEIMAGE = "images/profile_picture.jpeg width=200px height=200px"

DELETE_OUTPUT_DIRECTORY = True

ARTICLE_URL = "blog/{slug}.html"
ARTICLE_SAVE_AS = "blog/{slug}.html"

PAGE_URL = "pages/{slug}.html"
PAGE_SAVE_AS = "pages/{slug}.html"

CATEGORIES_URL = "category/blog.html"
CATEGORY_URL = "category/{slug}.html"
CATEGORY_SAVE_AS = "category/{slug}.html"

TAG_URL = "tag/{slug}.html"
TAG_SAVE_AS = "tag/{slug}.html"

THEME = "themes/pelican-alchemy/alchemy"
THEME_CSS_OVERRIDES = [
    "theme/css/oldstyle.css",
]

STATIC_PATHS = [
    "images",
]

# Generating static-site into docs/ to serve it using github-pages
OUTPUT_PATH = "docs/"
