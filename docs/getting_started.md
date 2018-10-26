---
id: getting-started
title: Getting Started with Emuto
---

emuto is a lightweight JSON processor inspired by and nearly porting [jq](https://stedolan.github.io/jq/)

emuto is written in JavaScript and can be used in the browser and in node as
well.

The following emuto script

```javascript
  [.article.title, .user.name.full_name, .user.age] | { "compressed_article_info": $}
```

would take an input like this:

```json
{
  "user": {
    "name": {"nickname": "john3", "full_name": "John Doe"},
    "age": 32
  },
  "article": {"title": "Hello World"}
}
```

And return a result like this:

```json
{
  "compressed_article_info": ["Hello World", "John Doe", 32]
}
```

## Try emuto

<iframe
    style="width: 100%; height: 30em; border: 0;"
    src="https://kantord.github.io/emuto-demo/">
</iframe>
