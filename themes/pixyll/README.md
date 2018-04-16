# Pixyll

Pixyll is a simple, beautiful theme for [Hugo](http://gohugo.io/).
Based on [Pixyll for Jekyll](https://github.com/johnotander/pixyll)

## Features

- Basic tag support.
- Disqus comments supported.
- Google Analytics supported.
- Social links (currently only for twitter).
- [Formspree](http://formspree.io/) for contact form.
- Pagination support.
- [Search](#search), executes in client side javascript.

Example config:

```toml
languageCode = "en-us"
contentdir = "content"
publishdir = "public"
builddrafts = false
baseUrl = ""
canonifyurls = true
title = "Pixyll"
author = "admin"
theme = "pixyll"

[indexes]
  category = "categories"
  tag = "tags"

[params]
  search_engine = true
  google_analytics_id = "XX-XXXXXXXX-X"
  twitter_username = "username"
  disqus_shortname = "sitename"
  paginate = true
```

## Search
To activate search ensure that `[params]` section has line `search_engine = true`.
Then you need to generate search index:
1. Copy script `create_json.py` to your website root location,
where `config.toml` is located.
1. Install python requirements: `pip install -r requirements.txt`
1. Run `python2 create_json.py`

Script was tested with python 2.7 only.

Index will be placed into `public/tipuesearch_content.json`. Every time you add
new article you need to regenerate index with command above.
If you run hugo as a server, please append option `--renderToDisk` othervise hugo
will not pick up files generated by search script.

![Pixyll Screenshot](https://raw.githubusercontent.com/azmelanar/hugo-theme-pixyll/master/images/tn.png)