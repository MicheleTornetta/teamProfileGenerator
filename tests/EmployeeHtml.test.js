const Employee = require("../lib/employee");
const createHtml = require("../src/createhtml");

describe("createhtml", () => {
    describe("createHtml", () => {
        it("should return blank html data if no employees", () => {
            expect(createHtml([])).toEqual("");
        });
    });
    describe("createHtml", () => {
        it("should return html data if there are one or more employees", () => {
            expect(createHtml([new Employee("joe", 100, "joe@email.com")])).toEqual(`<li class=\"row\"><div class=\"col\">
        <div class=\"topBox\">
        <h2 class=\"padding\">joe</h2>
        <h2 class=\"padding\">Employee</h2>
        </div>
        <div id=\"bottomBox\">
        <p>ID: 100</p>
        <p>Email: <a href=\"mailto:joe@email.com\">joe@email.com</a></p>
        <p>: </p>
        </div>
    </div>  
        </li>`);
        });
    });
}); 

