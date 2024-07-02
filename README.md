# ts-mommy

mommy's here to support you when building typescript~ ❤️

# Installation

Simply run `yarn add --dev ts-mommy` like a good girl~

# Usage

Whenever you run `tsc` mommy will be here to see how you did... but only if mommy is turned on!

add the following to your `tsconfig.json` to turn mommy on~

```
  "mommy": {
    "enabled": true
  }
```

**Examples**

A successful operation:

```
$ yarn tsc
yarn run v1.22.22
$ /Users/sophie/Development/test-ts/node_modules/.bin/tsc
*boops your nose*
✨  Done in 0.58s.
```

An unsuccessful operation:

```
$ yarn tsc
yarn run v1.22.22
$ /Users/sophie/Development/test-ts/node_modules/.bin/tsc
index.ts:4:3 - error TS2322: Type 'undefined' is not assignable to type 'string'.

4   return //`Hello ${who}! `;
    ~~~~~~

Found 1 error in index.ts:4

everything's gonna be ok~
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

# Configuration

Mommy will read from the `mommy` key in your `tsconfig.json` to make her messages better for you~ ❤️

- `enabled` - mommy is turned on when this is `true`
- `affectionate_term` - what to call you~ (default: `["girl"]`)
- `pronouns` - what pronouns mommy will use for themself~ (default: `["her"]`)
- `role` - what role mommy will have~ (default `["mommy"]`)
- `emotes` - what emotes mommy will have~ (default `["❤️","💖","💗","💓","💞"]`)
- `moods` - picks the set of possible responses~ (default:`["chill"]`)

you only need to specify what you want mommy to change for you, for example:
```
  "mommy": {
    "enabled": true,
    "moods": ["ominous"]
  }
```

Mommy can also be _spicy_ but you'll need to figure that out all by yourself~

All options, except `enabled` are string arrays. Mommy will randomly select one of them whenever she talks to you~

For example, the phrase "mommy loves her little girl~ 💞" is "{role} loves {pronouns} little {affectionate_term}~"

So if you set:

```
  "mommy": {
    "enabled": true,
    "role": ["daddy"],
    "pronouns": ["his","their"],
    "affectionate_term": ["boy","pet","baby"]
  }
```
 ...then you might get any of

- daddy loves their little boy~ ❤️
- daddy loves his little pet~
- daddy loves their little baby~ 💗

And so on~ 💓

# Thanks

mommy would like to thank [Gankra](https://github.com/Gankra) for [cargo-mommy](https://github.com/Gankra/cargo-mommy) that inspired her to write `ts-mommy`.

mommy would also like to thank [swimauger](https://github.com/swimauger) for [tsc-hooks](https://github.com/swimauger/tsc-hooks) on which some of this is based.

# Licensing

mommy likes freedom~ ❤️, and is dual-licensed under [MIT](LICENSE-MIT) and [Apache 2.0](LICENSE-APACHE).

Use either at your choice.
