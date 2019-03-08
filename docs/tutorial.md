---
id: tutorial
title: Tutorial
---

## Setup
To follow this tutorial, you will need `emuto` and `emuto-cli`. Don't worry,
you can install them really easily:

```bash
npm install -g emuto emuto-cli
```


## Requesting data from an API

In this tutorial we'll play with this fun little Star Wars API:

```bash
curl "https://swapi.co/api/people/1/"
```

```text
{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],"starships":["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.co/api/people/1/"}
```


## Pretty-printing the JSON with emuto

Just pipe the results to emuto. It will automatically convert it to a much more
readable and pleasant format:

```bash
curl "https://swapi.co/api/people/1/" | emuto
```

```json
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": [ "https://swapi.co/api/species/1/" ],
  "vehicles": [ "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/" ],
  "starships": [ "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/" ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
```


## Let's start filtering data

That's way more data than we actually need. Let's just return the character's
name:

```bash
curl "https://swapi.co/api/people/1/" | emuto '$.name'
```

```js
"Luke Skywalker"
```


## Creating new data structures

Let's create a new data structure by combining the filters `$.name` and
`$.gender`:

```bash
curl "https://swapi.co/api/people/1/" | emuto '{"name": $.name, "gender": $.gender}'
```

```json
{ "name": "Luke Skywalker", "gender": "male" }
```

## Chaining filters

It's possible to chain two filters together using the pipe character `|`. Let's
chain `$.films` and `length` together to find how many films our character
appeared in.

```bash
curl "https://swapi.co/api/people/1/" | emuto '$.films | length'
```

```
5
```

Now there's nothing stopping us from putting that into our new data structure
as well! (I omitted gender for simplicity's sake)

```bash
curl "https://swapi.co/api/people/1/" | emuto '{"name": $.name, "films": ($.films | length)}'
```

```json
{ "name": "Luke Skywalker", "films": 5 }
```
