import { Shop, Item } from '../src/gilded_rose.js';
// import { Shop, Item } from '../old';

describe("GildedRose shop manager", function () {
  let listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Baisser la qualité de 2 d'item normaux quand sellIn vaut 0 ou moins", function () {
    listItems.push(new Item("+5 Dexterity Vest", 0, 20));
    listItems.push(new Item("Mana Cake", -5, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: -1, quality: 18 },
      { sellIn: -6, quality: 4 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Limiter la qualité à 0 d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 5, 0));
    listItems.push(new Item("Mana Cake", 0, 0));
    listItems.push(new Item("Mana Cake", -5, 1));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 0 },
      { sellIn: -1, quality: 0 },
      { sellIn: -6, quality: 0 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie", function () {
    listItems.push(new Item("Aged Brie", 20, 30));
    listItems.push(new Item("Aged Brie", 0, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: -1, quality: 31 },
    ];

    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Backstage passes", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 2 pour Backstage passes lorsque sellIn vaut 10 ou moins", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 32 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 3 pour Backstage passes lorsque sellIn vaut 5 ou moins", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 33 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Limiter la qualité à 50 pour Aged Brie et Backstage passes", function () {
    listItems.push(new Item("Aged Brie", 20, 50));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 50 },
      { sellIn: 19, quality: 50 },
      { sellIn: 9, quality: 50 },
      { sellIn: 4, quality: 50 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité vaut 0 pour Backstage passes lorsque sellIn vaut 0 ou moins", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", -5, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: -1, quality: 0 },
      { sellIn: -6, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Sulfuras reste inchangé", function () {
    listItems.push(new Item("Sulfuras, Hand of Ragnaros", 5, 80));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 5, quality: 80 },
    ];

    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité baisse 2 fois plus vite pour les objets invoqués (Conjured)", function () {
    listItems.push(new Item("Conjured Staff of Gandalf", 5, 30));
    listItems.push(new Item("Conjured Staff of Gandalf", 0, 20));
    listItems.push(new Item("Conjured Staff of Gandalf", -1, 20));
    listItems.push(new Item("Conjured Staff of Gandalf", -1, 3));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 28 },
      { sellIn: -1, quality: 16 },
      { sellIn: -2, quality: 16 },
      { sellIn: -2, quality: 0 },
    ];

    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});
