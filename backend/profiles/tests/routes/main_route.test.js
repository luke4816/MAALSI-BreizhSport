const request = require("supertest");
const app = require("../../app/api");

describe("Main router", () => {
    describe("TRY GET", () => {
        it("Should return 200", async () => {
            const response = await request(app).get("/");
            expect(response.status).toBe(200);
        });
        it("Should return 501", async () => {
            const response = await request(app).get("/gfdgdrytry");
            expect(response.status).toBe(501);
        });
    });
    describe("TRY POST", () => {
        it("Should return 501", async () => {
            const response = await request(app).post("/gfdgdrytry");
            expect(response.status).toBe(501);
        });
    });
    describe("TRY PUT", () => {
        it("Should return 501", async () => {
            const response = await request(app).put("/gfdgdrytry");
            expect(response.status).toBe(501);
        });
    });
    describe("TRY PATCH", () => {
        it("Should return 501", async () => {
            const response = await request(app).patch("/gfdgdrytry");
            expect(response.status).toBe(501);
        });
    });
    describe("TRY DELETE", () => {
        it("Should return 501", async () => {
            const response = await request(app).delete("/gfdgdrytry");
            expect(response.status).toBe(501);
        });
    });
});
