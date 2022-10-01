# JS module for responsive YouTube player

## How to us?

Add to package.json dependencies:

``` json
  "dependencies": {
    "@denysdesign/js-youtube-player": "denysdesign/js-youtube-player",
  }
```

Add to index.js:

``` JS
    // YouTube
    const ytContent = '.js-content';
    if (document.querySelector(ytContent)) {
        import(
            /* webpackChunkName: "module-js-youtube-player" */
            /* webpackPreload: true */
            /* webpackPrefetch: true */
            '@denysdesign/js-youtube-player').then(module => {
                module.default(ytContent);
            }
        )
    }
```