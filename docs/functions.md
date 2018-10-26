---
id: functions
title: Functions
---

## Functions

### `join`

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

### `map \`

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

### `sortBy \`

Takes an array as input and sorts it using the supplied function.

For example:

```javascript
sortBy $ => .age | map $ => .name
```

### `filter \`

Takes an array as input and returns a new array with all elements that match
the given criterion.

For example:

```javascript
filter $ => .age >= 18
```

### length

Returns the length of the input:

```javascript
[1, 0, 1] | length
```

```javascript
3
```

### reverse

Reverses the input:

```javascript
[1, 2, 3] | reverse
```

```javascript
[3, 2, 1]
```

### reduce \

Compresses multiple items into a single item using the provided function and
initial value.

Coming soon.

### keys

Returns the keys of an object:

```javascript
{"foo": "bar", "baz": 42} | keys
```

```javascript
['foo', 'baz']
```

### values

Returns the values of an object:

```javascript
{"foo": "bar", "baz": 42} | values
```

```javascript
['bar', 42]
```

### combinations

Returns all combinations of each possible choice of r elements of the input:

```javascript
"ABCD" | combinations 2
```

```javascript
[['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']]
```

### product

Computes the product of the iterables in the input:

```javascript
[['a', 'b'], ['1', '2']] | product
```

```javascript
[['a', '1'], ['a', '2'], ['b', '1'], ['b', '2']]
```

