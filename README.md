# esbuild experiments

- see [esbuild docs](https://esbuild.github.io/)

## Run

```bash
npm i
npm run all
```

also:

- open [index.html](index.html) in the browser
- open the console
- observe the same output as in node

## Structure

- [main.go](main.go) is a custom esbuild 'script'
- [main.ts](main.ts) gets transpiled and bundled into the [dist](dist) directory
- [index.html](index.html) loads bundled js
