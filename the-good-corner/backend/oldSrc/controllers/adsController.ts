// import { Request, Response } from "express";
// import { Ad } from "../entities/ad";
// import { Like } from "typeorm";
// // import { Tag } from "../entities/tag";

// const adsController = {
//   read: async (req: Request, res: Response) => {
//     let result: Ad[] = [];
//     try {
//       if (req.query.title !== undefined) {
//         result = await Ad.find({
//           where: { title: Like(`%${req.query.title}%`) },
//           relations: {
//             category: true,
//             tags: true,
//           },
//         })
//         console.log(req.query.title);
//       } else {
//         console.log("no title in query");
//         result = await Ad.find({
//           relations: {
//             category: true,
//             tags: true,
//           },
//         });
//       }
//       // console.log(result);
//       res.send(result);

//     } catch (err) {
//       res.send("There has been an error while reading the ads");
//     }
//   },

//   readOne: async (req: Request, res: Response) => {
//     try {
//       const result = await Ad.find({
//         where: {
//           id: parseInt(req.params.id)
//         },
//         relations: { category: true },
//       });
//       if (result.length !== 1) {
//         throw new Error('Query error')
//       }
//       res.send(result[0])
//     } catch (error) {
//       console.log(error);
//       res.send("an error occured while reading one ad")
//     }
//   },

//   create: async (req: Request, res: Response) => {
//     try {
//       /*
//       const newAd = Ad.create(req.body);
//       const tagsToAssociate = await Tag.find(req.body.tags);
//       newAd.tags = tagsToAssociate;

//       await newAd.save();
//       */
//       await Ad.save(req.body);
//       console.log(req.body);

//       res.send("Ad has been created");
//     } catch (err) {
//       res.send("An error occured while creating the ad");
//     }
//   },
//   delete: async (req: Request, res: Response) => {
//     try {
//       const adToDelete = await Ad.findOneByOrFail({ id: req.body.id });
//       adToDelete.remove();
//       res.send("The ad has been deleted");
//     } catch (err) {
//       console.log("error", err);
//       res.send("An error occured while deleting the ad");
//     }
//   },
//   put: async (req: Request, res: Response) => {
//     try {
//       const oldAd = await Ad.findOneByOrFail({ id: req.body.idToEdit });
//       Ad.save({ ...oldAd, ...req.body.newAd });
//       res.send("The ad has been updated");
//     } catch (err) {
//       console.log(err);
//       res.send("there has been an error while updating the ad");
//     }
//   },
// };

// export default adsController;
