"use strict";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { MongoClient } from "mongodb";

const app = express();
dotenv.config();

let client, db;
const connectToMongoDB = async () => { client = new MongoClient(process.env.mongoDBConnect); await client.connect(); db = client.db("illusion") };

(async () => await connectToMongoDB()
  .then(() => { console.log("Connected to MongoDB 😍"), app.listen(process.env.port, () => { console.log(`Server's started at ${process.env.port} 🚨`) }); })
  .catch((err) => { console.log(err) })
  .finally(async () => await console.log("MongoDB connection's been ended 😞")))
  ();

app.use(express.json(), cors);

export const collection = (x) => db.collection(x);

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
// app.use("/auth", require('./routes/auth.routes'));