// import "reflect-metadata";
// import express, { Express } from "express";
// import dataSource from "../config/db";
// import adsController from "./controllers/adsController";
// import categoryController from "./controllers/categoryController";
// import tagController from "./controllers/tagController";
// import cors from "cors";

// const app: Express = express();
// const port: number = 4000;

// app.use(cors())
// app.use(express.json());

// app.get("/ad", adsController.read);
// app.post("/ad", adsController.create);
// app.get("/ad/:id", adsController.readOne);
// app.delete("/ad", adsController.delete);
// // app.delete("/ad/:id", adsController.delete);
// app.put("/ad", adsController.put);


// app.get("/category", categoryController.read);
// app.post("/category", categoryController.create);

// app.get("/tag", tagController.read);
// app.post("/tag", tagController.create);

// app.listen(port, async () => {
//   await dataSource.initialize();
//   console.log(`Example app listening on port ${port}`);
// });
