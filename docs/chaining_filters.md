---
id: chaining-filters
title: Chaining filters
---

You can combine two filters by using the pipe syntax, e. q. `.foo | .bar`

The first filter (`.foo`) will receive the input and transform it; the second
filter (`.bar`) will take the output of the first function and transform it.
