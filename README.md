# `ts-mommy`

Mommy's here to support you when building typescript~ ❤️

# Installation

Simply run `yarn add --dev ts-mommy` like a good girl~

# Usage

Whenever you run `tsc` mommy will be here to see how you did~

# Configuration

Mommy will read from the `mommy.options` key in your `tsconfig.json` to make her messages better for you~ ❤️

* `mommys_little` - what to call you~ (default: "girl")
* `mommys_pronouns` - what pronouns mommy will use for themself~ (default: "her")
* `mommys_role` - what role mommy will have~ (default "mommy")
* `mommys_emotes` - what emotes mommy will have~ (default "❤️/💖/💗/💓/💞")
* `mommys_moods` - picks the set of possible responses~ (default: "chill", possible values "chill", "ominous")

All of these options are string arrays. Mommy will randomly select one of them whenever she talks to you~

For example, the phrase "mommy loves her little girl~ 💞" is "{mommys_role} loves {mommys_pronouns} little {mommys_little}~"

So if you set `mommys_role: ["daddy"]`, `mommys_pronouns: ["his","their"]`, and `mommys_little:["boy","pet","baby"]` then you might get any of

* daddy loves their little boy~ ❤️
* daddy loves his little pet~
* daddy loves their little baby~ 💗

And so on~ 💓

# Thanks

mommy would like to thank [Gankra](https://github.com/Gankra) for [cargo-mommy](https://github.com/Gankra/cargo-mommy) that inspired her to write `ts-mommy`.

mommy would also like to thank [swimauger](https://github.com/swimauger) for [tsc-hooks](https://github.com/swimauger/tsc-hooks) on which some of this is based.

# Licensing
mommy likes freedom~ ❤️, and is dual-licensed under [MIT](LICENSE-MIT) and [Apache 2.0](LICENSE-APACHE).

Use either at your choice.
