# @azu/editable-translator

ContentEditable + Google Translator.

- Edit original content and translate it again
- This tool support pre-editor for translate

For more details, See [自動翻訳大全 終わらない英語の仕事が5分で片づく超英語術](https://www.amazon.co.jp/dp/B08M3JC1Q1/).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @azu/editable-translator

## Usage

You can get a bookmarklet via following page.

- <https://azu.github.io/editable-translator/>

- Double Click: Edit Mode
- Escape key: Translate page again

## API

```js
(async function main(){
    const { run } = await import("https://cdn.skypack.dev/@azu/editable-translator");
    run();
})();
```


## Test

Run playground

    yarn dev

## Changelog

See [Releases page](https://github.com/azu/editable-translator/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/editable-translator/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
