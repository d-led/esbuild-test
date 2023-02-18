# esbuild experiments

- see [esbuild docs](https://esbuild.github.io/)

## Run

```bash
npm i
npm run all
```

also:

- `npm run all` to generate `dist`
- open [index.html](index.html) in the browser
- observe the effect of the reused code

## Structure

- [main.go](main.go) is a custom esbuild 'script'
- [src/main.ts](src/main.ts) gets transpiled and bundled into the [dist](dist) directory
- [index.html](index.html) loads bundled js
