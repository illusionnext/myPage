// 'use strict';
// npm install dotenv --save
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import * as dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import * as path from 'path';
// import Web3 from 'web3';
// import 'public/scripts/web3-provider.js';

dotenv.config();
const app = express(),
  __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename);
// web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
// app.port()

app.listen(
  process.env.PORT,
  console.log(`server is running on ${process.env.PORT} port 🚨`)
);
