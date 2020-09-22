function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const incrementQuality = (quality, amount = 1) => {
  if (quality < 50) {
    if (amount + quality > 50) {
      return 50
    } else {
      return amount + quality
    }
  }
  return quality
}

const decrementQuality = (quality, amount = 1) => {
  if (quality > 0) {
    if (quality - amount < 0) {
      return 0
    } else {
      return quality - amount
    }
  }
  return quality
}

const handleQualityUpdate = (name, quality, sell_in) => {

  if (name === 'Sulfuras') return quality
  if (name === 'Aged Brie') {
    return sell_in >= 0 ? incrementQuality(quality) : incrementQuality(quality, 2)
  }

  if (sell_in >= 0) {
    return decrementQuality(quality)
  } else {
    return decrementQuality(quality, 2)
  }
}

const handleSellInUpdate = (name, sell_in) => {
  if (name === "Sulfuras") return sell_in
  return sell_in - 1
}

function updateQuality(items) {

  const updatedItems = items.map(({ name, quality, sell_in }) => ({
    name,
    sell_in: handleSellInUpdate(name, sell_in),
    quality: handleQualityUpdate(name, quality, sell_in)
  }))

  return updatedItems





  // for (let i = 0; i < items.length; i++) {

  //   if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //     if (items[i].quality > 0) {
  //       if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //         items[i].quality = items[i].quality - 1
  //       }
  //     }
  //   } else {
  //     if (items[i].quality < 50) {
  //       items[i].quality = items[i].quality + 1
  //       if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //         if (items[i].sell_in < 11) {
  //           if (items[i].quality < 50) {
  //             items[i].quality = items[i].quality + 1
  //           }
  //         }
  //         if (items[i].sell_in < 6) {
  //           if (items[i].quality < 50) {
  //             items[i].quality = items[i].quality + 1
  //           }
  //         }
  //       }
  //     }
  //   }
  //   if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //     items[i].sell_in = items[i].sell_in - 1;
  //   }
  //   if (items[i].sell_in < 0) {
  //     if (items[i].name != 'Aged Brie') {
  //       if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //         if (items[i].quality > 0) {
  //           if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //             items[i].quality = items[i].quality - 1
  //           }
  //         }
  //       } else {
  //         items[i].quality = items[i].quality - items[i].quality
  //       }
  //     } else {
  //       if (items[i].quality < 50) {
  //         items[i].quality = items[i].quality + 1
  //       }
  //     }
  //   }
  // }

  return items
}

export {
  Item,
  updateQuality
}
