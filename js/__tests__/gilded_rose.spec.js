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
    const items = [new Item("foo", -1, 0)];
    expect(updateQuality(items)).toMatchObject([{
      name: "foo",
      sell_in: -2,
      quality: 0
    }])
  })

});
