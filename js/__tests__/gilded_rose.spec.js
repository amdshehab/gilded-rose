import { Item, updateQuality } from '../src/gilded_rose'

describe("Gilded Rose", function () {

  it("should foo", function () {
    const items = [new Item("foo", 0, 0)];
    updateQuality(items);
    expect(items[0].name).toEqual("foo");
  });

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

  it("shouldn't update anything for Sulfuras", () => {
    const items = [new Item("Sulfuras", 5, 5)];
    expect(updateQuality(items)).toMatchObject([{
      name: "Sulfuras",
      sell_in: 5,
      quality: 5
    }])
  })

});
