# The hacking Project: Gilded Rose unit test

Today, we work on the famous Gilded Rose refactoring kata! ([source code](https://github.com/mtbrault/GildedRoseTHP))

We use the npm package Jasmine for our tests, only a few were written, so the rest is up to us!

## The rules

Each item has a `name`, a number of days remaining before expiration (`sellIn`) and a `quality`.

### Day to day rules

Each day:

- sellIn - 1
- quality - 1
- once quality equals zero, it won't decrease

Once expired:

- quality - 2

Aged Brie:
- quality + 1
- inrease event after expiration

Backstage passes:

- quality + 1
- if (sellIn <= 10) quality + 2
- if (sellIn <= 5) quality + 3
- if (sellIn <= 0) quality = 0

Conjured elements:

- quality decreases twice as fast for normal items
- "Conjured" is a prefix, so a conjured item will be named "Conjured Magic Stick", "Conjured somthing"

### Absolute rules

- quality >= 0 && quality <= 50
- 'Sulfuras' has no expiration date and a quality of 80 that never changes

### File edition rules

- Shop: any changes is alright, as long as it is working
- Item: No modification. Only a method "updateQuality" or static properties are allowed.

## Author

@Mtwod
