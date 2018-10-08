# emuto ![build](https://img.shields.io/travis/kantord/emuto/master.svg) ![Codecov](https://img.shields.io/codecov/c/github/kantord/emuto/master.svg)  ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/emuto.svg)

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

## Documentation

### Basic filters

#### Identity `$`

Takes an input and returns it unchanged.

#### Simple property accessor `.foo`, `.foo.bar`

Retrieves a certain property of the input.

`.foo.bar` is equivalent to `.foo | .bar`

#### Projection using property accessors `$[3]`, `$[0, -1]`, `$["foo", "bar"]`

Retrieve a single element from an object or array, or retrieve a list of
elements.

When the projection has a single element (e. g. `$["name"]`) that property is
returned.

In any other case, a list of each requested element is returned.

### Functions

#### `join`

Takes an array as input and joins them into a single string using the supplied
separator.

Input:

```
["Hello", "World!"] | join " "
```

Output:

```json
"Hello World!"
```

#### `map \`

Takes an array as input and joins them into a single string using the supplied
separator.

Input:

```
["Hello", "World!"] | map $ => {"word": $}
```

Output:

```json
[{"word": "Hello"}, {"word": "World!"}]
```

Alternatively, you can also use this syntax: `["Hello", "World!"] | map \ {"word": $}`

### Chaining filters

You can combine two filters by using the pipe syntax, e. q. `.foo | .bar`

The first filter (`.foo`) will receive the input and transform it; the second
filter (`.bar`) will take the output of the first function and transform it.
