import { removeZeros } from "./remove-zeros";

describe("Remove Zeros", () => {
  it("should pass", () => {
    const input0 = [1, null, "5", "0", "2", 0, 8, 6, null, false];
    const solution0 = [1, null, "5", "2", 8, 6, null, false, "0", 0];
    expect(removeZeros(input0)).toEqual(solution0);

    const input1 = [4.5, 9.6, "0", 0.2, 1.5, 4000, 0, 5];
    const solution1 = [4.5, 9.6, 0.2, 1.5, 4000, 5, "0", 0];
    expect(removeZeros(input1)).toEqual(solution1);

    const input2 = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
    const solution2 = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
    expect(removeZeros(input2)).toEqual(solution2);
  });
});