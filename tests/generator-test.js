/*```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

The first class is an `Employee` parent class with the following properties and methods:

  DONE* `name`

  DONE `id`

  DONE `email`

  DONE `getName()`

  DONE`getId()`

  DONE `getEmail()`

  DONE `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s "properties" and methods, `Manager` will also have the following:

  DONE `officeNumber`

  DONE`getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

  PARTIAL DONE `github`&mdash;GitHub username

  DONE`getGithub()`

  DONE getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

  DOND `school`

  DONE`getSchool()`

  DONE getRole()`&mdash;overridden to return `'Intern'`

  

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.*/





const Employee = require("../old/generator");

describe("generator", () => {
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
