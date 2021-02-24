# The hacking Project: Gilded Rose unit test

Today, we work on the famous Gilded Rose refactoring kata! ([source code](https://github.com/mtbrault/GildedRoseTHP))

We use the npm package Jasmine for our tests, only a few were written, so the rest is up to us!

## The rules

### Day to day rules

Each day:

- sellIn - 1
- quality - 1

Once expired:

- quality - 2

Aged Brie and Backstage passes:

- quality + 1
- if (sellIn <= 10) quality + 2
- if (sellIn < 5) quality + 3
- if (sellIn = 0) quality = 0

Conjured elements:

- quality - 2
- "Conjured" is a prefix, so a conjured item will be named "Conjured Magic Stick", "Conjured somthing"

### Absolute rules

- quality >= 0 && quality <= 50
- 'Sulfuras' has no expiration date and never changes quality

## Author

@Mtwod
