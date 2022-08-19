AUTHOR = "Akshay Dadwal <akshayd00@outlook.com>"
SITENAME = "Blog"
SITEURL = ""

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

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False

DELETE_OUTPUT_DIRECTORY = True

ARTICLE_URL = "blog/{slug}/"
ARTICLE_SAVE_AS = "blog/{slug}.html"

PAGE_URL = "pages/{slug}/"
PAGE_SAVE_AS = "pages/{slug}.html"

CATEGORIES_URL = "category/"
CATEGORY_URL = "category/{slug}/"
CATEGORY_SAVE_AS = "category/{slug}.html"

TAG_URL = "tag/{slug}/"
TAG_SAVE_AS = "tag/{slug}.html"

AUTHOR_URL = "pages/authors/{slug}/"

OUTPUT_PATH = "."
