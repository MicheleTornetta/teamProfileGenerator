const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getName", () => {
    it("you should see the employee's name Paul", () => {
      const joe = new Intern("Paul", "103", "Paul@work.com", "UPenn");

      expect(joe.getName()).toEqual("Paul");
    });
  });

  describe("getId", () => {
    it("you should see the employee's Id 103", () => {
      const joe = new Intern("Paul", "103", "Paul@work.com", "UPenn");

      expect(joe.getId()).toEqual("103");
    });
  });

  describe("getEmail", () => {
    it("you should see the employee's email Paul@work.com", () => {
      const joe = new Intern("Paul", "103", "Paul@work.com", "UPenn");

      expect(joe.getEmail()).toEqual("Paul@work.com");
    });
  });

  describe("getSchool", () => {
    it("you should see the employee's school UPenn", () => {
      const joe = new Intern("Paul", "103", "Paul@work.com", "UPenn");

      expect(joe.getSchool()).toEqual("UPenn");
    });
  });

  describe("getRole", () => {
    it("you should see the employee's role listed as Intern", () => {
      const joe = new Intern("Paul", "103", "Paul@work.com", "UPenn");

      expect(joe.getRole()).toEqual("<img src=\"../assets/images/internwht.png\" alt=\"Intern\"> Intern");
    });
  });

});