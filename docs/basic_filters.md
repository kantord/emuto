---
id: basic-filters
title: Basic filters
---

## Operators

### Unary operators

The following unary operators are supported:
`!`, `+`, `-`

Usage example:

`-(.user.birth.year - 1990)`

### Binary operators

The following binary operators are supported:
`+`, `-`, `/`, `*`, `+`, `<`, `>`, `%`, `<=`, `>=`, `==`, `!=`, `||`, `&&`

Usage example:

`3 + 1 == 4 * 1`

The following Python-style operators are also available as an alternative:

`or`, `and`

## Identity `$`

Takes an input and returns it unchanged.

## Property access `.foo`, `.foo.bar`

Retrieves a certain property of the input.

`.foo.bar` is equivalent to `.foo | .bar`

## Projection  `$[3]`, `$[0, -1]`, `$["foo", "bar"]`

Retrieve a single element from an object or array, or retrieve a list of
elements.

When the projection has a single element (e. g. `$["name"]`) that property is
returned.

In any other case, a list of each requested element is returned.
