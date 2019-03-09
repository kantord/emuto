---
id: comparison_with_other_languages
title: Comparison with alternatives
---

## jq

Emuto was designed to be a replacement for jq in some situations where it
cannot be used.

Emuto's syntax is heavily inspired by jq, and should be easy to
learn for anyone who has experience with jq.

In general, jq is much more mature than emuto. There are no benchmarks yet, but
jq can be expected to be superior in performance.

|               |    emuto   |  jq  |
|---------------|:----------:|:----:|
| created       |    2018    | 2012 |
| written in    | JavaScript |   C  |
| Compile to JS |      ✓     |      |
| Runs in the browser |      ✓     |   only with emscripten   |
| Runs in the command line |      ✓     |   ✓   |
| Dependencies  |      node or browser     |      |
| ES6-inspired syntax |      ✓     |      |
| GraphQL-inspired syntax |      ✓     |      |


## GraphQL

GraphQL and Emuto are designed for different domains. GraphQL is designed as
a query language, while Emuto is designed for manipulating/processing JSON
files.

That being said, there is some overlap between what can be achieved with the
two technologies, and some of the syntax is similar.

In particular, Emuto's object projections might look familiar if you've used
GraphQL before:

```text
$ {
  line {
    from {
      ...Point
    }

    to {
      ...Point
    }
  }
}

where
  $Point = ($ => ${
    X
    Y
  })
```
