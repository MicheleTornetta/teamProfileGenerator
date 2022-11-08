const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it('should return "ocat stae taC" if given the string argument "Cat eats taco" ', () => {
      const algo = new Algo();
      const input = "Cat eats taco";
      expect(algo.reverse(input)).toEqual("ocat stae taC");
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should return true if given the string argument "tacocat" ', () => {
      const algo = new Algo();
      const input = "tacocat";
      expect(algo.isPalindrome(input)).toEqual(true);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it('should return "Cat Eats Taco" if given the string argument "cat eats taco" ', () => {
      const algo = new Algo();
      const input = "cat eats taco";
      expect(algo.capitalize(input)).toEqual("Cat Eats Taco");
    });
  });
});
