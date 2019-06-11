---
id: functions
title: Functions
---

## join

Takes an array as input and joins them into a single string using the supplied
separator.

Input:

```
["Hello", "World!"] | join " "
```

Output:

```
"Hello World!"
```

## map \

Takes an array as input and joins them into a single string using the supplied
separator.

Input:

```
["Hello", "World!"] | map $ => {"word": $}
```

Output:

```
[{"word": "Hello"}, {"word": "World!"}]
```

For mapping objects, use a curried function:

```
{ "Joe": 13, "Marie": 14 } | map ($key => $value => "Age of " + $key : $value)
```


## sortBy \

Takes an array as input and sorts it using the supplied function.

For example:

```
sortBy $ => .age | map $ => .name
```

## filter \

Takes an array as input and returns a new array with all elements that match
the given criterion.

For example:

```
filter $ => .age >= 18
```

## length

Returns the length of the input:

```
[1, 0, 1] | length;
```

```
3;
```

## reverse

Reverses the input:

```
[1, 2, 3] | reverse;
```

```
[3, 2, 1];
```

## reduce \

Compresses multiple items into a single item using the provided function and
initial value.

Coming soon.

## keys

Returns the keys of an object:

```
{"foo": "bar", "baz": 42} | keys
```

```
['foo', 'baz'];
```

## values

Returns the values of an object:

```
{"foo": "bar", "baz": 42} | values
```

```
['bar', 42];
```

## combinations

Returns all combinations of each possible choice of r elements of the input:

```
"ABCD" | combinations 2
```

```
[['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']];
```

## product

Computes the product of the iterables in the input:

```
[['a', 'b'], ['1', '2']] | product;
```

```
[['a', '1'], ['a', '2'], ['b', '1'], ['b', '2']];
```
