import supertest from "supertest";
import app from "../app.js";
import { Storages, Tracks, Users } from "../models/index.js";
import { tokenSign } from "../utils/handleJwt.js";
let JWT_TOKEN = ""
let STORAGE_ID = "";
const testDataTrack = {
    name: "Ejemplo",
    album: "Ejemplo",
    cover: "http://image.com",
    artist: {
      name: "Ejemplo",
      nickname: "Ejemplo",
      nationality: "VE",
    },
    duration: {
      start: 1,
      end: 3,
    },
    mediaId: "",
}

beforeAll(async()=>{
    await Users.deleteMany({});
    await Storages.deleteMany({});
    const user = await Users.create({"name": "User Test","age": 20,"email": "test2@test.com", "password": "123456789"});
    const testStorageRegister = {
        url: "http://localhost:3001/file-test.mp3",
        filename: "file-test.mp3"
      };
    const storage = await Storages.create(testStorageRegister);
    STORAGE_ID = storage._id.toString();
    JWT_TOKEN = await tokenSign(user);
  })


    
    test("should register an item", async () => {
        const dataTracksNew = { 
          ...testDataTrack, 
          mediaId: STORAGE_ID };
        const res = await supertest(app)
          .post("/tracks")
          .set("Authorization", `Bearer ${JWT_TOKEN}`)
          .send(dataTracksNew);
        const { body } = res;
        expect(res.statusCode).toEqual(201);
        expect(body).toHaveProperty("newTrack");
        expect(body).toHaveProperty("newTrack.name");
        expect(body).toHaveProperty("newTrack.artist");
        expect(body).toHaveProperty("newTrack.cover");
      })

      test("should return all items", async () => {
        const res = await supertest(app)
          .get("/tracks")
          .set("Authorization", `Bearer ${JWT_TOKEN}`)

        const { body } = res;
        expect(res.statusCode).toEqual(200);
        expect(body).toHaveProperty("data");
      })

      test("should return detail's item", async () => {
        const { _id } = await Tracks.findOne({});
        let id = _id.toString();
        const res = await supertest(app)
        .get(`/tracks/${id}`)
        .set("Authorization", `Bearer ${JWT_TOKEN}`);
        const { body } = res;
        expect(res.statusCode).toEqual(200);
        expect(body).toHaveProperty("data");

      })
  
      test("debe eliminar el item", async () => {
        const { _id } = await Tracks.findOne({});
        let id = _id.toString();
        const res = await supertest(app)
          .delete(`/tracks/${id}`)
          .set("Authorization", `Bearer ${JWT_TOKEN}`);
        const { body } = res;
        
        expect(res.statusCode).toEqual(200);
        expect(body).toHaveProperty("data");
        expect(body).toHaveProperty("data.modifiedCount", 1);
      });