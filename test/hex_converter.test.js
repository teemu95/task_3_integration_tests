const { expect } = require('chai')
const { hexToRgb } = require('../src/hex_converter')


//Unit tests for hex_converter.
 

describe("hex_converter.js", () => {
    it("Should throw an error when there are numbers in parameters", () => {
        expect(() => hexToRgb(202244)).to.throw("Color must be a string")
    });

    it("Should throw an error when the length is invalid", () => {
        expect(() => hexToRgb("2255")).to.throw("Invalid hex RGB. Use #RGB or #RRGGBB")
    });

    it("Should return right { r, g, b } values from hex", () => {
        expect(hexToRgb("802E11")).to.deep.equal({"r": 128, "g": 46, "b": 17})
    })
});