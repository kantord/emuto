# emuto ![build](https://img.shields.io/travis/kantord/emuto/master.svg) ![Codecov](https://img.shields.io/codecov/c/github/kantord/emuto/master.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/emuto.svg)

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

#### Operators

##### Unary operators

The following unary operators are supported:
`!`, `+`, `-`

Usage example:

`-(.user.birth.year - 1990)`

##### Binary operators

The following binary operators are supported:
`+`, `-`, `/`, `*`, `+`, `<`, `>`, `%`, `<=`, `>=`, `==`, `!=`, `||`, `&&`

Usage example:

`3 + 1 == 4 * 1`

The following Python-style operators are also available as an alternative:

`or`, `and`

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

```javascript
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

```javascript
["Hello", "World!"] | map $ => {"word": $}
```

Output:

```json
[{"word": "Hello"}, {"word": "World!"}]
```

Alternatively, you can also use this syntax: `["Hello", "World!"] | map \ {"word": $}`

#### `sortBy \`

Takes an array as input and sorts it using the supplied function.

For example:

```javascript
sortBy $ => .age | map $ => .name
```

#### `filter \`

Takes an array as input and returns a new array with all elements that match
the given criterion.

For example:

```javascript
filter $ => .age >= 18
```

#### length

Returns the length of the input:

```javascript
[1, 0, 1] | length
```

```javascript
3
```

#### reverse

Reverses the input:

```javascript
[1, 2, 3] | reverse
```

```javascript
[3, 2, 1]
```

#### reduce \

Compresses multiple items into a single item using the provided function and
initial value.

Coming soon.

#### keys

Returns the keys of an object:

```javascript
{"foo": "bar", "baz": 42} | keys
```

```javascript
['foo', 'baz']
```

#### values

Returns the values of an object:

```javascript
{"foo": "bar", "baz": 42} | values
```

```javascript
['bar', 42]
```

#### combinations

Returns all combinations of each possible choice of r elements of the input:

```javascript
"ABCD" | combinations 2
```

```javascript
[['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']]
```

#### product

Computes the product of the iterables in the input:

```javascript
[['a', 'b'], ['1', '2']] | product
```

```javascript
[['a', '1'], ['a', '2'], ['b', '1'], ['b', '2']]
```

### Chaining filters

You can combine two filters by using the pipe syntax, e. q. `.foo | .bar`

The first filter (`.foo`) will receive the input and transform it; the second
filter (`.bar`) will take the output of the first function and transform it.

### Commenting your code

You have to begin your comments with `//`. Everything until the end of the line
is part of the comment. For example:

```
filter // Filtering stuff here
    $ => .age >= 35
```

### Variables

You can use the where clause to reuse values:

```javascript
$one + $two;
where
    $one = 1
    $two = 2
```

```
3
```
