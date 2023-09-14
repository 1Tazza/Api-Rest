import supertest from "supertest";
import app from "../app.js";
import { Storages, Users } from "../models/index.js";
import { tokenSign } from "../utils/handleJwt.js";
let JWT_TOKEN = ""
const filePath = `${__dirname}/img_test/MaradonaBarça.webp`;

beforeAll(async()=>{
  await Users.deleteMany({});
  await Storages.deleteMany({});
  const user = await Users.create({"name": "User Test","age": 20,"email": "test2@test.com", "password": "123456789"});
  JWT_TOKEN = await tokenSign(user);
})

describe("[STORAGE] this is the test of /api/storage", ()=> {
    let id = ""

    test("Should upload an Image", async()=> {
      const res = await supertest(app) 
     .post(`/storage`)
     .set("Authorization", `Bearer ${JWT_TOKEN}`)
     .attach("myfile", filePath);
     const { body } = res
     expect(res.statusCode).toEqual(201);
     expect(body).toHaveProperty("data")
    })

   test("deberia retornar el id de un item", async() => {
    const {_id} = await Storages.findOne()
    id = _id.toString()
   })

   test("Debería retornar el detalle del item", async() => {
     const res = await supertest(app) 
     .get(`/storage/${id}`)
     .set("Authorization", `Bearer ${JWT_TOKEN}`)
     const { body } = res
     expect(res.statusCode).toEqual(200);
     expect(body).toHaveProperty("data")
   })

   test("Debería borrar el item", async() => {
    const res = await supertest(app) 
    .delete(`/storage/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`)
    const { body } = res
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data")
  })
})