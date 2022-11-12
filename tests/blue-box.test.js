const BlueBox = require("../lib/blue-box");

describe("Super Special Blue Box Tests", () => {
    descripbe("Super Special Blue Box Tests", () => {
    it("should return 'Blue Box' ", () => {
        
        const bluebox = new BlueBox();

        expect(bluebox.getBoxName()).toEqual("Blue Box");
        });
    });
});