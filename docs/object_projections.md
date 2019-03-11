---
id: object_projections
title: GrahpQL-style projections
---

## Basics

GraphQL and Emuto are designed for different domains. GraphQL is designed as
a query language, while Emuto is designed for manipulating/processing JSON
files.

That being said, there is some overlap between what can be achieved with the
two technologies, and some of the syntax is similar.

In particular, Emuto's object projections might look familiar if you've used
GraphQL before.

Simply put, object projections are a simple way to keep only certain parts of
an object.

For example, given the object: `{"name": "John Doe", "age": 32}`, we can use
a projection to only keep the name - without manually creating a new object:

```text
{"name": "John Doe", "age": 32}{ name }
```

```json
{"name": "John Doe"}
```

Of course, object projections make little sense when you have already created
a data structure manually, since you could have just created the desired
structured to begin with. Thus, object projections are typically used together
with the `$` symbol, that is, we are projecting the input data.

From now on, let's work with this input:

input.json
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 35,
  "home": {
    "streetAddress": "870 Bungalow Road",
    "city": "Omaha",
    "state": "NE",
    "postalCode": "68114"
  },
  "office": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  },
  "gender": "male",
}
```

Let's only return the first name and age:

```bash
cat input.json | emuto -c '$ { firstName, age }'
```

```json
{ "firstName": "John", "age": 35 }
```

## Projecting nested structures

Projections can be nested by applying a projection to a field inside
a projection:

```bash
cat input.json | emuto -c '$ { firstName, age, home { city } }'
```

```json
{ "firstName": "John", "age": 35, "home": { "city": "Omaha" } 
```

Nested projections can sometimes get long, so it might be more comfortable to
write them in multiple lines:

```text
$ {
  firstName
  age
  home {
    city
  }
}
```

*Tip: To avoid having to escape the newlines, it's best to simply put your code into
a script file. [Learn how to do it.](shebang.md)*


## Extracting fragments of your object-projection

Sometimes there might be some recurring patterns in your data structure, so it
might be useful to re-use some parts of your object projection.

To do that, you can simply extract the recurring pattern to a new function, and
spread it using `...FunctionName` in your projection.

Let's include both the home and office cities and states using this trick!

```text
#! emuto -s

$ {
  firstName
  age
  home {
    ...Address
  }
  office {
    ...Address
  }
}

where $Address = ($ => $ {
  city
  state
})
```

```json
{
  "firstName": "John",
  "age": 35,
  "home": { "city": "Omaha", "state": "NE" },
  "office": { "city": "New York", "state": "NY" }
}
```

Actually, these fragments are simply functions that receive the object that is
being transformed and return a new object. So there's nothing stopping you from
creating new data structures or static data in fragments:

```text
#! emuto -s

$ {
  ...RandomStuff
  firstName
  age
  home {
    ...Address
  }
  office {
    ...Address
  }
}

where
  $Address = ($ => $ {
    city
    state
  })

  $RandomStuff = ($ => {
    "static": {
      "data": 42
    } 
  })
```

```json
{
  "static": { "data": 42 },
  "firstName": "John",
  "age": 35,
  "home": { "city": "Omaha", "state": "NE" },
  "office": { "city": "New York", "state": "NY" }
}
```
