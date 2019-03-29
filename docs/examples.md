---
id: examples
title: Examples
---


## Number of items in JSON file

```bash
curl my_file.json | emuto 'length'
```

## Your karma on HackerNews

```bash
curl https://hacker-news.firebaseio.com/v0/user/kantord.json -s | emuto '$.karma'
```

### Convert another command's output to JSON

```bash
ls | emuto -i=raw '$[0:-1]'
```

## See number of NPM dependencies

```bash
cat package.json | emuto -c '$.dependencies | keys | length'
```

## List available scripts in package.json

```bash
cat package.json | emuto -c '$.scripts | keys | join " · "'
```

## Get only the relevant data from a huge JSON file

```bash
curl https://api.github.com/repos/stedolan/jq/commits |\
emuto -c 'map ($ => $ { commit { message } committer { login } } )'
```

## Automate the restructuring of data by creating scripts with emuto

restructure.emu

```text
#! emuto -s

$
  | map ($ => $ { commit { message } committer { login } } )
  | map ($ => {
      "committer": $.committer.login,
      "message":   $.commit.message,
    })
```

Calling your script

```bash
curl https://api.github.com/repos/stedolan/jq/commits | ./restructure.emu
```
