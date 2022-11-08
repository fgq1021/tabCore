# Tab连接器

[//]: # ([![Greenkeeper badge]&#40;https://badges.greenkeeper.io/rollup/rollup-starter-lib.svg&#41;]&#40;https://greenkeeper.io/&#41;)

[//]: # ()
[//]: # (This repo contains a bare-bones example of how to create a library using Rollup, including importing a module from `node_modules` and converting it from CommonJS.)

[//]: # ()
[//]: # (We're creating a library called `how-long-till-lunch`, which usefully tells us how long we have to wait until lunch, using the [ms]&#40;https://github.com/zeit/ms&#41; package:)

[//]: # ()
[//]: # (```js)

[//]: # (console.log&#40;'it will be lunchtime in ' + howLongTillLunch&#40;&#41;&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (## Getting started)

[//]: # ()
[//]: # (Clone this repository and install its dependencies:)

[//]: # ()
[//]: # (```bash)

[//]: # (git clone https://github.com/rollup/rollup-starter-lib)

[//]: # (cd rollup-starter-lib)

[//]: # (npm install)

[//]: # (```)

[//]: # ()
[//]: # (`npm run build` builds the library to `dist`, generating three files:)

[//]: # ()
[//]: # (* `dist/how-long-till-lunch.cjs.js`)

[//]: # (    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json)

[//]: # (* `dist/how-long-till-lunch.esm.js`)

[//]: # (    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json)

[//]: # (* `dist/how-long-till-lunch.umd.js`)

[//]: # (    a UMD build, suitable for use in any environment &#40;including the browser, as a `<script>` tag&#41;, that includes the external dependency. This corresponds to the `"browser"` field in package.json)

[//]: # ()
[//]: # (`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch]&#40;https://github.com/rollup/rollup-watch&#41;.)

[//]: # ()
[//]: # (`npm test` builds the library, then tests it.)

[//]: # ()
[//]: # (## Variations)

[//]: # ()
[//]: # (* [babel]&#40;https://github.com/rollup/rollup-starter-lib/tree/babel&#41; — illustrates writing the source code in ES2015 and transpiling it for older environments with [Babel]&#40;https://babeljs.io/&#41;)

[//]: # (* [buble]&#40;https://github.com/rollup/rollup-starter-lib/tree/buble&#41; — similar, but using [Bublé]&#40;https://buble.surge.sh/&#41; which is a faster alternative with less configuration)

[//]: # (* [TypeScript]&#40;https://github.com/rollup/rollup-starter-lib/tree/typescript&#41; — uses [TypeScript]&#40;https://www.typescriptlang.org/&#41; for type-safe code and transpiling)

[//]: # ()


## License

[MIT](LICENSE).
