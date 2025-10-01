const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/server');
process.env.NODE_ENV = "test";

//Integration tests for server

describe("server.js", () => {
    it("Responds when adding hex code to the url", async () => {
        const res = await request(app).get("/802E11");
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({r: 128, g: 46, b: 17});
    });
});