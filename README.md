<p align="center">
  <img src="https://kantord.github.io/emuto/img/emuto.svg" height="100">
</p>

<p align="center">
  <a href="https://kantord.github.io/emuto/">Website</a> •
  <a href="https://kantord.github.io/emuto/docs/tutorial">Tutorial</a> •
  <a href="https://kantord.github.io/emuto/docs/try_emuto">Live demo</a> •
  <a href="#emuto-as-a-cli-tool">CLI version</a> •
  <a href="#webpack-loader-for-emuto">Compile-to-JS version</a>
</p>

---

Emuto is a small language for manipulating and restructuring JSON and other data files. [Emuto is inspired by jq and GraphQL](https://kantord.github.io/emuto/docs/comparison_with_other_languages)


<p align="center">
  <img  src="https://kantord.github.io/emuto/img/demo.gif">
</p>

![build](https://img.shields.io/travis/kantord/emuto/master.svg) ![Codecov](https://img.shields.io/codecov/c/github/kantord/emuto/master.svg) ![David](https://img.shields.io/david/kantord/emuto.svg) ![NPM](https://img.shields.io/npm/l/emuto.svg)

## Getting started

### Emuto as a CLI tool

```
npm install -g emuto emuto-cli
```

[Read more in the tutorial](https://kantord.github.io/emuto/docs/tutorial)

### Webpack loader for emuto

```
yarn add --dev emuto emuto-loader
```

[Read more in the Webpack guide](https://kantord.github.io/emuto/docs/setup-webpack)


## What is emuto good for? Examples

### Number of items in JSON file

```bash
curl my_file.json | emuto 'length'
```

### Your karma on HackerNews

```bash
curl https://hacker-news.firebaseio.com/v0/user/kantord.json -s | emuto '$.karma'
```

### See number of NPM dependencies

```bash
cat package.json | emuto -c '$.dependencies | keys | length'
```

### List available scripts in package.json

```bash
cat package.json | emuto -c '$.scripts | keys | join " · "'
```

### Get only the relevant data from a huge JSON file

```bash
curl https://api.github.com/repos/stedolan/jq/commits |\
emuto -c 'map ($ => $ { commit { message } committer { login } } )'
```

### Automate the restructuring of data by creating scripts with emuto

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



## [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to create bugfixes and improvements, and how to build and test your changes to emuto.
