const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getName", () => {
    it("you should see the employee's name Mary", () => {
      const joe = new Manager("Mary", "102", "Mary@work.com", "555-999-9999", "Manager");

      expect(joe.getName()).toEqual("Mary");
    });
  });

  describe("getId", () => {
    it("you should see the employee's Id 102", () => {
      const joe = new Manager("Mary", "102", "Mary@work.com", "555-999-9999", "Manager");

      expect(joe.getId()).toEqual("102");
    });
  });

  describe("getEmail", () => {
    it("you should see the employee's email Mary@work.com", () => {
      const joe = new Manager("Mary", "102", "Mary@work.com", "555-999-9999", "Manager");

      expect(joe.getEmail()).toEqual("Mary@work.com");
    });
  });

  describe("getOfficeNumber", () => {
    it("you should see the employee's office phone number of 555-999-9999", () => {
      const joe = new Manager("Mary", "102", "Mary@work.com", "555-999-9999", "Manager");

      expect(joe.getOfficeNumber()).toEqual("555-999-9999");
    });
  });

  describe("getRole", () => {
    it("you should see the employee's role listed as Manager", () => {
      const joe = new Manager("Mary", "102", "Mary@work.com", "555-999-9999", "Manager");

      expect(joe.getRole()).toEqual("Manager");
    });
  });

});