const {
  analyse_array,
  capitalise,
  calculator,
  ceasar_cipher,
  reverse_string,
} = require("./main.js");
test("capitalise string", () => {
  expect(capitalise("hello my name is herbert")).toBe(
    "Hello my name is herbert",
  );
});

test("reverse string", () => {
  expect(reverse_string("reverse")).toBe("esrever");
});

test("calclulator object", () => {
  expect(calculator().add(1, 1)).toBe(2);
  expect(calculator().substract(1, 1)).toBe(0);
  expect(calculator().multiply(1, 1)).toBe(1);
  expect(calculator().divide(4, 2)).toBe(2);
});

test("ceasar cipher", () => {
  expect(ceasar_cipher("HeLLo", 3)).toBe("KhOOr");
});

test("analysing array", () => {
  expect(analyse_array([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
