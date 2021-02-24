import {
  normalItem,
  agedBrieItem,
  backstagePassItem,
  conjuredItem,
  sulfurasItem,
} from "./itemTypes";

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality () {
    switch (true) {
      case this.name === 'Aged Brie':
        agedBrieItem.updateQuality(this);
        break;

      case /^(backstage passes)/.test(this.name.toLowerCase()):
        backstagePassItem.updateQuality(this);
        break;

      case this.name === 'Sulfuras, Hand of Ragnaros':
        sulfurasItem.updateQuality(this);
        break;

      case /^(conjured)/.test(this.name.toLowerCase()):
        conjuredItem.updateQuality(this);
        break;

      default:
        normalItem.updateQuality(this);
        return;
    }
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality();
    }

    return this.items;
  }
}

export {
  Item,
  Shop
};
