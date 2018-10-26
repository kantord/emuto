# Contribution guidelines

First of all, thanks for contributing to emuto! All contribution is welcome.

## Setup

Make sure you have `node` and `yarn` installed.

Fork the repo and clone your fork. Run `yarn checks` in the repo. It'll set up dependencies and makes sure everything works fine
in your environment. If you are having problems after `yarn checks`, please create an issue!

## Workflow

How you develop emuto is really a matter of taste, but here are a few tips:

- I found [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and taking [baby steps](http://codingdojo.org/BabySteps/) really useful
- When implementing a new feature or fixing a bug I usually start by adding an integration test in `interpreter.test.js`.
Then I implement changes in parsers and then in generators. (Or builtin functions).
I use the pattern feature in jest to focus on the tests that I'm currently working on.

To get your contribution merged you'll need to take these steps:

1. Take or create an Issue
2. Create a Pull Request that fixes and references the issue either in its commit messages or it's description
3. Get code review and fix any comments that come up

You can save time if you run `yarn test` and `yarn checks` before each push, as they can detect many issues that would otherwise only be detected
during code review or CI.

## General best practices

- Try to make your commits small and atomic. It's best to separate features and bug fixes from refactors. It's also best to make sure that
tests are always passing after your commit.
- Try to avoid increasing the binary size unnecessarily, as emuto is meant to be runnable in a browser as well as in node
- Don't introduce breaking changes.

## Commit message guidelines

We are using [Angular Commit Message Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
please always make sure that your commit messages are correct. Your commit message will be used in the release script.

The easiest way to compose correct commit messages is to use [commitizen](https://github.com/commitizen/cz-cli).

## Project structure

emuto consist mainly of parsers and code generators.

### Parsers

Parsers are responsible for parsing distinct syntactical features of emuto. Every parser has to produce an AST node which can be of the flow type `NodeType`. Multiple parsers can be combined together to create more complex parsers.

Parsers reside in `src/parsers/`. Tests for parsers reside in `src/parsers/__tests__`.

Tests for parsers have to test syntactical features and edge cases, and nothing else.

### Generators

Generators are responsible for converting AST nodes into JavaScript code. Every generator has to take an AST node and convert it to JavaScript. Generators can recursively call  `src/generators/generator` to compile sub-trees.

Parsers reside in `src/generators/`. Tests for parsers reside in `src/generators/__tests__`. There is a main generator in `src/generators/generator` which has to be able to compile *any* AST node, and it combines all other generators to fulfill that requirement. Therefore if you implement a new generator you have to also include it in `src/generators/generator`.

Tests for generators have to test cases that affect the generated code, and nothing else.

### End-to-end test

If you are implementing a new feature that either changes a parser or a generator, you also have to change an end-to-end test or implement a new one. End-to-end tests reside in `src/__tests__/interpreter.test.js`. The output of your code example will be automatically tested and snapshots will be generated for the corresponding AST and target code. This enables us to detect unintended changes in later Pull Requests.
