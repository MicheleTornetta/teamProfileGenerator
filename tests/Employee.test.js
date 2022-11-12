const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("you should see the employee's name Joe", () => {
      const joe = new Employee("Joe", "100", "joe@work.com");

      expect(joe.getName()).toEqual("Joe");
    });
  });

  describe("getId", () => {
    it("you should see the employee's Id 100", () => {
      const joe = new Employee("Joe", "100", "joe@work.com");

      expect(joe.getId()).toEqual("100");
    });
  });

  describe("getEmail", () => {
    it("you should see the employee's email joe@work.com", () => {
      const joe = new Employee("Joe", "100", "joe@work.com");

      expect(joe.getEmail()).toEqual("joe@work.com");
    });
  });

  describe("getRole", () => {
    it("you should see the employee's role listed as Manager", () => {
      const joe = new Employee("Mary", "102", "Mary@work.com", "555-999-9999");

      expect(joe.getRole()).toEqual("Employee");
    });
  });

});
