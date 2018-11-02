---
id: comprehensions
title: Comprehensions
---

## Comprehensions in general

Comprehensions are a concise syntax to define a list of elements, as an
alternative to listing the elements or using functions to construct them.

Comprehensions combine the functionality of `map`, `filter` and other
functions.

Comprehensions can be used to construct lists or objects.

## List comprehension

The simplest form of a list comprehension is demonstrated by this example:

```
[each .author.name in .articles]
```

Which is equivalent to the following filter:

```
.articles | map $ => .author.name
```

It is possible to add a condition to filter the input in the comprehension:

```
[each .author.name in .articles if .author.city == "London"]
```

Which is equivalent to the following filter:

```
.articles | filter $ => .author.city == "London" | map $ => .author.name
```

Finally, for the sake of convenience the list comprehension can be extended by
a custom filter:

```
[each .author.name in .articles if .author.city == "London" sortBy $ => .author.age]
```

Which is equivalent to the following filter:

```
.articles | sortBy $ => .author.age | filter $ => .author.city == "London" | map $ => .author.name
```

## Object comprehension

Object comprehensions work in exactly the same way, except that they are
wrapped in curly braces:

```
{ each (.author.name): (2018 - .author.age) in .articles }
```
