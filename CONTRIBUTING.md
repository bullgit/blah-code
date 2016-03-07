# Contributing

## Pull requests

- fork repo
- run `npm install`
- change files
- run `npm test`
- commit changes
- push commits
- create pull request
- done :octocat:

## Release workflow 

This one is only applicable to owners and collaborators.

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

Running one of this will:

- bump version in `package.json` and `bower.json`
- minify blah-code.js
- commit changes to `package.json` and `bower.json` and `blah-code.min.js`
- add a Git tag according to new version number
- push changes and tag to Github
- publish new version to npm
- :tada:
