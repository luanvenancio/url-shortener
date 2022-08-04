import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';
import express from 'express';

const PORT = process.env.PORT;
const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post("/api", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(PORT, () => console.log("Express Listening to Port:" + PORT));
