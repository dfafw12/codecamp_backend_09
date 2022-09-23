import { Starbucks } from "../models/starbucksSchema.js";

export class StarbucksController {
  lookUpStarbucks = async (req, res) => {
    const result = await Starbucks.find();
    console.log(result);
    res.send(result);
  };
}
