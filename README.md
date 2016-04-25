# random-paragraph

> Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-paragraph/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-paragraph/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-paragraph)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-paragraph/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-paragraph)


## Install

```
$ npm install --save random-paragraph
```

## Usage

```js
var randomParagraph = require('random-paragraph');

// API
// - randomParagraph([options]);

// options
// - sentences
// - min
// - max
```

Default is a paragraph with a random number of sentences from 3 to 7.

```js
randomParagraph();
// => 'Lel fi huepe jupu akse zej ire vesik kojvulom zon is biwuwkef pa. Uv hokivej voh ebu numdogi akolo hik uwlez ta vacev ofdaimi acunetum suvet uhdab ir soglazo ju pafbeb. Pub cezeh fuc kebamnul he ok luumoabi rawkig me fov pin zup biv risugra. Ralpunad apkomgib alnirciw akel wa lus wahfum burog buol vecotihe abadahoj ugolo wovki ucojal fec.'
```

Optionally specify the number of sentences in the paragraph:

```js
randomParagraph({ sentences: 2 });
// => 'Idefeulo foc omoemowa wahteze liv juvde puguprof. Epehuji upuga zige odfe igo sit pilamhul oto ukurecef.'
```

Can optionally provide `min` and `max`, then with a random sentences count:

```js
randomParagraph({min: 4, max: 9});
// => 'Fusce dapibus tellus ac cursus commodo. Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne. Waddik jeasmov cakgilta ficub up. Idefeulo foc omoemowa wahteze liv juvde puguprof. Epehuji upuga zige odfe igo sit pilamhul oto ukurecef.'
```

**Note**: these min and max are **inclusive**, so they are included in the range. 

## Related

- [random-syllable](https://github.com/mock-end/random-syllable) - Return a semi-speakable syllable, 2 or 3 letters.
- [random-lorem](https://github.com/mock-end/random-lorem) - Return a semi-pronounceable random (nonsense) word.
- [random-title](https://github.com/mock-end/random-title) - Return a random title populated by semi-pronounceable random (nonsense) words.
- [random-sentence](https://github.com/mock-end/random-sentence) - Return a random sentence populated by semi-pronounceable random (nonsense) words.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-paragraph/issues/new).
