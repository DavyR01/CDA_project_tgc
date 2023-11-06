import { Request, Response } from "express";
import { db } from "../index";

const adsController = {
  read: (req: Request, res: Response) => {
    db.all("SELECT * from addd", (err, rows) => {
      res.send(rows);
    });
  },
  create: (req: Request, res: Response) => {
    db.run(
      `
      INSERT INTO addd (title, description, owner, price, location, createdAt, picture, category_id)
      VALUES (
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.owner}",
        "${req.body.price}",
        "${req.body.location}",
        "${req.body.createdAt}",
        "${req.body.picture}",
        "${req.body.category_id}"
      );
    `,
      (err: any, rows: any) => {
        if (err) {
          console.log("error", err);
          res.send("Error while adding the ad");
        } else {
          res.send("The ad has been added");
        }
      }
    );
  },
  delete: (req: Request, res: Response) => {
    db.run("DELETE FROM addd WHERE ID = ?;", [req.body.id], () => {
      res.send("The ad has been deleted");
    });
  },
  put: (req: Request, res: Response) => {
    db.run(
      `
        UPDATE addd
        SET
          title=?,
          description=?,
          price=?,
          createdAt=?,
          picture=?,
          location=?
        WHERE id=?
      `,
      [
        req.body.newAd.title, // On a défini newAd dans la requete HTTP côté client (ads.http)
        req.body.newAd.description,
        req.body.newAd.price,
        req.body.newAd.createdAt,
        req.body.newAd.picture,
        req.body.newAd.location,
        req.body.idToEdit, // On a défini idToEdit qui est l'id de l'annonce que l'on veut modifier dans la requete HTTP côté client (ads.http)
      ],
      (err) => {
        if (err) {
          console.log(err);
        }
        res.send("The ad has been edited");
      }
    );
  },
};

export default adsController;
