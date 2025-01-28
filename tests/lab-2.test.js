///// Imports
const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("./QUAL2000-TDD-lab/lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

///// Suite and test
describe("Lab-TDD tests", () => {
  describe("Add function test", () => {
    test("Add function should return 8 nwhen adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding -5 and 5", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });
  describe("Subtract function test", () => {
    test("Subtract function should return -4 nwhen subtracting 5 and 9", () => {
      assert.strictEqual(subtract(5, 9), -4);
    });
    test("Subtract function should return 0 when subtracting 4 and 4", () => {
      assert.strictEqual(subtract(4, 4), 0);
    });
  });
  describe("multiply function test", () => {
    test("Multiply function should return 108 nwhen multiplying 12 and 9", () => {
      assert.strictEqual(multiply(12, 9), 108);
    });
    test("Multiply function should return 0 when multiplying 4 and 0", () => {
      assert.strictEqual(multiply(4, 0), 0);
    });
  });
  describe("devide function tests", () => {
    test("devide function should return 4 when deviding 32 over 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });
  describe("modulas function test", () => {
    test("modulas function should return 1 when modulas 17 and 4", () => {
      assert.strictEqual(modulas(17, 4), 1);
    });
    test("modulas function should return 0 when modulas 4 and 4", () => {
      assert.strictEqual(modulas(4, 4), 0);
    });
  });
  describe("power function test", () => {
    test("power function should return 32 when power 2 and 5", () => {
      assert.strictEqual(power(2, 5), 32);
    });
  });
  describe("squareroot function tests", () => {
    test("squareroot function should return 5 when squareroot 25", () => {
      assert.strictEqual(squareRoot(25), 5);
    });
  });
  describe("floor function tests", () => {
    test("floor function should return 15 when floor 15.3", () => {
      assert.strictEqual(floor(15.3), 15);
    });
  });
  describe("ceiling function tests", () => {
    test("ceiling function should return 16 when ceiling 15.3", () => {
      assert.strictEqual(ceiling(15.3), 16);
    });
  });
});
