<p align="center">
  <img  src="https://kantord.github.io/emuto/img/demo.gif">
</p>

# emuto ![build](https://img.shields.io/travis/kantord/emuto/master.svg) ![Codecov](https://img.shields.io/codecov/c/github/kantord/emuto/master.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/emuto.svg)

emuto is a lightweight JSON processor inspired by and nearly porting [jq](https://stedolan.github.io/jq/)

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

[Click here to try it live](https://kantord.github.io/emuto-demo/)

## [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to create bugfixes and improvements, and how to build and test your changes to emuto.
