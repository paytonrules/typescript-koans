import { StringCalculator } from '../src/string-calculator';

test("an empty string returns 0", () => {
    expect(StringCalculator.add("")).toEqual(0);
});

test("a string with a number returns that number", () => {
    expect(StringCalculator.add("1")).toEqual(1);
});

test("a string seperated by commas sums them", () => {
    expect(StringCalculator.add("1,2")).toEqual(3);
});

test("a string seperated by commas ignores whitespace", () => {
    expect(StringCalculator.add("1, 2")).toEqual(3);
});