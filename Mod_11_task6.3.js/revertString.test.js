import { reverseString } from "./revertString";

describe("tests for reverseString function", () => {
  it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
});
