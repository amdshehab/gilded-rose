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

const isConjured = (name) => name.split(' ')[0] === 'Conjured'

const handleQualityUpdate = (name, quality, sell_in) => {

  if (name === 'Sulfuras, Hand of Ragnaros') return quality

  if (name === 'Backstage passes to a TAFKAL80ETC concert') {
    if (sell_in < 0) return 0
    if (sell_in > 10) {
      return incrementQuality(quality)
    } else if (sell_in <= 5) {
      return incrementQuality(quality, 3)
    } else {
      return incrementQuality(quality, 2)
    }
  }

  if (name === 'Aged Brie') {
    return sell_in >= 0 ? incrementQuality(quality) : incrementQuality(quality, 2)
  }

  if (isConjured(name)) {
    if (sell_in >= 0) {
      return decrementQuality(quality, 2)
    } else {
      return decrementQuality(quality, 4)
    }
  }

  if (sell_in >= 0) {
    return decrementQuality(quality)
  } else {
    return decrementQuality(quality, 2)
  }
}

const handleSellInUpdate = (name, sell_in) => {
  if (name === "Sulfuras, Hand of Ragnaros") return sell_in
  return sell_in - 1
}

function updateQuality(items) {

  return items.map(({ name, quality, sell_in }) => ({
    name,
    sell_in: handleSellInUpdate(name, sell_in),
    quality: handleQualityUpdate(name, quality, sell_in)
  }))
}

export {
  Item,
  updateQuality
}

window.Item = Item
window.updateQuality = updateQuality
