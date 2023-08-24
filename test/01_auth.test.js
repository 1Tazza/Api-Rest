import supertest from "supertest";
import app from "../app";

describe("[AUTH] this is the test of /api/auth", () => {
    test("this should return 404", async() => {
        const response = await supertest(app)
        .post("/auth/login")
        .send(
            {"email": "tazita@gmailpruebaError.com", "password": "44444444"}
            )
        
        expect(response.statusCode).toEqual(404)
    })
})