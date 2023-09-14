import supertest from "supertest";
import app from "../app.js";
import { Users } from "../models/index.js";

const testAuthLogin = {"email": "test@test.com", "password": "123456789"}

const testAuthRegister = {"name": "User Test","age": 20,"email": "test@test.com", "password": "123456789"}

beforeAll(async() => {
  await Users.deleteMany({});
})

describe("[AUTH] this is the test of /api/auth", () => {
    test("this should return 404", async() => {
        const response = await supertest(app)
        .post("/auth/login")
        .send(testAuthLogin)
       
        expect(response.statusCode).toEqual(404)
    })
    test("this should return 201", async() => {
        const response = await supertest(app)
        .post("/auth/register")
        .send(testAuthRegister)
       
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("data")
        expect(response.body).toHaveProperty("data.token")
        expect(response.body).toHaveProperty("data.user")
    })

    test("this should return 401 not valid Password", async() => {
        const newTestAuthLogin = {...testAuthLogin, "password": "invalidpassword"}
        const response = await supertest(app)
        .post("/auth/login")
        .send(newTestAuthLogin)
        expect(response.statusCode).toEqual(401)
    })

    test("this should return 200 succesful login", async() => {
        const response = await supertest(app)
        .post("/auth/login")
        .send(testAuthLogin)
        expect(response.statusCode).toEqual(201)
    })
})