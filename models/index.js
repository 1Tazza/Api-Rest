import { default as nosqlUsers } from "./nosql/users.js";
import { default as nosqlTracks } from "./nosql/tracks.js";
import { default as nosqlStorages } from "./nosql/storage.js";

import { default as postgreSqlUsers } from "./postgreSql/users.js";
import { default as postgreSqlTracks } from "./postgreSql/tracks.js";
import { default as postgreSqlStorages } from "./postgreSql/storage.js";

const ENGINE_DB = process.env.ENGINE_DB;

const Users = (ENGINE_DB === "nosql") ? nosqlUsers : postgreSqlUsers;
const Tracks = (ENGINE_DB === "nosql") ? nosqlTracks : postgreSqlTracks;
const Storages = (ENGINE_DB === "nosql") ? nosqlStorages : postgreSqlStorages;

export { Users, Tracks, Storages };

