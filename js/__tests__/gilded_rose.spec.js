import { Item, updateQuality } from '../src/gilded_rose'

describe("Gilded Rose", function () {

  describe("Standard items", () => {
    it("should lower the sell_in and quality by 1", () => {
      const items = [new Item("foo", 12, 5)];
      expect(updateQuality(items)).toMatchObject([{
        name: "foo",
        sell_in: 11,
        quality: 4
      }])
    })

    it("should degrade quality twice as fast when sell_in is less than 0", () => {
      const items = [new Item("foo", -1, 5)];
      expect(updateQuality(items)).toMatchObject([{
        name: "foo",
        sell_in: -2,
        quality: 3
      }])
    })

    it("shouldn't degrade quality beyond 0", () => {
      const items = [new Item("foo", -1, 1)];
      expect(updateQuality(items)).toMatchObject([{
        name: "foo",
        sell_in: -2,
        quality: 0
      }])
    })
  })


  describe("Aged Brie", () => {
    it('should increment quality for Aged Brie', () => {
      const items = [new Item("Aged Brie", 4, 3)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Aged Brie",
        sell_in: 3,
        quality: 4
      }])
    })

    it('should increment quality twice as fact for Aged Brie - sellIn expired', () => {
      const items = [new Item("Aged Brie", -1, 4)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Aged Brie",
        sell_in: -2,
        quality: 6
      }])
    })

    it("Quality shouldn't increment beyond 50", () => {
      const items = [new Item("Aged Brie", -1, 49)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Aged Brie",
        sell_in: -2,
        quality: 50
      }])
    })
  })


  describe("Sulfuras", () => {
    it("shouldn't update anything for Sulfuras", () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 5, 5)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Sulfuras, Hand of Ragnaros",
        sell_in: 5,
        quality: 5
      }])
    })
  })


  describe("Backstage Passes", () => {
    it("increases quality by 1 for backstage passes - SellIn > 10", () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Backstage passes to a TAFKAL80ETC concert",
        sell_in: 14,
        quality: 11
      }])
    })

    it("increases quality by 2 for backstage passes - SellIn <= 10", () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Backstage passes to a TAFKAL80ETC concert",
        sell_in: 8,
        quality: 12
      }])
    })

    it("increases quality by 3 for backstage passes - SellIn <= 5", () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Backstage passes to a TAFKAL80ETC concert",
        sell_in: 4,
        quality: 13
      }])
    })

    it("sets quality to 0 after concert - SellIn < 0", () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10)];
      expect(updateQuality(items)).toMatchObject([{
        name: "Backstage passes to a TAFKAL80ETC concert",
        sell_in: -2,
        quality: 0
      }])
    })
  })


});
