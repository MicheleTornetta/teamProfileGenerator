const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("you should see the employee's name Sam", () => {
      const joe = new Engineer("Sam", "101", "sam@work.com", "samyoung", "Engineer");

      expect(joe.getName()).toEqual("Sam");
    });
  });

  describe("getId", () => {
    it("you should see the employee's Id 101", () => {
      const joe = new Engineer("Sam", "101", "sam@work.com", "samyoung");

      expect(joe.getId()).toEqual("101");
    });
  });

  describe("getEmail", () => {
    it("you should see the employee's email sam@work.com", () => {
      const joe = new Engineer("Sam", "101", "sam@work.com", "samyoung");

      expect(joe.getEmail()).toEqual("sam@work.com");
    });
  });

  describe("getGithub", () => {
    it("you should see the employee's github login samyoung", () => {
      const joe = new Engineer("Sam", "101", "sam@work.com", "samyoung");

      expect(joe.getGithub()).toEqual("samyoung");
    });
  });

  describe("getRole", () => {
    it("you should see the employee's role listed as Engineer", () => {
      const joe = new Engineer("Sam", "101", "sam@work.com", "samyoung");

      expect(joe.getRole()).toEqual("<img src=\"../assets/images/engineerwht.png\" alt=\"Engineer\"> Engineer");
    });
  });

});