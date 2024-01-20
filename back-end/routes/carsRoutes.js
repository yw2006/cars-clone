import { getcars, getDetails,searchCars, makeorder, updateaddress } from "../utils/database.js";

import { Router } from "express";
const router = Router();

router.get("/cars", async (req, res) => {
  try {
    const cars = await getcars();
    res.json(cars);
  } catch (err) {
    console.error("Error fetching cars data:", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});
router.get("/carsDetails/:id", async (req, res) => {
  try {
    const car_id = req.params.id;
    const details = await getDetails(car_id);
    res.json(details);
  } catch (error) {
    console.error("Error fetching cars data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get('/search/:model/:price', async (req, res) => {
  try {
    // const type = req.query.type;
    const model = req.params.model;
    const price = req.params.price;
    const searched_cars = await searchCars(model, price);
    res.json(searched_cars);
  } catch (error) {
    console.error("Error fetching cars data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/checkout/:id',async(req,res) => {
    try {
        const alldata = req.body
        const car_id = req.params.id

        console.log(alldata)
        const order = await makeorder({price:alldata.price,customer_id:Number(alldata.customer_id),id:car_id});
        console.log(order)
        const update=await updateaddress(alldata.address_1,alldata.address_2,alldata.customer_id)
        console.log(order.insertId);
        res.json({id:order[0].insertId,message:"added succefly"})
    } catch (err) {
        console.log('error in order',err)
        res.json({message:err.message})
    }
})


export default router;