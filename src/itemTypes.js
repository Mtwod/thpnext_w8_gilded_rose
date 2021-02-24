const normalItem = {
  updateQuality(instance) {
    instance.sellIn -= 1;
    if (instance.quality === 0) return;
    instance.quality -= 1;
    if ((instance.quality > 0) && (instance.sellIn < 0)) instance.quality -= 1;
  }
}

const agedBrieItem = {
  updateQuality(instance) {
    instance.sellIn -= 1;
    if (instance.quality < 50) instance.quality += 1;
  }
}

const backstagePassItem = {
  updateQuality(instance) {
    instance.sellIn -= 1;
    if (instance.sellIn < 0) return instance.quality = 0;
    if (instance.quality >= 50) return;
    instance.quality += 1;
    if (instance.sellIn < 10 && instance.quality < 50) instance.quality += 1;
    if (instance.sellIn < 5 && instance.quality < 50) instance.quality += 1;
  }
}

const sulfurasItem = {
  updateQuality(instance) {
    return;
  }
}

const conjuredItem = {
  updateQuality(instance) {
    instance.sellIn -= 1;
    if (instance.quality === 0) return;
    instance.quality -= 2;
    if (instance.sellIn < 0) instance.quality -= 2;
    if (instance.quality < 0) instance.quality = 0;
  }
}

export {
  normalItem,
  agedBrieItem,
  backstagePassItem,
  sulfurasItem,
  conjuredItem,
};
