import { coffeeLimits } from "../death-by-coffee";

describe("Death by Coffee", () => {
  it("John", () => {
    expect(coffeeLimits(1950, 1, 19)).toEqual(expect.arrayContaining([2645, 1162]));
  });

  it("Robert", () => {
    expect(coffeeLimits(1965, 9, 4)).toEqual(expect.arrayContaining([0, 0]));
  });
});
