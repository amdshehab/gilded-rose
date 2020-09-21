import { Item, update_quality } from '../src/gilded_rose'

describe("Gilded Rose", function () {

  it("should foo", function () {
    const items = [new Item("foo", 0, 0)];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

});
