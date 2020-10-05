import {
  two,
  four,
  five,
  six,
  seven,
  nine,
  plus,
  times,
  dividedBy,
} from "../calculating-with-functions";

describe("Calculating with Functions", () => {
  it("should pass", () => {
    expect(six(dividedBy(two()))).toBe(3);
    expect(seven(times(five()))).toBe(35);
    expect(four(plus(nine()))).toBe(13);
  });
});
